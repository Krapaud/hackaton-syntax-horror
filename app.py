import os
from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')
app.config['SESSION_TYPE'] = 'filesystem'
app.config['PERMANENT_SESSION_LIFETIME'] = 86400  # 24 heures
app.config['SESSION_COOKIE_SECURE'] = False  # True en production avec HTTPS
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['REMEMBER_COOKIE_DURATION'] = 86400  # 24 heures
# Utiliser un chemin absolu pour la base de données
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data', 'escape_game.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Modèles de base de données
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    progress = db.relationship('Progress', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    level = db.Column(db.Integer, default=1)
    score = db.Column(db.Integer, default=0)
    completed_puzzles = db.Column(db.String(500), default='')  # Liste des énigmes résolues
    attempts = db.Column(db.Integer, default=0)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# Table cachée pour énigme SQL injection (cybersécurité)
class SecretData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    secret_code = db.Column(db.String(50))
    flag = db.Column(db.String(100))
    hint = db.Column(db.String(200))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Routes principales
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.json
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        
        if User.query.filter_by(username=username).first():
            return jsonify({'success': False, 'message': 'Nom d\'utilisateur déjà pris'}), 400
        
        if User.query.filter_by(email=email).first():
            return jsonify({'success': False, 'message': 'Email déjà utilisé'}), 400
        
        user = User(username=username, email=email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        
        # Créer la progression initiale
        progress = Progress(user_id=user.id)
        db.session.add(progress)
        db.session.commit()
        
        return jsonify({'success': True, 'message': 'Inscription réussie'})
    
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.json
        username = data.get('username')
        password = data.get('password')
        
        user = User.query.filter_by(username=username).first()
        
        if user and user.check_password(password):
            login_user(user, remember=True)
            session.permanent = True
            return jsonify({'success': True, 'message': 'Connexion réussie'})
        
        return jsonify({'success': False, 'message': 'Identifiants invalides'}), 401
    
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/game')
@login_required
def game():
    progress = Progress.query.filter_by(user_id=current_user.id).first()
    return render_template('game.html', progress=progress)

@app.route('/puzzle5')
@login_required
def puzzle5():
    """Route pour la salle 5 - Enveloppe maudite"""
    return render_template('puzzle5_envelope.html')

@app.route('/puzzle6')
@login_required
def puzzle6():
    """Route pour la salle 6 - Archives cryptées"""
    return render_template('puzzle6_archives.html')

@app.route('/api/progress')
@login_required
def get_progress():
    progress = Progress.query.filter_by(user_id=current_user.id).first()
    return jsonify({
        'level': progress.level,
        'score': progress.score,
        'completed_puzzles': progress.completed_puzzles.split(',') if progress.completed_puzzles else [],
        'attempts': progress.attempts
    })

@app.route('/api/check_answer', methods=['POST'])
@login_required
def check_answer():
    data = request.json
    puzzle_id = data.get('puzzle_id')
    answer = data.get('answer', '').strip()
    
    progress = Progress.query.filter_by(user_id=current_user.id).first()
    progress.attempts += 1
    
    # Définition des réponses correctes pour chaque énigme
    correct_answers = {
        'puzzle1': '5',  # Énigme Python - compter les lettres L et E dans HALLOWEEN
        'puzzle2': 'HALLOWEEN2025',  # Flag caché dans la console F12
        'puzzle3': 'sp00ky_p4ssw0rd',  # Énigme SQL - mot de passe dans BDD
        'puzzle4': '42',  # Énigme C - correction de syntaxe
        'puzzle5': 'FRI13TH',  # Mot de passe dans le fichier lettre_enigme.txt
        'puzzle6': 'DARK-CODE-2025-HORROR',  # Énigme archives cryptées - 4 fragments
    }
    
    correct = correct_answers.get(puzzle_id, '').lower() == answer.lower()
    
    if correct:
        completed = progress.completed_puzzles.split(',') if progress.completed_puzzles else []
        if puzzle_id not in completed:
            completed.append(puzzle_id)
            progress.completed_puzzles = ','.join(completed)
            progress.score += 100
            progress.level = len(completed)
            db.session.commit()
        
        return jsonify({
            'success': True,
            'correct': True,
            'message': 'Bravo ! Vous avez résolu l\'énigme !',
            'score': progress.score,
            'level': progress.level
        })
    else:
        db.session.commit()
        return jsonify({
            'success': True,
            'correct': False,
            'message': 'Mauvaise réponse... Préparez-vous !',
            'attempts': progress.attempts
        })

@app.route('/api/leaderboard')
def leaderboard():
    top_players = db.session.query(
        User.username,
        Progress.score,
        Progress.level
    ).join(Progress).order_by(Progress.score.desc()).limit(10).all()
    
    return jsonify([{
        'username': player[0],
        'score': player[1],
        'level': player[2]
    } for player in top_players])

@app.route('/api/reset_progress', methods=['POST'])
@login_required
def reset_progress():
    """Réinitialise la progression de l'utilisateur pour recommencer le jeu"""
    try:
        progress = Progress.query.filter_by(user_id=current_user.id).first()
        if progress:
            progress.completed_puzzles = ''
            progress.score = 0
            progress.level = 1
            progress.attempts = 0
            db.session.commit()
            return jsonify({
                'success': True,
                'message': 'Progression réinitialisée avec succès'
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Progression introuvable'
            }), 404
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Erreur: {str(e)}'
        }), 500

@app.route('/static/data/rooms.json')
def rooms_data():
    """Servir le fichier JSON des salles"""
    from flask import send_from_directory
    return send_from_directory('data', 'rooms.json')

# Énigme SQL - endpoint vulnérable intentionnellement pour l'énigme
@app.route('/api/search_secrets', methods=['POST'])
@login_required
def search_secrets():
    data = request.json
    search_term = data.get('search', '')
    
    # ATTENTION: Vulnérabilité SQL Injection intentionnelle pour l'énigme
    # Dans un vrai projet, TOUJOURS utiliser des requêtes paramétrées !
    try:
        query = f"SELECT hint FROM secret_data WHERE secret_code LIKE '%{search_term}%'"
        result = db.session.execute(db.text(query)).fetchall()
        hints = [row[0] for row in result]
        return jsonify({'hints': hints})
    except:
        return jsonify({'hints': ['Erreur dans la requête']})

def init_db():
    """Initialiser la base de données avec des données de test"""
    with app.app_context():
        # Créer le dossier data s'il n'existe pas
        os.makedirs('data', exist_ok=True)
        
        db.create_all()
        
        # Ajouter des données secrètes pour l'énigme SQL
        if SecretData.query.count() == 0:
            secrets = [
                SecretData(secret_code='admin', flag='FLAG{SQL_MASTER}', hint='Le mot de passe est: sp00ky_p4ssw0rd'),
                SecretData(secret_code='user', flag='FLAG{NICE_TRY}', hint='Ce n\'est pas le bon endroit'),
                SecretData(secret_code='ghost', flag='FLAG{BOO}', hint='Presque... cherchez encore'),
            ]
            db.session.add_all(secrets)
            db.session.commit()
            print("Base de données initialisée avec succès!")

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=False)
