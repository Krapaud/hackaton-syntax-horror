#!/usr/bin/env python3
"""Script pour supprimer un utilisateur de la base de données"""

import os
import sys
from app import app, db, User, Progress

def delete_user(username):
    """Supprimer un utilisateur et sa progression"""
    with app.app_context():
        # Rechercher l'utilisateur
        user = User.query.filter_by(username=username).first()
        
        if not user:
            print(f"Utilisateur '{username}' non trouvé dans la base de données.")
            return False
        
        # Supprimer d'abord la progression associée
        progress = Progress.query.filter_by(user_id=user.id).all()
        for p in progress:
            db.session.delete(p)
        
        # Supprimer l'utilisateur
        db.session.delete(user)
        
        # Commiter les changements
        db.session.commit()
        
        print(f"Utilisateur '{username}' et sa progression ont été supprimés avec succès.")
        return True

if __name__ == '__main__':
    username = 'Krapaud'
    if len(sys.argv) > 1:
        username = sys.argv[1]
    
    print(f"Suppression de l'utilisateur '{username}'...")
    delete_user(username)
