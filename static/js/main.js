// Effets visuels et animations

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🎃 SYNTAX HORROR - Escape Game 🎃', 'color: orange; font-size: 20px; font-weight: bold; text-shadow: 2px 2px black;');
    console.log('%cBienvenue dans le jeu ! Ouvrez bien les yeux...', 'color: #ff6b00;');
    
    // Créer des araignées animées
    createSpiders();
    
    // Effet de curseur personnalisé
    createCustomCursor();
    
    // Sons d'ambiance
    addAmbientSounds();
});

// Créer des araignées qui tombent
function createSpiders() {
    const spidersContainer = document.querySelector('.spiders');
    if (!spidersContainer) return;
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const spider = document.createElement('div');
            spider.className = 'spider';
            spider.innerHTML = '🕷️';
            spider.style.cssText = `
                position: absolute;
                top: -50px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 20 + 20}px;
                animation: fall ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            spidersContainer.appendChild(spider);
        }, i * 2000);
    }
    
    // Ajouter l'animation CSS
    if (!document.getElementById('spider-animation')) {
        const style = document.createElement('style');
        style.id = 'spider-animation';
        style.textContent = `
            @keyframes fall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Curseur personnalisé effrayant
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #ff6b00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Effet sur les liens et boutons
    const interactiveElements = document.querySelectorAll('a, button, input, .btn-submit');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'rgba(255, 107, 0, 0.3)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// Sons d'ambiance (optionnel si vous ajoutez des fichiers audio)
function addAmbientSounds() {
    // Les sons sont désactivés par défaut jusqu'à ce que vous ajoutiez des fichiers
    // Décommentez le code ci-dessous quand vous avez ajouté les fichiers mp3
    
    /*
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .btn-nav');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            playSound('hover');
        });
    });
    */
}

function playSound(soundType) {
    // Fonction pour jouer des sons
    // Vérifie si le fichier existe avant de jouer
    try {
        const audio = new Audio(`/static/sounds/${soundType}.mp3`);
        audio.volume = 0.3;
        audio.play().catch(e => {
            // Son non disponible - silencieux
        });
    } catch (e) {
        // Son non disponible - silencieux
    }
}

// Effet de typing pour les textes
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Effet de glitch aléatoire sur les titres
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(el => {
        setInterval(() => {
            const shouldGlitch = Math.random() > 0.9;
            if (shouldGlitch) {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = 'glitch 1s infinite';
                }, 50);
            }
        }, 3000);
    });
}

// Particules de sang (effet Halloween)
function createBloodParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: #8b0000;
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 1000;
        `;
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += vx;
            posY += vy + 2; // Gravité
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Effet de flash d'écran
function flashScreen(color = 'red', duration = 100) {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${color};
        opacity: 0.7;
        z-index: 9998;
        pointer-events: none;
    `;
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.remove();
    }, duration);
}

// Messages d'erreur effrayants personnalisés
const scaryMessages = [
    "💀 Les esprits ne sont pas contents...",
    "👻 Vous avez réveillé quelque chose...",
    "🕷️ Les araignées approchent...",
    "⚠️ Erreur fatale... ou presque",
    "🎃 Essayez encore, si vous osez...",
    "🔥 Le code brûle vos yeux...",
    "⚡ Erreur de syntaxe... de l'horreur !",
    "🌙 La nuit tombe sur votre code..."
];

function getRandomScaryMessage() {
    return scaryMessages[Math.floor(Math.random() * scaryMessages.length)];
}

// Easter eggs - Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    alert('🎃 EASTER EGG ACTIVÉ ! 🎃\nVous avez trouvé le code secret !\n+500 points bonus !');
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// Avertissement avant de quitter la page (pendant le jeu)
if (window.location.pathname.includes('/game')) {
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        e.returnValue = 'Êtes-vous sûr de vouloir abandonner ? Les esprits vous attendent...';
        return e.returnValue;
    });
}

// Animation au chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = '1';
    }, 100);
    
    // Ajouter l'effet de glitch
    addGlitchEffect();
});

// Console personnalisée pour les énigmes
if (window.location.pathname.includes('/game')) {
    console.log('%c═══════════════════════════════════════', 'color: #ff6b00');
    console.log('%c  🎃 CONSOLE DE DEBUG - ESCAPE GAME 🎃  ', 'color: orange; font-size: 16px; font-weight: bold');
    console.log('%c═══════════════════════════════════════', 'color: #ff6b00');
    console.log('%c', 'font-size: 1px; padding: 50px 100px; background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSIxMCIgeT0iNTAiIGZvbnQtc2l6ZT0iMzAiIGZpbGw9IiNmZjZiMDAiPvCfjogg8J+OgyDwn46EPC90ZXh0Pjwvc3ZnPg==);');
    console.log('%cCherchez bien... des secrets se cachent ici...', 'color: #8b0000; font-style: italic');
    console.log('%c═══════════════════════════════════════', 'color: #ff6b00');
}

// Protection contre la triche (désactiver le clic droit en mode prod)
// Décommentez en production si souhaité
/*
document.addEventListener('contextmenu', (e) => {
    if (window.location.pathname.includes('/game')) {
        e.preventDefault();
        alert('🎃 Pas de triche ! Utilisez F12 pour les énigmes légitimes.');
    }
});
*/

// Export des fonctions pour utilisation globale
window.gameUtils = {
    flashScreen,
    createBloodParticles,
    getRandomScaryMessage,
    playSound,
    typeWriter
};
