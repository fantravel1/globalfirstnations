/**
 * Learning Features & Gamification System
 * Makes indigenous learning spectacular for young and all learners
 */

// ============================================
// LEARNING MODES
// ============================================

const learningModes = {
    kids: {
        name: 'Kids Mode',
        icon: '👶',
        readingLevel: 3,
        maxTextLength: 100,
        fontSize: '20px',
        colorScheme: 'playful',
        showGames: true,
        simplifiedUI: true,
        soundEffects: true,
        animations: 'bouncy'
    },
    student: {
        name: 'Student Mode',
        icon: '🎓',
        readingLevel: 6,
        maxTextLength: 300,
        fontSize: '16px',
        colorScheme: 'educational',
        showResearchTools: true,
        showQuizzes: true,
        animations: 'smooth'
    },
    researcher: {
        name: 'Research Mode',
        icon: '📚',
        readingLevel: 12,
        maxTextLength: null,
        fontSize: '16px',
        colorScheme: 'professional',
        showCitations: true,
        showFullContent: true,
        animations: 'minimal'
    }
};

// ============================================
// GAMIFICATION SYSTEM
// ============================================

const badges = [
    {
        id: 'first-visit',
        name: 'First Steps',
        icon: '👣',
        description: 'Visit your first indigenous group',
        requirement: (stats) => stats.groupsVisited >= 1,
        points: 10,
        rarity: 'common',
        message: 'Welcome to your learning journey!'
    },
    {
        id: 'explorer',
        name: 'World Explorer',
        icon: '🌍',
        description: 'Visit groups from all 6 continents',
        requirement: (stats) => stats.continentsVisited === 6,
        points: 100,
        rarity: 'epic',
        message: 'You\'ve explored the whole world!'
    },
    {
        id: 'linguist',
        name: 'Language Learner',
        icon: '🗣️',
        description: 'Learn about 10 different language families',
        requirement: (stats) => stats.languageFamilies >= 10,
        points: 50,
        rarity: 'rare',
        message: 'Words connect us all!'
    },
    {
        id: 'historian',
        name: 'Cultural Historian',
        icon: '📜',
        description: 'Read 50 complete profiles',
        requirement: (stats) => stats.profilesRead >= 50,
        points: 200,
        rarity: 'legendary',
        message: 'Your knowledge is impressive!'
    },
    {
        id: 'quiz-master',
        name: 'Quiz Master',
        icon: '🧠',
        description: 'Score 100% on 5 quizzes',
        requirement: (stats) => stats.perfectQuizzes >= 5,
        points: 75,
        rarity: 'rare',
        message: 'You\'re a knowledge champion!'
    },
    {
        id: 'dedicated',
        name: 'Dedicated Learner',
        icon: '🔥',
        description: 'Learn for 7 days in a row',
        requirement: (stats) => stats.streakDays >= 7,
        points: 60,
        rarity: 'uncommon',
        message: 'Consistency is key!'
    },
    {
        id: 'game-player',
        name: 'Game Master',
        icon: '🎮',
        description: 'Play 20 learning games',
        requirement: (stats) => stats.gamesPlayed >= 20,
        points: 40,
        rarity: 'uncommon',
        message: 'Learning through play!'
    },
    {
        id: 'sharer',
        name: 'Knowledge Sharer',
        icon: '📢',
        description: 'Share 10 discoveries',
        requirement: (stats) => stats.sharesCount >= 10,
        points: 50,
        rarity: 'uncommon',
        message: 'Spread the knowledge!'
    },
    {
        id: 'americas-expert',
        name: 'Americas Expert',
        icon: '🦅',
        description: 'Learn about 20 groups from the Americas',
        requirement: (stats) => stats.regionCounts?.americas >= 20,
        points: 75,
        rarity: 'rare',
        message: 'Americas specialist!'
    },
    {
        id: 'africa-expert',
        name: 'Africa Expert',
        icon: '🦁',
        description: 'Learn about 20 groups from Africa',
        requirement: (stats) => stats.regionCounts?.africa >= 20,
        points: 75,
        rarity: 'rare',
        message: 'Africa specialist!'
    },
    {
        id: 'collector',
        name: 'Badge Collector',
        icon: '⭐',
        description: 'Earn 10 different badges',
        requirement: (stats) => stats.badgesEarned >= 10,
        points: 150,
        rarity: 'epic',
        message: 'You\'re collecting them all!'
    }
];

// Level system
const levels = [
    { level: 1, name: 'Curious Beginner', minPoints: 0, icon: '🌱', color: '#27ae60' },
    { level: 2, name: 'Explorer', minPoints: 100, icon: '🗺️', color: '#3498db' },
    { level: 3, name: 'Cultural Student', minPoints: 300, icon: '📖', color: '#9b59b6' },
    { level: 4, name: 'Knowledge Seeker', minPoints: 600, icon: '🔍', color: '#e74c3c' },
    { level: 5, name: 'Indigenous Scholar', minPoints: 1000, icon: '🎓', color: '#f39c12' },
    { level: 6, name: 'Cultural Ambassador', minPoints: 2000, icon: '🌟', color: '#1abc9c' },
    { level: 7, name: 'Wisdom Keeper', minPoints: 5000, icon: '👑', color: '#e67e22' }
];

// ============================================
// LEARNER PROFILE CLASS
// ============================================

class LearnerProfile {
    constructor() {
        this.stats = this.loadStats();
        this.initializeTracking();
    }

    loadStats() {
        const saved = localStorage.getItem('learnerProfile');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            totalPoints: 0,
            groupsVisited: 0,
            profilesRead: 0,
            continentsVisited: 0,
            languageFamilies: 0,
            gamesPlayed: 0,
            quizzesTaken: 0,
            perfectQuizzes: 0,
            streakDays: 0,
            lastVisit: new Date().toDateString(),
            sharesCount: 0,
            badgesEarned: 0,
            earnedBadges: [],
            visitedGroups: [],
            visitedContinents: new Set(),
            regionCounts: {
                americas: 0,
                africa: 0,
                asia: 0,
                oceania: 0,
                europe: 0
            },
            favorites: [],
            completedPaths: [],
            achievements: []
        };
    }

    saveStats() {
        // Convert Set to Array for JSON serialization
        const statsToSave = {
            ...this.stats,
            visitedContinents: Array.from(this.stats.visitedContinents)
        };
        localStorage.setItem('learnerProfile', JSON.stringify(statsToSave));
    }

    initializeTracking() {
        // Update streak
        const today = new Date().toDateString();
        if (this.stats.lastVisit !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (this.stats.lastVisit === yesterday.toDateString()) {
                this.stats.streakDays++;
            } else {
                this.stats.streakDays = 1;
            }
            this.stats.lastVisit = today;
            this.saveStats();
        }
    }

    addPoints(amount, reason) {
        this.stats.totalPoints += amount;
        this.saveStats();
        this.checkLevelUp();
        this.showPointsAnimation(amount, reason);
    }

    visitGroup(group) {
        if (!this.stats.visitedGroups.includes(group.name)) {
            this.stats.visitedGroups.push(group.name);
            this.stats.groupsVisited++;
            this.stats.visitedContinents.add(group.region);
            this.stats.continentsVisited = this.stats.visitedContinents.size;

            if (this.stats.regionCounts[group.region] !== undefined) {
                this.stats.regionCounts[group.region]++;
            }

            this.addPoints(1, `Visited ${group.name}`);
            this.checkBadges();
        }
    }

    completeQuiz(score, totalQuestions) {
        this.stats.quizzesTaken++;
        const percentage = (score / totalQuestions) * 100;

        if (percentage === 100) {
            this.stats.perfectQuizzes++;
            this.addPoints(10, 'Perfect quiz score!');
        } else if (percentage >= 80) {
            this.addPoints(5, 'Great quiz score!');
        } else {
            this.addPoints(2, 'Quiz completed');
        }

        this.checkBadges();
    }

    playGame() {
        this.stats.gamesPlayed++;
        this.addPoints(3, 'Played a learning game');
        this.checkBadges();
    }

    shareDiscovery() {
        this.stats.sharesCount++;
        this.addPoints(5, 'Shared knowledge');
        this.checkBadges();
    }

    checkBadges() {
        badges.forEach(badge => {
            if (!this.stats.earnedBadges.includes(badge.id) && badge.requirement(this.stats)) {
                this.earnBadge(badge);
            }
        });
    }

    earnBadge(badge) {
        this.stats.earnedBadges.push(badge.id);
        this.stats.badgesEarned++;
        this.stats.totalPoints += badge.points;
        this.saveStats();
        this.showBadgeAnimation(badge);
        this.checkBadges(); // Recursive check for badge collector badge
    }

    getCurrentLevel() {
        let currentLevel = levels[0];
        for (const level of levels) {
            if (this.stats.totalPoints >= level.minPoints) {
                currentLevel = level;
            } else {
                break;
            }
        }
        return currentLevel;
    }

    getNextLevel() {
        const current = this.getCurrentLevel();
        const currentIndex = levels.indexOf(current);
        return levels[currentIndex + 1] || null;
    }

    getProgressToNextLevel() {
        const current = this.getCurrentLevel();
        const next = this.getNextLevel();
        if (!next) return 100;

        const pointsInCurrentLevel = this.stats.totalPoints - current.minPoints;
        const pointsNeeded = next.minPoints - current.minPoints;
        return Math.min(100, (pointsInCurrentLevel / pointsNeeded) * 100);
    }

    checkLevelUp() {
        const newLevel = this.getCurrentLevel();
        const previousLevel = this.stats.lastLevel || 1;

        if (newLevel.level > previousLevel) {
            this.stats.lastLevel = newLevel.level;
            this.saveStats();
            this.showLevelUpAnimation(newLevel);
        }
    }

    // Animation methods
    showPointsAnimation(points, reason) {
        const animation = document.createElement('div');
        animation.className = 'points-animation';
        animation.innerHTML = `
            <div class="points-popup">
                +${points} points
                <div class="points-reason">${reason}</div>
            </div>
        `;
        document.body.appendChild(animation);

        setTimeout(() => animation.remove(), 3000);
    }

    showBadgeAnimation(badge) {
        const modal = document.createElement('div');
        modal.className = 'badge-earned-modal';
        modal.innerHTML = `
            <div class="badge-earned-content">
                <div class="confetti"></div>
                <div class="badge-icon large">${badge.icon}</div>
                <h2>Badge Unlocked!</h2>
                <h3>${badge.name}</h3>
                <p>${badge.description}</p>
                <div class="badge-rarity ${badge.rarity}">${badge.rarity.toUpperCase()}</div>
                <div class="badge-points">+${badge.points} points</div>
                <p class="badge-message">${badge.message}</p>
                <button onclick="this.closest('.badge-earned-modal').remove()" class="celebrate-btn">
                    Awesome! 🎉
                </button>
            </div>
        `;
        document.body.appendChild(modal);

        // Play celebration sound
        if (window.learningMode === 'kids') {
            this.playSound('badge-earned');
        }
    }

    showLevelUpAnimation(level) {
        const modal = document.createElement('div');
        modal.className = 'level-up-modal';
        modal.innerHTML = `
            <div class="level-up-content">
                <div class="sparkles"></div>
                <div class="level-icon" style="font-size: 5rem;">${level.icon}</div>
                <h2 style="color: ${level.color};">Level Up!</h2>
                <h3>You are now a ${level.name}</h3>
                <div class="level-number">Level ${level.level}</div>
                <button onclick="this.closest('.level-up-modal').remove()" class="celebrate-btn">
                    Continue Learning! 🚀
                </button>
            </div>
        `;
        document.body.appendChild(modal);

        if (window.learningMode === 'kids') {
            this.playSound('level-up');
        }
    }

    playSound(soundName) {
        // Placeholder for sound effects
        // In production, load and play actual audio files
        console.log(`Playing sound: ${soundName}`);
    }

    addToFavorites(groupName) {
        if (!this.stats.favorites.includes(groupName)) {
            this.stats.favorites.push(groupName);
            this.saveStats();
            return true;
        }
        return false;
    }

    removeFromFavorites(groupName) {
        const index = this.stats.favorites.indexOf(groupName);
        if (index > -1) {
            this.stats.favorites.splice(index, 1);
            this.saveStats();
            return true;
        }
        return false;
    }

    getDashboardData() {
        const currentLevel = this.getCurrentLevel();
        const nextLevel = this.getNextLevel();
        const progress = this.getProgressToNextLevel();

        return {
            totalPoints: this.stats.totalPoints,
            currentLevel,
            nextLevel,
            progressToNextLevel: progress,
            streakDays: this.stats.streakDays,
            groupsVisited: this.stats.groupsVisited,
            continentsVisited: this.stats.continentsVisited,
            badgesEarned: this.stats.badgesEarned,
            totalBadges: badges.length,
            quizzesTaken: this.stats.quizzesTaken,
            perfectQuizzes: this.stats.perfectQuizzes,
            earnedBadges: this.stats.earnedBadges.map(id =>
                badges.find(b => b.id === id)
            )
        };
    }
}

// ============================================
// FUN FACTS SYSTEM
// ============================================

const funFacts = [
    {
        id: 1,
        emoji: '🧊',
        fact: 'The Inuit have over 50 different words for snow!',
        category: 'language'
    },
    {
        id: 2,
        emoji: '🦁',
        fact: 'Maasai warriors can jump incredibly high - it\'s called "adumu"!',
        category: 'culture'
    },
    {
        id: 3,
        emoji: '🌳',
        fact: 'The Yanomami know over 500 plants that can be used as medicine!',
        category: 'knowledge'
    },
    {
        id: 4,
        emoji: '🪃',
        fact: 'Aboriginal Australians have the oldest continuous culture - over 65,000 years!',
        category: 'history'
    },
    {
        id: 5,
        emoji: '⛰️',
        fact: 'The Quechua people built Machu Picchu without using wheels or iron tools!',
        category: 'achievement'
    },
    {
        id: 6,
        emoji: '🐻',
        fact: 'The Ainu people have a special ceremony called Iomante to honor the spirit of bears!',
        category: 'ceremony'
    },
    {
        id: 7,
        emoji: '🌍',
        fact: 'There are over 7,000 indigenous languages spoken around the world!',
        category: 'language'
    },
    {
        id: 8,
        emoji: '🎨',
        fact: 'Indigenous peoples make up less than 5% of the world\'s population but protect 80% of Earth\'s biodiversity!',
        category: 'environment'
    }
];

function getRandomFunFact() {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
}

function showFunFact() {
    const fact = getRandomFunFact();
    const factCard = document.createElement('div');
    factCard.className = 'fun-fact-card';
    factCard.innerHTML = `
        <div class="fun-fact-front">
            <div class="fun-fact-emoji">${fact.emoji}</div>
            <div class="fun-fact-title">Did You Know?</div>
            <div class="fun-fact-hint">Tap to reveal!</div>
        </div>
        <div class="fun-fact-back">
            <div class="fun-fact-text">${fact.fact}</div>
            <div class="fun-fact-category">${fact.category}</div>
        </div>
    `;

    factCard.addEventListener('click', () => {
        factCard.classList.toggle('flipped');
    });

    return factCard;
}

// ============================================
// LEARNING MODE SWITCHER
// ============================================

function setLearningMode(mode) {
    window.learningMode = mode;
    localStorage.setItem('learningMode', mode);

    document.body.className = `learning-mode-${mode}`;

    // Apply mode-specific styles
    const modeConfig = learningModes[mode];
    document.documentElement.style.fontSize = modeConfig.fontSize;

    // Show appropriate UI elements
    updateUIForMode(modeConfig);

    // Show notification
    showToast(`Switched to ${modeConfig.name} ${modeConfig.icon}`, 'success');
}

function updateUIForMode(config) {
    // Show/hide elements based on mode
    const gamesSection = document.querySelector('.games-section');
    const researchTools = document.querySelector('.research-tools');
    const citations = document.querySelectorAll('.citation');

    if (gamesSection) {
        gamesSection.style.display = config.showGames ? 'block' : 'none';
    }

    if (researchTools) {
        researchTools.style.display = config.showResearchTools ? 'block' : 'none';
    }

    citations.forEach(citation => {
        citation.style.display = config.showCitations ? 'block' : 'none';
    });
}

// ============================================
// INITIALIZE
// ============================================

// Create global learner profile instance
window.learnerProfile = new LearnerProfile();

// Initialize learning mode
const savedMode = localStorage.getItem('learningMode') || 'student';
setLearningMode(savedMode);

// Daily challenge
function getDailyChallenge() {
    const challenges = [
        { day: 0, challenge: 'Explore a new continent today!', icon: '🌍', points: 10 },
        { day: 1, challenge: 'Learn about 3 new indigenous groups!', icon: '📚', points: 10 },
        { day: 2, challenge: 'Take a culture quiz!', icon: '🧠', points: 15 },
        { day: 3, challenge: 'Discover a new language family!', icon: '🗣️', points: 10 },
        { day: 4, challenge: 'Play a memory game!', icon: '🎮', points: 10 },
        { day: 5, challenge: 'Share what you learned!', icon: '📢', points: 15 },
        { day: 6, challenge: 'Free exploration day!', icon: '✨', points: 5 }
    ];

    const dayOfWeek = new Date().getDay();
    return challenges[dayOfWeek];
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LearnerProfile,
        learningModes,
        badges,
        levels,
        funFacts,
        setLearningMode,
        getDailyChallenge
    };
}
