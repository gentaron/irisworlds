document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const nationList = document.getElementById('nation-list');
    const nationName = document.getElementById('nation-name');
    const nationFlagBar = document.getElementById('nation-flag-bar');
    const statBars = document.getElementById('stat-bars');
    const leaderImg = document.getElementById('leader-img');
    const leaderName = document.getElementById('leader-name');
    const leaderRole = document.getElementById('leader-role');
    const leaderDesc = document.getElementById('leader-desc');
    const loreTextArea = document.getElementById('lore-text-area');
    const nationBody = document.getElementById('nation-content-wrapper');
    const loadingMsg = document.getElementById('loading-msg');
    const tabs = document.querySelectorAll('.tab-btn');
    const economicInfo = document.getElementById('economic-info');

    // --- State ---
    let currentNationId = '';
    let currentTab = 'history';

    // --- Initialization ---
    initSidebar();

    // Check URL Params
    const urlParams = new URLSearchParams(window.location.search);
    const nationParam = urlParams.get('nation');

    if (nationParam && worldData[nationParam]) {
        loadNation(nationParam);
    } else {
        loadNation('vermilion'); // Default
    }

    // --- Functions ---

    function initSidebar() {
        const cosmicList = document.getElementById('cosmic-list');
        Object.keys(worldData).forEach(key => {
            const nation = worldData[key];
            const li = document.createElement('li');
            li.innerText = nation.name.toUpperCase();
            li.dataset.nation = key;
            li.addEventListener('click', () => loadNation(key));
            if (nation.isCosmicEntry) {
                if (cosmicList) cosmicList.appendChild(li);
            } else {
                nationList.appendChild(li);
            }
        });
    }

    function loadNation(key) {
        if (!worldData[key]) return;
        currentNationId = key;
        const data = worldData[key];

        // Sidebar Active State
        document.querySelectorAll('#nation-list li, #cosmic-list li').forEach(li => {
            li.classList.remove('active');
            if (li.dataset.nation === key) li.classList.add('active');
        });

        // Content Visibility
        loadingMsg.classList.add('hidden');
        nationBody.classList.remove('hidden');

        // Header
        nationName.innerText = data.name;
        nationName.style.color = data.color;
        nationFlagBar.style.backgroundColor = data.color;
        nationFlagBar.style.boxShadow = `0 0 15px ${data.color}`;

        // Leader
        leaderName.innerText = data.leader.name;
        leaderRole.innerText = data.leader.role;
        leaderDesc.innerText = data.leader.desc;
        // Use flag image if leader image not set or generic placeholder
        leaderImg.src = data.leader.image;
        leaderImg.style.borderColor = data.color;

        // Stats
        renderStats(data.stats, data.color);

        // Economic Data
        renderEconomicData(data, data.color);

        // Lore (Switch to current tab or default history)
        updateLoreText();
    }

    function renderStats(stats, color) {
        statBars.innerHTML = '';
        const statKeys = [
            { key: 'military', label: 'MILITARY' },
            { key: 'economy', label: 'ECONOMY' },
            { key: 'technology', label: 'TECHNOLOGY' },
            { key: 'influence', label: 'INFLUENCE' }
        ];

        statKeys.forEach(stat => {
            const val = stats[stat.key];
            const container = document.createElement('div');
            container.className = 'stat-row';
            container.innerHTML = `
                <div class="stat-label">
                    <span>${stat.label}</span>
                    <span>${val}/100</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: 0%; background-color: ${color}"></div>
                </div>
            `;
            statBars.appendChild(container);

            // Animate width after a brief delay
            setTimeout(() => {
                container.querySelector('.progress-fill').style.width = `${val}%`;
            }, 50);
        });
    }

    function updateLoreText() {
        const data = worldData[currentNationId];
        let text = '';
        if (currentTab === 'history') text = data.history;
        else if (currentTab === 'culture') text = data.culture;
        else if (currentTab === 'geography') text = `<p>${data.geography}</p>`;
        else if (currentTab === 'rankings') text = renderRankings();

        loreTextArea.innerHTML = text; // allow HTML tags
    }

    function renderEconomicData(data, color) {
        const formatNumber = (num) => num.toLocaleString('ja-JP');
        economicInfo.innerHTML = `
            <div class="economic-row">
                <div class="economic-item">
                    <span class="econ-label">GDP</span>
                    <span class="econ-value" style="color: ${color}">${data.gdp} 兆ドル</span>
                </div>
                <div class="economic-item">
                    <span class="econ-label">人口</span>
                    <span class="econ-value" style="color: ${color}">${formatNumber(data.population)}</span>
                </div>
            </div>
            <div class="economic-row">
                <div class="economic-item">
                    <span class="econ-label">面積</span>
                    <span class="econ-value" style="color: ${color}">${formatNumber(data.area)} km²</span>
                </div>
                <div class="economic-item">
                    <span class="econ-label">最大都市</span>
                    <span class="econ-value" style="color: ${color}">${data.largestCity}</span>
                </div>
            </div>
            <div class="economic-row">
                <div class="economic-item" style="grid-column: 1 / -1;">
                    <span class="econ-label">通貨</span>
                    <span class="econ-value" style="color: ${color}">${data.currency}</span>
                </div>
            </div>
        `;
    }

    function renderRankings() {
        let html = '<h3 style="margin-bottom: 2rem; text-align: center; font-size: 1.5rem;">Global Rankings</h3>';

        // Ranking tabs
        html += '<div class="ranking-tabs-container" style="margin-bottom: 2rem;">';
        html += '<div class="ranking-tabs" style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-bottom: 1.5rem;">';

        const rankingCategories = [
            { key: 'overall', title: '総合ランキング', icon: '🏆' },
            { key: 'military', title: '軍事力', icon: '⚔️' },
            { key: 'economy', title: '経済力', icon: '💰' },
            { key: 'technology', title: '技術力', icon: '🔬' },
            { key: 'influence', title: '影響力', icon: '🌍' },
            { key: 'gdp', title: 'GDP', icon: '📊' },
            { key: 'population', title: '人口', icon: '👥' },
            { key: 'area', title: '面積', icon: '🗺️' }
        ];

        rankingCategories.forEach((category, idx) => {
            const isActive = idx === 0 ? 'active' : '';
            html += `<button class="ranking-tab-btn ${isActive}" data-ranking="${category.key}" 
                style="padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); 
                color: #fff; cursor: pointer; border-radius: 5px; transition: all 0.3s; font-size: 0.9rem;">
                ${category.icon} ${category.title}
            </button>`;
        });

        html += '</div>';

        // Ranking content containers
        rankingCategories.forEach((category, idx) => {
            const data = rankings[category.key];
            if (!data) return;

            const displayStyle = idx === 0 ? 'block' : 'none';
            html += `<div class="ranking-content" data-ranking-content="${category.key}" style="display: ${displayStyle};">`;
            html += `<h4 style="margin-bottom: 1.5rem; color: var(--primary); display: flex; align-items: center; gap: 0.5rem; justify-content: center; font-size: 1.3rem;">
                <span>${category.icon}</span> ${category.title}
            </h4>`;
            html += `<div class="ranking-list">`;

            data.forEach((item, index) => {
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
                const nationColor = worldData[item.nation]?.color || '#fff';

                let valueText = '';
                if (category.key === 'overall') {
                    valueText = `${item.score} (${item.breakdown})`;
                } else if (item.score !== undefined) {
                    valueText = `${item.score}`;
                } else if (item.display !== undefined) {
                    valueText = item.display;
                } else {
                    valueText = `${item.value} ${item.unit || ''}`;
                }

                html += `<div class="ranking-item" style="border-left: 3px solid ${nationColor}; padding: 0.8rem; margin-bottom: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 5px;">`;
                html += `<span class="rank-position" style="min-width: 2.5rem; font-weight: bold; font-size: 1.1rem;">${medal}</span>`;
                html += `<span class="rank-nation" style="color: ${nationColor}; flex: 1; font-weight: 500;">${item.name}</span>`;
                html += `<span class="rank-value" style="color: #aaa; font-size: 0.9rem;">${valueText}</span>`;
                html += `</div>`;
            });

            html += `</div></div>`;
        });

        html += '</div>';

        // Add event listeners for tab switching (will be attached after rendering)
        setTimeout(() => {
            document.querySelectorAll('.ranking-tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetRanking = e.currentTarget.dataset.ranking;

                    // Update active tab
                    document.querySelectorAll('.ranking-tab-btn').forEach(b => {
                        b.classList.remove('active');
                        b.style.background = 'rgba(255,255,255,0.1)';
                        b.style.borderColor = 'rgba(255,255,255,0.2)';
                    });
                    e.currentTarget.classList.add('active');
                    e.currentTarget.style.background = 'rgba(var(--primary-rgb),0.3)';
                    e.currentTarget.style.borderColor = 'var(--primary)';

                    // Show corresponding content
                    document.querySelectorAll('.ranking-content').forEach(content => {
                        content.style.display = 'none';
                    });
                    const targetContent = document.querySelector(`[data-ranking-content="${targetRanking}"]`);
                    if (targetContent) {
                        targetContent.style.display = 'block';
                    }
                });
            });

            // Set initial active state
            const activeBtn = document.querySelector('.ranking-tab-btn.active');
            if (activeBtn) {
                activeBtn.style.background = 'rgba(var(--primary-rgb),0.3)';
                activeBtn.style.borderColor = 'var(--primary)';
            }
        }, 100);

        return html;
    }

    // --- Event Listeners ---
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentTab = e.target.dataset.tab;
            updateLoreText();
            // Update tab color
            e.target.style.setProperty('--primary', worldData[currentNationId].color);
        });
    });

});
