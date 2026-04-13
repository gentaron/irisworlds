// Debug: Check if storyData is loaded before DOMContentLoaded
console.log('Script loaded, checking storyData...');
console.log('storyData exists:', typeof storyData !== 'undefined');
if (typeof storyData !== 'undefined') {
    console.log('storyData keys:', Object.keys(storyData));
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');

    // --- State & Config ---
    const chapterList = document.querySelectorAll('#chapter-list li');
    const chapterTitle = document.getElementById('chapter-title');
    const chapterText = document.getElementById('chapter-text');
    const startQuizBtn = document.getElementById('start-quiz-btn');

    console.log('DOM elements found:');
    console.log('- chapterList:', chapterList.length);
    console.log('- chapterTitle:', !!chapterTitle);
    console.log('- chapterText:', !!chapterText);
    console.log('- startQuizBtn:', !!startQuizBtn);

    // Check if storyData is loaded
    if (typeof storyData === 'undefined') {
        console.error('ERROR: storyData is undefined!');
        if (chapterText) {
            chapterText.innerText = "Error: Story content could not be loaded. Please refresh the page.";
        }
        return;
    }

    console.log('storyData loaded successfully, keys:', Object.keys(storyData));

    let currentChapterId = 'ch1';

    // --- Quiz Data ---
    const quizData = {
        'ch1': [
            {
                q: "アイリスが最初に戦っていた相手の特徴は？",
                options: ["銃を持ったギャング", "魔法を使う老婆", "巨大なロボット", "透明な暗殺者"],
                a: 0
            },
            {
                q: "アイリスの体に刻まれた呪いの紋様はどんな形？",
                options: ["ドクロ", "ハート（淫紋）", "青い薔薇", "蛇"],
                a: 1
            },
            {
                q: "敵が使っていた特殊な兵器は？",
                options: ["毒ガス", "スライム", "レーザー", "音波兵器"],
                a: 1
            }
        ],
        'ch2': [
            {
                q: "新しく登場したアイリスの味方は？",
                options: ["ミユシャリとガレス", "マリーナとヨニック", "レイドとアイク", "誰もいない"],
                a: 0
            },
            {
                q: "シルバー・ヴェノムに対抗して現れたとされる（偽の）組織名は？",
                options: ["ブラック・ローズ", "ゴールデン・ヴェノム", "プラチナ・スネーク", "レッド・スパイダー"],
                a: 1
            },
            {
                q: "誘拐されたとされた人物は？",
                options: ["アイリス", "ミユシャリ", "フィオナ", "エレナ"],
                a: 2
            }
        ],
        'ch3': [
            {
                q: "地下街で女性たちを救出した「ヒーロー」は誰？",
                options: ["アイリス", "フィオナとピアトリーノ", "ガレス", "警察"],
                a: 1
            },
            {
                q: "マリーナ・ボビンが提案した新しい組織の名前は？",
                options: ["世界連合", "Vital Hect (バイタルヘクト)", "クレセント同盟", "ニュー・オーダー"],
                a: 1
            },
            {
                q: "ブルー・ローズの経済はどうなった？",
                options: ["崩壊した", "横ばい", "急激に成長した", "不明"],
                a: 2
            }
        ],
        'ch4': [
            {
                q: "アイリスを倒したのは誰？",
                options: ["ラストマン", "フィオナ", "マリーナ", "セバスチャン"],
                a: 1
            },
            {
                q: "アイリスはどこへ連れ去られた？",
                options: ["ヴァーミリオン", "ピジョン島", "SSレンジ", "地下牢"],
                a: 1
            },
            {
                q: "フィオナが支配のために利用したアイリスの弱点は？",
                options: ["お金", "家族", "性的な快楽と屈辱", "暴力"],
                a: 2
            }
        ],
        'ch5': [
            {
                q: "レオンの率いる組織の名前は？",
                options: ["シルバー・ヴェノム", "ゴールデン・スネーク", "ブラック・ローズ", "レッド・スパイダー"],
                a: 0
            },
            {
                q: "アイリスが遭遇したフェムボーイの能力は？",
                options: ["炎を操る", "エスパーロック", "瞬間移動", "透明化"],
                a: 1
            },
            {
                q: "レオンがアイリスの服を破壊した方法は？",
                options: ["剣で斬る", "手を叩く", "炎で焼く", "酸をかける"],
                a: 1
            }
        ],
        'ch6': [
            {
                q: "ヴィヴィエッタとフィオナを捕らえた敵は誰？",
                options: ["レオン", "レヴィリア", "マリーナ", "ジーマ"],
                a: 1
            },
            {
                q: "フィオナとヴィヴィエッタに取り付いたものは？",
                options: ["鎖", "スライムヒル", "魔法の紐", "電気ショック装置"],
                a: 1
            },
            {
                q: "アイリスとガレスがブルー・ローズに向かった理由は？",
                options: ["観光", "会議", "救出作戦", "偵察"],
                a: 2
            }
        ],
        'ch7': [
            {
                q: "ボグダス・ジャベリンの副リーダーは誰？",
                options: ["セバスチャン", "ガレス", "ウィリー", "アイク"],
                a: 1
            },
            {
                q: "淫行テロの特徴として挙げられたのは？",
                options: ["爆破のみ", "暗殺のみ", "精神破壊型", "誘拐のみ"],
                a: 2
            },
            {
                q: "ヴァーミリオンに常駐することになったボグダス・ジャベリンのメンバーは？",
                options: ["ミユシャリとファリエル", "ガレスとセバスチャン", "アイナとレイド", "フィオナとヴィヴィエッタ"],
                a: 0
            }
        ],
        'ch8': [
            {
                q: "ミユシャリの性格の特徴は？",
                options: ["無口で物静か", "快活で議論好き", "攻撃的で短気", "冷徹で無感情"],
                a: 1
            },
            {
                q: "ファリエルの特徴として挙げられたのは？",
                options: ["口が達者", "誠実で約束を守る", "計算高い", "お調子者"],
                a: 1
            },
            {
                q: "シルバー・ヴェノムが狙う標的の共通点は？",
                options: ["若い男性", "政治家", "強い女性", "子供"],
                a: 2
            }
        ],
        'ch9': [
            {
                q: "ボグダス・ジャベリンのメンバー数は？",
                options: ["10名", "20名", "50名", "100名"],
                a: 1
            },
            {
                q: "クレセント大地方に集中配置されたメンバー数は？",
                options: ["8名", "12名", "16名", "20名"],
                a: 2
            },
            {
                q: "レヴィリアが逃げた方法は？",
                options: ["テレポート", "スライム化", "飛行", "透明化"],
                a: 1
            }
        ],
        'ch10': [
            {
                q: "アイリスの元恋人は誰？",
                options: ["ガレス", "ウィリー", "セバスチャン", "レオン"],
                a: 1
            },
            {
                q: "アイリスとウィリーが初めてペアを組んだのは何年前？",
                options: ["2年前", "4年前", "6年前", "8年前"],
                a: 1
            },
            {
                q: "ウィリーの年齢は？",
                options: ["25歳", "27歳", "30歳", "35歳"],
                a: 1
            }
        ],
        'ch11': [
            {
                q: "レヴィリアの逃走先で痕跡を失った場所は？",
                options: ["森林", "人口密集地", "砂漠", "海岸"],
                a: 1
            },
            {
                q: "ヴィヴィエッタが搬送された場所は？",
                options: ["ヴァーミリオン本部", "ブルー・ローズ中央病院", "アイアン・シンジケート", "自宅"],
                a: 1
            },
            {
                q: "レオンの尋問を担当したのは誰？",
                options: ["エレナ", "アイリス", "リア・カーター", "ミユシャリ"],
                a: 2
            }
        ],
        'ch12': [
            {
                q: "シルバー・ヴェノムの活動エリアとして挙げられなかったのは？",
                options: ["ヴァーミリオン", "ブルー・ローズ", "北極圏", "アイアン・シンジケート"],
                a: 2
            },
            {
                q: "レオンが口を割らなかった理由は？",
                options: ["記憶喪失", "組織の秘密保持", "言語が通じない", "意識不明"],
                a: 1
            },
            {
                q: "淫行テロが激増した時期は？",
                options: ["10年前から", "ここ数年", "昨年から", "今月から"],
                a: 1
            }
        ],
        'ch13': [
            {
                q: "ミユシャリが提示したシルバー・ヴェノムの目的仮説は？",
                options: ["金銭目的", "強い女性の尊厳破壊", "領土拡大", "技術窃盗"],
                a: 1
            },
            {
                q: "サーペンティナ・レヴィリアの能力は？",
                options: ["炎操作", "エスパー", "瞬間移動", "透視"],
                a: 1
            },
            {
                q: "ボグダス・ジャベリンがヴァーミリオンに派遣した人数は？",
                options: ["1名", "2名", "5名", "10名"],
                a: 1
            }
        ],
        'ch14': [
            {
                q: "アイリスがジーマオイル本社に侵入した際の格好は？",
                options: ["完全武装", "ボロボロの服", "スーツ", "制服"],
                a: 1
            },
            {
                q: "ジーマオイルのCEOの名前は？",
                options: ["レオン", "ゲオルグ・ジーマ", "セバスチャン", "マイケル"],
                a: 1
            },
            {
                q: "アイリスがジーマを制圧した後、誰が到着した？",
                options: ["エレナ", "機関の支援部隊", "警察", "フィオナ"],
                a: 1
            }
        ],
        'ch15': [
            {
                q: "クラウス・フィオナの職業は？",
                options: ["軍人", "ファールージャ社COO", "諜報員", "医師"],
                a: 1
            },
            {
                q: "フィオナの年齢は？",
                options: ["22歳", "25歳", "28歳", "30歳"],
                a: 1
            },
            {
                q: "フィオナがよく着ている服装は？",
                options: ["青いボディスーツ", "赤いチャイナドレスと黒スパッツ", "軍服", "白いドレス"],
                a: 1
            }
        ],
        'ch16': [
            {
                q: "アイリスが本部長に任命された理由は？",
                options: ["年功序列", "単独でジーマオイル壊滅", "投票", "くじ引き"],
                a: 1
            },
            {
                q: "エレナの新しい役職は？",
                options: ["本部長", "補佐", "退職", "外交官"],
                a: 1
            },
            {
                q: "アイリスのランクは？",
                options: ["A", "S", "S+", "SS"],
                a: 2
            }
        ],
        'ch17': [
            {
                q: "ヴァーミリオンで発生した大規模事件は？",
                options: ["地震", "同時多発爆発", "洪水", "疫病"],
                a: 1
            },
            {
                q: "アイリスを罠に誘い出したのは誰？",
                options: ["フィオナ", "レオン", "マリーナ", "エレナ"],
                a: 1
            },
            {
                q: "アルフレッド空き地での戦いの結果は？",
                options: ["アイリスの敗北", "レオンの捕獲", "引き分け", "両者相討ち"],
                a: 1
            }
        ],
        'ch18': [
            {
                q: "ガレスとアイリスが向かった場所は？",
                options: ["ヴァーミリオン", "ブルー・ローズ", "アイアン・シンジケート", "SSレンジ"],
                a: 1
            },
            {
                q: "フィオナとヴィヴィエッタを救出できた理由は？",
                options: ["交渉成立", "アイリスとガレスの到着", "敵の撤退", "警察の介入"],
                a: 1
            },
            {
                q: "レヴィリアが逃走に使った能力は？",
                options: ["瞬間移動", "スライム化", "飛行", "隠れ身"],
                a: 1
            }
        ],
        'ch19': [
            {
                q: "連邦警察本部でレオンに何が装着された？",
                options: ["GPS", "能力無効化の首輪", "爆弾", "監視カメラ"],
                a: 1
            },
            {
                q: "レオンの尋問で判明したことは？",
                options: ["組織の全貌", "ボスの名前", "ほとんど何も判明しなかった", "隠れ家の場所"],
                a: 2
            },
            {
                q: "シルバー・ヴェノムの主な活動範囲は？",
                options: ["世界中", "クレセント大地方", "ヴァーミリオンのみ", "海外のみ"],
                a: 1
            }
        ],
        'ch20': [
            {
                q: "アイリスとウィリーの現在の関係は？",
                options: ["恋人", "最高のパートナー", "上司と部下のみ", "他人"],
                a: 1
            },
            {
                q: "物語で明らかになったシルバー・ヴェノムの特徴は？",
                options: ["小規模組織", "深く暗い大規模組織", "既に壊滅", "架空の組織"],
                a: 1
            },
            {
                q: "最終的にアイリスが得た地位は？",
                options: ["副本部長", "本部長（S+ランク）", "平エージェント", "退職"],
                a: 1
            }
        ]
    };

    // --- Story Loading Logic ---
    function loadChapter(chapterId) {
        console.log('loadChapter called with:', chapterId);

        // Update Sidebar
        chapterList.forEach(li => li.classList.remove('active'));
        const activeItem = document.querySelector(`[data-chapter="${chapterId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
            console.log('Active item set:', activeItem.innerText);
        } else {
            console.warn('Active item not found for:', chapterId);
        }

        // Update Content
        currentChapterId = chapterId;

        // Titles map
        const titles = {
            'ch1': "第1章: 蒼き幻影",
            'ch2': "第2章: 同盟と混沌",
            'ch3': "第3章: 裏切り",
            'ch4': "第4章: 深淵へ",
            'ch5': "第5章: ヴェノムの影",
            'ch6': "第6章: 救出作戦",
            'ch7': "第7章: 新たな脅威",
            'ch8': "第8章: 女性主導の波",
            'ch9': "第9章: ボグダスの介入",
            'ch10': "第10章: 地下の闇",
            'ch11': "第11章: エロスの罠",
            'ch12': "第12章: 抵抗の意志",
            'ch13': "第13章: ピンチと覚醒",
            'ch14': "第14章: 逆襲の刻",
            'ch15': "第15章: 真実の探求",
            'ch16': "第16章: 統一への道",
            'ch17': "第17章: 陰謀の深化",
            'ch18': "第18章: 決戦前夜",
            'ch19': "第19章: 最終決戦",
            'ch20': "第20章: 新世界の夜明け"
        };

        chapterTitle.innerText = titles[chapterId] || "Unknown Chapter";
        console.log('Title set to:', chapterTitle.innerText);

        // Load text from global storyData
        // We use split/join to handle newlines nicely if pre-wrap isn't enough or for custom formatting
        if (storyData[chapterId]) {
            console.log('Loading story data for', chapterId, '- length:', storyData[chapterId].length);
            chapterText.innerText = storyData[chapterId];
            console.log('Story text set, first 100 chars:', chapterText.innerText.substring(0, 100));
            window.scrollTo(0, 0); // Scroll to top
        } else {
            console.error('Story data not found for:', chapterId);
            chapterText.innerText = "Content not found.";
        }
    }

    // --- Sidebar Click Handlers ---
    chapterList.forEach(item => {
        item.addEventListener('click', () => {
            const chap = item.getAttribute('data-chapter');
            loadChapter(chap);
        });
    });

    // --- Initial Load ---
    console.log('Loading initial chapter: ch1');
    loadChapter('ch1');


    // --- Quiz Logic ---
    const modal = document.getElementById('quiz-modal');
    const closeBtn = document.querySelector('.close-modal');
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const submitBtn = document.getElementById('submit-quiz');
    const resultDiv = document.getElementById('quiz-result');
    const resultMsg = document.getElementById('result-message');
    const retryBtn = document.getElementById('retry-btn');

    startQuizBtn.addEventListener('click', () => {
        setupQuiz(currentChapterId);
        modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.classList.remove('show');
        }
    }

    function setupQuiz(chapterId) {
        const questions = quizData[chapterId];
        if (!questions) {
            quizQuestionsContainer.innerHTML = "<p>No quiz available for this chapter.</p>";
            submitBtn.style.display = 'none';
            return;
        }

        submitBtn.style.display = 'inline-block';
        resultDiv.classList.add('hidden');
        quizQuestionsContainer.innerHTML = '';

        questions.forEach((qObj, index) => {
            const qBlock = document.createElement('div');
            qBlock.className = 'question-block';

            const qTitle = document.createElement('p');
            qTitle.className = 'question-text';
            qTitle.innerText = `Q${index + 1}. ${qObj.q}`;
            qBlock.appendChild(qTitle);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options-list';

            qObj.options.forEach((opt, optIndex) => {
                const label = document.createElement('label');
                label.className = 'option-label';

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${index}`;
                radio.value = optIndex;

                const span = document.createElement('span');
                span.innerText = opt;

                label.appendChild(radio);
                label.appendChild(span);
                optionsDiv.appendChild(label);
            });

            qBlock.appendChild(optionsDiv);
            quizQuestionsContainer.appendChild(qBlock);
        });
    }

    submitBtn.addEventListener('click', () => {
        const questions = quizData[currentChapterId];
        let correctCount = 0;
        let allAnswered = true;

        questions.forEach((qObj, index) => {
            const radios = document.getElementsByName(`question-${index}`);
            let selected = -1;
            for (const r of radios) {
                if (r.checked) {
                    selected = parseInt(r.value);
                    break;
                }
            }

            if (selected === -1) {
                allAnswered = false;
            } else if (selected === qObj.a) {
                correctCount++;
            }
        });

        if (!allAnswered) {
            alert("すべての質問に答えてください。");
            return;
        }

        showResult(correctCount, questions.length);
    });

    function showResult(score, total) {
        resultDiv.classList.remove('hidden');

        if (score === total) {
            resultDiv.className = 'success';
            resultMsg.innerHTML = `<strong>全問正解！</strong><br>素晴らしい！次の章へ進む準備は万端ですね。`;
            retryBtn.classList.add('hidden');
        } else {
            resultDiv.className = 'failure';
            resultMsg.innerHTML = `<strong>${score} / ${total} 正解</strong><br>もう少しです！物語を読み返してみましょう。`;
            retryBtn.classList.remove('hidden');
        }
    }

    retryBtn.addEventListener('click', () => {
        setupQuiz(currentChapterId);
    });

});
