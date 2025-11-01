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
        
        // Ajouter des commentaires HTML cachés spécialement pour la salle 2 (investigation)
        if (room.id === 'puzzle2' && room.specialContent === 'investigation') {
            content += `
                <!-- ════════════════════════════════════════════════════════════ -->
                <!-- SYSTÈME D'ARCHIVAGE NUMÉRIQUE v2.3.1 -->
                <!-- Dernière maintenance: 31/10/2025 23:59:59 -->
                <!-- ════════════════════════════════════════════════════════════ -->
                <!-- [LOG] Tentative d'accès détectée -->
                <!-- [WARN] Niveau de sécurité: FAIBLE -->
                <!-- decoy_flag_1: SPOOKY2025 -->
                <!-- decoy_flag_2: NIGHTMARE2025 -->
                <!-- backup_password: DARKWEB2025 -->
                <!-- deprecated_key: MONSTER2025 -->
                <!-- [DEBUG] Session ID: 53504F4F4B593230323500 -->
                <!-- [INFO] Decoded HEX: Try converting hex to ASCII -->
                <!-- legacy_flag: ZOMBIE2025 -->
                <!-- temp_access_code: WITCH2025 -->
                <!-- [ERROR] Corrupted data block detected -->
                <!-- test_key: GHOST2025 -->
                <!-- old_password: VAMPIRE2025 -->
                <!-- [SYSTEM] Memory dump: 0x48414C4C4F5745454E32303235 -->
                <!-- [HINT] The real flag is hidden in HEX format above -->
                <!-- decoy_flag_3: SKELETON2025 -->
                <!-- backup_flag: PUMPKIN2025 -->
                <!-- [WARNING] Unauthorized access will be logged -->
                <!-- ════════════════════════════════════════════════════════════ -->
                <!-- END OF ARCHIVE METADATA -->
                <!-- ════════════════════════════════════════════════════════════ -->
            `;
        }
        
        // Contenu spécial selon le type
        content += this.createSpecialContent(room);
        
        // Hint (seulement si présent)
        if (room.hint) {
            content += `
                <div class="puzzle-hint">
                    ${room.hint}
                </div>
            `;
        }
        
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
        
        // Téléchargement de fichier (Salle 5)
        if (room.specialContent === 'download') {
            content += `
                <div class="download-section">
                    <div class="download-instruction">
                        <h4>📥 ÉTAPE 1 : TÉLÉCHARGER LE FICHIER</h4>
                        <p>Cliquez sur le bouton ci-dessous pour télécharger le fichier crypté.</p>
                    </div>
                    <div class="download-button-container">
                        <a href="/static/images/lettre_enigme.txt" 
                           download="lettre_enigme.txt" 
                           class="btn-download">
                            📄 TÉLÉCHARGER lettre_enigme.txt
                        </a>
                    </div>
                    <div class="download-instruction">
                        <h4>🔍 ÉTAPE 2 : LIRE LE FICHIER</h4>
                        <p>Ouvrez le fichier téléchargé avec un éditeur de texte et lisez-le attentivement.</p>
                    </div>
                    <div class="download-instruction">
                        <h4>🔑 ÉTAPE 3 : TROUVER LE MOT DE PASSE</h4>
                        <p>Le mot de passe est clairement indiqué dans le fichier. Entrez-le ci-dessous.</p>
                    </div>
                </div>
            `;
        }
        
        // Énigme (pour compatibilité, si besoin)
        if (room.enigma) {
            content += '<div class="enigma-box">';
            content += '<div class="enigma-title">🔍 ÉNIGME</div>';
            room.enigma.forEach(clue => {
                content += `<div class="enigma-clue">${clue}</div>`;
            });
            content += '</div>';
        }
        
        // Investigation (F12)
        if (room.specialContent === 'investigation') {
            content += '<div class="investigation-zone">';
            room.clues.forEach(clue => {
                content += `<div class="clue-box">${clue}</div>`;
            });
            content += '</div>';
        }
        
        // Archives cryptées (Salle 6)
        if (room.specialContent === 'archives') {
            content += '<div class="investigation-zone">';
            if (room.clues) {
                room.clues.forEach(clue => {
                    content += `<div class="clue-box">${clue}</div>`;
                });
            }
            // Ajouter le texte caché avec les fragments
            content += `
                <div class="archive-text-container">
                    <div class="archive-hint">💡 Sélectionnez le texte ci-dessous, inspectez avec F12, zoomez...</div>
                    <div class="archive-text">
                        <span class="invisible-text">Fragment 1: DARK</span>
                        Les archives sont corrompues. Des données se cachent partout.
                        <span class="same-color-text">Fragment 2: CODE</span>
                        Les développeurs ont laissé des traces dans le système.
                        <!-- Fragment 3 caché: 2025 -->
                        <span class="tiny-text">Fragment 4: HORROR</span>
                        Le chaos numérique règne dans ces archives maudites.
                    </div>
                </div>
            `;
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
            
            // Mettre à jour le message d'état après avoir chargé la progression
            if (typeof updateEscapeMessage === 'function') {
                updateEscapeMessage();
            }
            
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
