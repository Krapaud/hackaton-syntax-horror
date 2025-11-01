/**
 * Gestionnaire de salles pour l'Escape Game
 * Charge et affiche les salles dynamiquement depuis rooms.json
 */

class RoomManager {
    constructor() {
        this.rooms = [];
        this.roomsContainer = null;
        this.initialized = false;
    }

    /**
     * Initialise le gestionnaire de salles
     */
    async initialize() {
        try {
            // Attendre que le DOM soit complètement chargé
            if (document.readyState !== 'complete') {
                await new Promise(resolve => {
                    window.addEventListener('load', resolve);
                });
            }

            // Charger les données des salles
            const response = await fetch('/static/data/rooms.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            this.rooms = data.rooms;

            // Récupérer le conteneur
            this.roomsContainer = document.querySelector('.puzzles-grid');
            if (!this.roomsContainer) {
                throw new Error('Conteneur .puzzles-grid introuvable');
            }

            // Générer les salles
            this.renderRooms();
            
            // Charger la progression après un court délai pour s'assurer que le DOM est prêt
            setTimeout(() => {
                this.loadProgress();
            }, 200);

            this.initialized = true;

        } catch (error) {
            console.error('[RoomManager] Erreur lors de l\'initialisation:', error);
        }
    }

    /**
     * Génère et affiche toutes les salles
     */
    renderRooms() {
        // Vider le conteneur
        this.roomsContainer.innerHTML = '';

        // Créer chaque salle
        this.rooms.forEach((room, index) => {
            const roomElement = this.createRoomElement(room, index);
            this.roomsContainer.appendChild(roomElement);
            
            // Masquer TOUTES les salles sauf la première initialement
            if (index > 0) {
                roomElement.style.display = 'none';
                roomElement.classList.add('locked');
            } else {
                roomElement.classList.add('unlocked');
            }
        });
    }

    /**
     * Crée l'élément HTML d'une salle
     */
    createRoomElement(room, index) {
        const div = document.createElement('div');
        div.className = 'puzzle-card';
        div.setAttribute('data-puzzle', room.id);
        div.setAttribute('data-room-index', index);

        // Header
        const header = this.createHeader(room);
        
        // Contenu
        const content = this.createContent(room);

        div.innerHTML = header + content;
        
        return div;
    }

    /**
     * Crée le header d'une salle
     */
    createHeader(room) {
        return `
            <div class="puzzle-header">
                <h3>${room.title}</h3>
                <span class="difficulty ${room.difficulty}">${room.difficultyLabel}</span>
            </div>
        `;
    }

    /**
     * Crée le contenu d'une salle
     */
    createContent(room) {
        let content = '<div class="puzzle-content">';
        
        // Atmosphère
        content += '<div class="room-intro">';
        room.atmosphere.forEach(text => {
            content += `<p class="room-atmosphere">${text}</p>`;
        });
        content += '</div>';
        
        // Mission
        content += `
            <div class="mission-brief">
                <div class="mission-header">MISSION</div>
                <p>${room.mission}</p>
            </div>
        `;
        
        // Contenu spécial selon le type
        content += this.createSpecialContent(room);
        
        // Hint
        content += `
            <div class="puzzle-hint">
                ${room.hint}
            </div>
        `;
        
        // Zone de réponse
        content += `
            <div class="puzzle-answer">
                <input type="text" 
                       class="answer-input" 
                       id="answer-${room.id}" 
                       placeholder="${room.placeholder}">
                <button class="btn-submit" onclick="submitAnswer('${room.id}')">
                    ${room.buttonText}
                </button>
            </div>
        `;
        
        content += '</div>';
        return content;
    }

    /**
     * Crée le contenu spécial selon le type de salle
     */
    createSpecialContent(room) {
        let content = '';
        
        // Code block
        if (room.codeBlock) {
            content += `
                <pre class="code-block terminal-glow"><code class="language-${room.codeBlock.language}">${this.escapeHtml(room.codeBlock.code)}</code></pre>
            `;
        }
        
        // Investigation (F12)
        if (room.specialContent === 'investigation') {
            content += '<div class="investigation-zone">';
            room.clues.forEach(clue => {
                content += `<div class="clue-box">${clue}</div>`;
            });
            content += '</div>';
        }
        
        // SQL Terminal
        if (room.specialContent === 'sql') {
            content += `
                <div class="terminal-interface">
                    <div class="terminal-header">
                        SQL CONSOLE - secret_data@haunted_db
                    </div>
                    <div class="sql-console">
                        <span class="terminal-prompt">mysql></span>
                        <input type="text" 
                               class="sql-input" 
                               id="sql-search" 
                               placeholder="SELECT * FROM secret_data WHERE ...">
                        <button class="btn-submit" onclick="searchDatabase()">
                            EXÉCUTER LA REQUÊTE
                        </button>
                    </div>
                    <div class="terminal-status">
                        STATUS: Protections désactivées | Injections autorisées
                    </div>
                </div>
                <div id="sql-results" class="sql-results"></div>
            `;
        }
        
        // Code Analysis
        if (room.codeAnalysis) {
            content += '<div class="code-analysis">';
            room.codeAnalysis.forEach(analysis => {
                const type = analysis.includes('ERREURS') ? 'error' : 'success';
                content += `<div class="analysis-box ${type}">${analysis}</div>`;
            });
            content += '</div>';
        }
        
        return content;
    }

    /**
     * Échappe le HTML
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Charge la progression du joueur
     */
    async loadProgress() {
        try {
            const response = await fetch('/api/progress');
            const data = await response.json();
            
            // Récupérer la liste des énigmes complétées
            const completedPuzzles = data.completed_puzzles || [];
            
            // Parcourir toutes les salles pour gérer leur état
            this.rooms.forEach((room, index) => {
                const card = document.querySelector(`[data-puzzle="${room.id}"]`);
                if (!card) return;
                
                if (completedPuzzles.includes(room.id)) {
                    // Salle résolue : masquer
                    card.classList.add('solved');
                    card.classList.remove('locked', 'unlocked');
                    card.style.display = 'none';
                } else if (index === 0) {
                    // Première salle : toujours visible si non résolue
                    card.classList.add('unlocked');
                    card.classList.remove('locked');
                    card.style.display = '';
                } else {
                    // Vérifier si la salle précédente est résolue
                    const previousRoom = this.rooms[index - 1];
                    if (completedPuzzles.includes(previousRoom.id)) {
                        // Salle précédente résolue : déverrouiller cette salle
                        card.classList.add('unlocked');
                        card.classList.remove('locked');
                        card.style.display = '';
                    } else {
                        // Salle précédente non résolue : garder verrouillée
                        card.classList.add('locked');
                        card.classList.remove('unlocked');
                        card.style.display = 'none';
                    }
                }
            });
            
        } catch (error) {
            console.error('[RoomManager] Erreur chargement progression:', error);
        }
    }

    /**
     * Déverrouille la salle suivante (appelé lors de la résolution d'une énigme)
     */
    unlockNextRoom(currentPuzzleId) {
        // Masquer la salle actuelle résolue
        const currentCard = document.querySelector(`[data-puzzle="${currentPuzzleId}"]`);
        if (currentCard) {
            currentCard.classList.add('solved');
            currentCard.classList.remove('unlocked');
            setTimeout(() => {
                currentCard.style.display = 'none';
            }, 1500); // Laisser le temps de voir l'animation de succès
        }
        
        const currentIndex = this.rooms.findIndex(room => room.id === currentPuzzleId);
        if (currentIndex === -1 || currentIndex >= this.rooms.length - 1) {
            return;
        }

        const nextRoom = this.rooms[currentIndex + 1];
        const nextCard = document.querySelector(`[data-puzzle="${nextRoom.id}"]`);
        
        if (!nextCard) {
            console.error(`[RoomManager] Salle ${nextRoom.id} introuvable dans le DOM`);
            return;
        }

        // Animation de déverrouillage de la prochaine salle
        setTimeout(() => {
            nextCard.classList.remove('locked');
            nextCard.classList.add('unlocked');
            nextCard.style.display = '';
            nextCard.style.animation = 'fadeInUp 0.8s ease-out';
        }, 2000); // Déverrouiller après que la salle actuelle soit masquée
    }

    /**
     * Récupère une salle par son ID
     */
    getRoomById(roomId) {
        return this.rooms.find(room => room.id === roomId);
    }

    /**
     * Récupère le nombre total de salles
     */
    getTotalRooms() {
        return this.rooms.length;
    }
}

// Instance globale
window.roomManager = new RoomManager();

// Initialisation automatique
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('game-main')) {
            window.roomManager.initialize();
        }
    });
} else {
    // DOM déjà chargé
    if (document.getElementById('game-main')) {
        window.roomManager.initialize();
    }
}
