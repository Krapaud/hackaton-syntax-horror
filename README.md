#  404 Souls Not Found - Halloween Escape Game 

A spooky Halloween-themed Escape Game featuring programming puzzles (Python, C, SQL) and cybersecurity challenges.

##  Features

- **Authentication System**: User registration and login with password hashing
- **6 Varied Puzzles**:
  -  Room 1: Python - Reverse text and Caesar cipher decryption
  -  Room 2: Cybersecurity - Finding hidden flags in HTML code (F12)
  -  Room 3: SQL - Database exploration and SQL injection exploitation
  -  Room 4: Logic - Horror movie coding rebus
  -  Room 5: File Investigation - Download and read encrypted message
  -  Room 6: Web Forensics - Finding 4 hidden fragments using various CSS/HTML tricks
- **Screamer System**: Scary pop-ups with sound effects for wrong answers
- **Scoring System**: Player progression tracking, attempts counter, and leaderboard
- **Spooky Interface**: Halloween-themed design with animations and sound effects
- **Progress Reset**: Ability to restart the game from the beginning

##  Installation with Docker

### Prerequisites

- Docker
- Docker Compose

### Quick Start

1. **Clone the project**
```bash
git clone <your-repo>
cd hackaton-syntax-horror
```

2. **Launch with Docker Compose**
```bash
docker-compose up --build
```

3. **Access the application**
```
http://localhost:5000
```

### Useful Docker Commands

**Stop the container:**
```bash
docker-compose down
```

**View logs:**
```bash
docker-compose logs -f
```

**Rebuild after modifications:**
```bash
docker-compose up --build
```

**Access the container:**
```bash
docker exec -it escape-game-halloween bash
```

##  Manual Installation (without Docker)

### Prerequisites

- Python 3.11+
- pip

### Installation

1. **Create a virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# or
venv\Scripts\activate  # Windows
```

2. **Install dependencies**
```bash
pip install -r requirements.txt
```

3. **Launch the application**
```bash
python app.py
```

4. **Access the application**
```
http://localhost:5000
```

##  Project Structure

```
hackaton-syntax-horror/
├── app.py                      # Main Flask application
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker orchestration
├── requirements.txt            # Python dependencies
├── .dockerignore              # Files ignored by Docker
├── data/                       # SQLite database and game data
│   ├── escape_game.db         # Player data and progress
│   └── rooms.json             # Room configurations and puzzles
├── static/                     # Static files
│   ├── css/
│   │   └── style.css          # Halloween styles
│   ├── js/
│   │   ├── main.js            # Main JavaScript
│   │   └── room-manager.js    # Room navigation and puzzle logic
│   ├── images/                # Images and assets
│   │   ├── screamer.png       # Screamer image
│   │   ├── manoir_*.png       # Manor backgrounds
│   │   ├── lettre_enigme.txt  # Puzzle 5 encrypted file
│   │   └── ...                # Other game assets
│   └── sounds/                # Sound effects
│       ├── scream-90747.mp3   # Main screamer sound
│       ├── Screamer*.wav      # Additional screamers
│       └── ...                # Ambient sounds
└── templates/                  # HTML templates
    ├── base.html              # Base template
    ├── index.html             # Home page
    ├── login.html             # Login page
    ├── register.html          # Registration page
    ├── game.html              # Main game page with 6 rooms
    ├── puzzle5_envelope.html  # Puzzle 5 (file download)
    └── puzzle6_archives.html  # Puzzle 6 (hidden fragments)
```

##  Puzzles and Solutions

### Puzzle 1: Corrupted Python Terminal
**Objective**: Analyze the code that reverses text and applies Caesar cipher (-3)
**Hint**: The encrypted message is `QRLWRS` - reverse it then apply Caesar -3
**Solution**: `POTION`

### Puzzle 2: Secret Archives
**Objective**: Find the flag hidden in HTML code (hexadecimal encoded)
**Hint**: Press F12, inspect the puzzle card HTML, find the hex-encoded comment
**Solution**: `HALLOWEEN2025`

### Puzzle 3: Haunted Database
**Objective**: Use SQL injection to extract ALL data from `secret_data` table
**Hint**: Use a complete SQL SELECT query: `SELECT * FROM secret_data`
**Solution**: `sp00ky_p4ssw0rd` (found in the hints column)

### Puzzle 4: Cursed Code Rebus
**Objective**: Decode the rebus mixing programming terms and horror movie
**Hint**: `import silence` + `class Of` + `lambs` = horror movie title
**Solution**: `THESILENCEOFTHELAMBS`

### Puzzle 5: Encrypted Message
**Objective**: Download the `lettre_enigme.txt` file and find the password inside
**Hint**: Click the download button, open the file, and read it carefully
**Solution**: `FRI13TH`

### Puzzle 6: Encrypted Archives
**Objective**: Find 4 fragments hidden using CSS/HTML techniques
**Techniques**: Invisible text (select with mouse), hidden elements (F12), microscopic text, camouflaged colors
**Solution**: `DARK-CODE-2025-HORROR`

##  Customization

### Add or Modify Puzzles

**Edit room configurations** in `data/rooms.json`:
- Add new rooms with custom puzzles
- Modify existing room descriptions and missions
- Customize atmosphere texts and clues

**Update answers** in `app.py`:
```python
correct_answers = {
    'puzzle1': 'POTION',
    'puzzle2': 'HALLOWEEN2025',
    # Add your new puzzles here...
}
```

### Add Images

Images are already included in `static/images/`. To add more:
```html
<img src="{{ url_for('static', filename='images/your-image.png') }}" alt="Description">
```

### Add Sounds

Sound effects are already included in `static/sounds/`:
- `scream-90747.mp3`: Main screamer sound
- `Screamer1.wav`, `Screamer2.wav`: Alternative screamers
- `door-creaking-335491.mp3`: Door sounds
- `haunted-steps-428208.mp3`: Footsteps
- And more ambient sounds

The sounds are automatically played by the JavaScript code.

##  Production Configuration

### Environment Variables

Create a `.env` file:
```env
FLASK_ENV=production
SECRET_KEY=your-very-long-and-complex-secret-key
```

### Modify docker-compose.yml

Replace `SECRET_KEY` with a secure value in `docker-compose.yml`.

##  Troubleshooting

### Port 5000 is already in use

Modify the port in `docker-compose.yml`:
```yaml
ports:
  - "8080:5000"  # Use port 8080 instead of 5000
```

### Database error

Delete the database and restart:
```bash
rm -rf data/
docker-compose up --build
```

### Permission denied on Linux

```bash
sudo chown -R $USER:$USER data/
```

##  API Endpoints

- `GET /`: Home page
- `POST /register`: User registration
- `POST /login`: User login (sets session)
- `GET /logout`: Logout (clears session)
- `GET /game`: Main game page (requires authentication)
- `GET /puzzle5`: Puzzle 5 page (encrypted message)
- `GET /puzzle6`: Puzzle 6 page (hidden archives)
- `POST /api/check_answer`: Check a puzzle answer
- `GET /api/progress`: Get current player progress
- `POST /api/search_secrets`: SQL search (intentionally vulnerable for puzzle 3)
- `GET /api/leaderboard`: Top 10 players leaderboard
- `POST /api/reset_progress`: Reset player progress to start over
- `GET /static/data/rooms.json`: Get room configurations

##  Possible Improvements

- [ ] Add more puzzle rooms (currently 6)
- [ ] Paid hint system with score deduction
- [ ] Multiplayer/co-op mode
- [ ] Timer for each puzzle with time bonuses
- [ ] Achievements/Badges system
- [ ] Background ambient music loop
- [ ] More advanced CSS animations
- [ ] Story mode with narration between rooms
- [ ] Admin dashboard to manage players
- [ ] Export/import progress
- [ ] Difficulty levels (Easy/Normal/Hard)

##  Contributors

- Your development team

##  License

MIT License - Free to use

##  Happy Halloween! 

Have fun and don't be too scared! 