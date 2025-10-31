"""
Script de test pour vérifier le bon fonctionnement de l'application
"""

import sys
import os

def test_imports():
    """Test des imports Python"""
    print("🔍 Test des imports...")
    try:
        from flask import Flask
        from flask_sqlalchemy import SQLAlchemy
        from flask_login import LoginManager
        from werkzeug.security import generate_password_hash, check_password_hash
        print("✅ Tous les imports sont OK")
        return True
    except ImportError as e:
        print(f"❌ Erreur d'import: {e}")
        return False

def test_file_structure():
    """Test de la structure des fichiers"""
    print("\n🔍 Test de la structure des fichiers...")
    required_files = [
        'app.py',
        'requirements.txt',
        'Dockerfile',
        'docker-compose.yml',
        'templates/base.html',
        'templates/index.html',
        'templates/login.html',
        'templates/register.html',
        'templates/game.html',
        'static/css/style.css',
        'static/js/main.js'
    ]
    
    all_ok = True
    for file in required_files:
        if os.path.exists(file):
            print(f"✅ {file}")
        else:
            print(f"❌ {file} - MANQUANT")
            all_ok = False
    
    return all_ok

def test_app_creation():
    """Test de création de l'application"""
    print("\n🔍 Test de création de l'application...")
    try:
        from app import app, db
        print("✅ Application Flask créée")
        
        # Test du contexte
        with app.app_context():
            print("✅ Contexte de l'application OK")
            
        return True
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def test_database():
    """Test de la base de données"""
    print("\n🔍 Test de la base de données...")
    try:
        from app import app, db, User, Progress, SecretData
        
        with app.app_context():
            # Créer les tables
            db.create_all()
            print("✅ Tables créées")
            
            # Vérifier que les tables existent
            tables = db.metadata.tables.keys()
            expected_tables = ['user', 'progress', 'secret_data']
            
            for table in expected_tables:
                if table in tables:
                    print(f"✅ Table '{table}' existe")
                else:
                    print(f"❌ Table '{table}' manquante")
                    return False
            
            return True
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def test_routes():
    """Test des routes"""
    print("\n🔍 Test des routes...")
    try:
        from app import app
        
        routes = [
            '/',
            '/register',
            '/login',
            '/game',
            '/api/progress',
            '/api/check_answer',
            '/api/leaderboard',
            '/api/search_secrets'
        ]
        
        all_ok = True
        for route in routes:
            # Vérifier que la route existe dans l'application
            found = False
            for rule in app.url_map.iter_rules():
                if rule.rule == route:
                    found = True
                    print(f"✅ Route {route}")
                    break
            
            if not found:
                print(f"❌ Route {route} - NON TROUVÉE")
                all_ok = False
        
        return all_ok
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def main():
    """Fonction principale de test"""
    print("=" * 50)
    print("🎃 SYNTAX HORROR - Tests de l'application 🎃")
    print("=" * 50)
    
    tests = [
        ("Imports", test_imports),
        ("Structure des fichiers", test_file_structure),
        ("Création de l'application", test_app_creation),
        ("Base de données", test_database),
        ("Routes", test_routes)
    ]
    
    results = []
    for name, test_func in tests:
        try:
            result = test_func()
            results.append((name, result))
        except Exception as e:
            print(f"❌ Erreur lors du test '{name}': {e}")
            results.append((name, False))
    
    # Résumé
    print("\n" + "=" * 50)
    print("📊 RÉSUMÉ DES TESTS")
    print("=" * 50)
    
    total = len(results)
    passed = sum(1 for _, result in results if result)
    
    for name, result in results:
        status = "✅ PASSÉ" if result else "❌ ÉCHOUÉ"
        print(f"{status} - {name}")
    
    print("\n" + "=" * 50)
    print(f"Résultat: {passed}/{total} tests réussis")
    
    if passed == total:
        print("🎉 Tous les tests sont passés !")
        return 0
    else:
        print("⚠️ Certains tests ont échoué")
        return 1

if __name__ == "__main__":
    sys.exit(main())
