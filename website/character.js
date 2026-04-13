document.addEventListener('DOMContentLoaded', () => {

    // Get Elements
    const charName = document.getElementById('char-name');
    const charRole = document.getElementById('char-role');
    const charImg = document.getElementById('char-img');
    const charQuote = document.getElementById('char-quote');
    const charDesc = document.getElementById('char-desc');
    const charStats = document.getElementById('char-stats');
    const charLink = document.getElementById('char-link');
    const charHistory = document.getElementById('char-history');
    const contentArea = document.getElementById('character-content');
    const errorMsg = document.getElementById('error-msg');

    // Get URL Param
    const urlParams = new URLSearchParams(window.location.search);
    const charId = urlParams.get('id');

    // Load Data
    if (charId && characterData[charId]) {
        renderCharacter(characterData[charId]);
    } else {
        showError();
    }

    function renderCharacter(data) {
        // Text Content
        charName.innerText = data.name.toUpperCase();
        charRole.innerText = data.role + " // " + data.jpName;
        charQuote.innerText = data.quote;
        charDesc.innerText = data.description;
        charHistory.innerHTML = data.history;

        // External Link
        if (data.link) {
            charLink.href = data.link;
            charLink.style.display = 'inline-block';
            charLink.innerText = "🌐 Visit Official Media";
        } else {
            charLink.style.display = 'none';
        }

        // Image
        if (data.image) {
            charImg.src = data.image;
        } else {
            // Default placeholder if null
            charImg.src = 'assets/Iris.png'; // Fallback
            charImg.style.filter = "grayscale(100%) blur(2px)"; // Style it different to show it's placeholder
        }

        // Stats
        renderStats(data.stats);

        // Theme Color (Optional: Set accent color based on nation if available in worldData, 
        // but characterData doesn't fully map to worldData colors yet directly, 
        // so we can default or add logic later. For now use default CSS vars)
    }

    function renderStats(stats) {
        charStats.innerHTML = '';
        if (!stats) return;

        const statNames = {
            strength: 'STRENGTH',
            intelligence: 'INTELLIGENCE',
            charisma: 'CHARISMA',
            agility: 'AGILITY'
        };

        Object.keys(stats).forEach(key => {
            const val = stats[key];
            const label = statNames[key] || key.toUpperCase();

            const container = document.createElement('div');
            container.className = 'stat-row';
            container.setAttribute('data-stat', key);
            container.innerHTML = `
                <div class="stat-label">
                    <span>${label}</span>
                    <span>${val}/100</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: 0%; background-color: var(--primary)"></div>
                </div>
            `;
            charStats.appendChild(container);

            // Animate
            setTimeout(() => {
                container.querySelector('.progress-fill').style.width = `${val}%`;
            }, 100);

            // Add hover event for ranking popup
            container.addEventListener('mouseenter', () => {
                showRankingPopup(key, label);
            });

            container.addEventListener('mouseleave', () => {
                hideRankingPopup();
            });
        });
    }

    function showRankingPopup(statKey, statLabel) {
        const popup = document.getElementById('ranking-popup');
        const title = document.getElementById('ranking-popup-title');
        const list = document.getElementById('ranking-list');

        // Set title
        title.innerText = `${statLabel} Rankings`;

        // Get all characters and sort by this stat
        const allChars = Object.entries(characterData).map(([id, data]) => ({
            id,
            name: data.jpName || data.name,
            value: data.stats ? (data.stats[statKey] || 0) : 0
        }));

        allChars.sort((a, b) => b.value - a.value);

        // Generate ranking HTML
        list.innerHTML = '';
        allChars.forEach((char, index) => {
            const rank = index + 1;
            const item = document.createElement('div');
            item.className = 'ranking-item';

            // Highlight current character
            const urlParams = new URLSearchParams(window.location.search);
            const currentCharId = urlParams.get('id');
            if (char.id === currentCharId) {
                item.classList.add('current');
            }

            // Highlight top 3
            if (rank <= 3) {
                item.classList.add('top3');
            }

            // Medal for top 3
            let rankDisplay = `${rank}.`;
            let rankClass = '';
            if (rank === 1) {
                rankDisplay = '🏆';
                rankClass = 'gold';
            } else if (rank === 2) {
                rankDisplay = '🥈';
                rankClass = 'silver';
            } else if (rank === 3) {
                rankDisplay = '🥉';
                rankClass = 'bronze';
            }

            item.innerHTML = `
                <span class="ranking-rank ${rankClass}">${rankDisplay}</span>
                <span class="ranking-name">${char.name}</span>
                <span class="ranking-value">${char.value}</span>
            `;

            list.appendChild(item);
        });

        // Show popup
        popup.classList.add('show');
    }

    function hideRankingPopup() {
        const popup = document.getElementById('ranking-popup');
        popup.classList.remove('show');
    }

    function showError() {
        contentArea.classList.add('hidden');
        errorMsg.classList.remove('hidden');
    }

});
