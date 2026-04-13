const characterData = {
    // --- Vermilion ---
    "iris": {
        name: "Iris",
        jpName: "アイリス",
        role: "Vermilion Intelligence Director / S+ Rank Agent",
        nation: "vermilion",
        image: "assets/Iris.png",
        quote: "私が守るのは国家じゃない。そこに生きる人々の『明日』よ。",
        description: "ヴァーミリオン情報局のトップであり、伝説的な手腕を持つS+ランクエージェント。水の元素を操る能力を持ち、その実力は単独で軍事基地を制圧するほど。冷徹な判断力と深い慈愛を併せ持ち、部下や市民からの信頼は絶大。",
        history: `
            <h3>伝説の始まり</h3>
            <p>若くして情報局に入局し、数々の極秘任務を完璧に遂行。特に単独潜入任務における成功率は100%を誇る。その功績により、異例の若さで本部長に抜擢された。</p>
            <h3>シルバー・ヴェノムとの戦い</h3>
            <p>テロ組織「シルバー・ヴェノム」との戦いでは最前線に立ち、幹部レオンを単独で捕縛するなどの戦果を挙げた。一時は敵の卑劣な罠により危機に陥ったが、不屈の精神で克服し、逆に組織を壊滅へと追い込んだ。</p>
            <h3>S+ランクへの昇格</h3>
            <p>数々の功績と、エレナ前本部長からの強い推薦により、機関史上最年少で最高位「S+」ランクへと昇格。現在は次世代のエージェント育成にも力を入れている。</p>
        `,
        personality: "普段は優雅で冷静沈着だが、卑劣な行為や弱者を虐げる者に対しては激しい怒りを見せる。正義感が強く、曲がったことは許さない高潔な精神の持ち主。",
        stats: { strength: 95, intelligence: 98, charisma: 100, agility: 96 }
    },
    "elena": {
        name: "Elena",
        jpName: "エレナ",
        role: "Former Vermilion Intelligence Director / Advisor",
        nation: "vermilion",
        image: "assets/Elena.png",
        quote: "真実は時に残酷よ。でも、目を背けてはいけない。",
        description: "アイリスの前任者であり、現在は政府顧問としてヴァーミリオンの中枢を支える銀髪の女性。冷静かつ大局的な視点を持ち、アイリスの良き理解者であり指導者。",
        history: `
            <h3>鉄の女</h3>
            <p>現役時代は「鉄の女」と呼ばれ、冷徹な指揮で情報局を最強の組織へと育て上げた。その厳格さの裏には、部下への深い愛情が隠されている。</p>
            <h3>亡命と共闘</h3>
            <p>バイタルヘクト設立を巡る陰謀に気づき、SSレンジへ一時亡命。そこでアイク・ロペスと協力し、マリーナ総統の野望を阻止するために裏から手を尽くした。</p>
        `,
        personality: "理知的で落ち着いているが、内には熱い闘志を秘めている。アイリスを娘のように想っており、彼女のためなら自らの地位も顧みない。",
        stats: { strength: 80, intelligence: 100, charisma: 90, agility: 75 }
    },
    "aina": {
        name: "Aina von Riesfelt",
        jpName: "アイナ・フォン・リースフェルト",
        role: "Vermilion Government Advisor / Bogdaz Liaison",
        nation: "vermilion",
        image: "assets/Aina.png",
        quote: "規律こそが秩序を守る盾です。私はその守り手でありたい。",
        description: "ボグダス・ジャベリンから派遣された真面目な騎士。銀色の鎧を脱ぎ、スーツ姿で政府顧問として働く。融通が利かない一面もあるが、その誠実さは誰もが認めている。",
        history: `
            <h3>騎士の誇り</h3>
            <p>旧貴族の家系に生まれ、幼い頃から騎士道精神を叩き込まれた。不正を許さず、主君や組織への忠誠を第一とする。</p>
            <h3>ミユシャリとのコンビ</h3>
            <p>奔放なミユシャリとは対照的な性格だが、だからこそ良いコンビとして機能している。ミユシャリのブレーキ役であり、同時に彼女の鋭い直感を誰よりも信頼している。</p>
        `,
        personality: "極めて真面目で責任感が強い。冗談が通じないこともあるが、根は純粋で優しい。",
        stats: { strength: 88, intelligence: 85, charisma: 80, agility: 82 }
    },

    // --- Bogdaz Javelin ---
    "miyushari": {
        name: "Miyushari",
        jpName: "ミユシャリ",
        role: "Bogdaz Javelin Strategist / Special Advisor",
        nation: "vermilion", // Currently based in Vermilion
        image: "assets/Miyushari.png",
        quote: "えー、それって面白そう！ 私の千里眼で覗いちゃおっか？",
        description: "ボグダス・ジャベリンの頭脳であり、強力な「千里眼」能力を持つ。明るく奔放な性格でムードメーカーだが、その推論能力と洞察力は天才的。",
        history: `
            <h3>千里眼の戦略家</h3>
            <p>遠隔地の映像を見るだけでなく、断片的な情報から事象全体を推論する「千里推論」を得意とする。シルバー・ヴェノムの隠された動機や、その背後にある「エックス」の存在をいち早く見抜いた。</p>
            <h3>政府顧問として</h3>
            <p>現在はヴァーミリオン政府の特別顧問として、アイナと共に中枢に入り込んでいる。男性優位の政府内でも物怖じせず、鋭い意見で高官たちを唸らせている。</p>
        `,
        personality: "好奇心旺盛で天真爛漫。危機的状況でも軽口を叩く余裕を持つが、仲間が傷つけられた時は誰よりも激しく怒る。",
        stats: { strength: 60, intelligence: 100, charisma: 95, agility: 70 }
    },
    "fariel": {
        name: "Fariel",
        jpName: "ファリエル",
        role: "Bogdaz Javelin Sniper / Analyst",
        nation: "vermilion",
        image: "assets/Fariel.png",
        quote: "距離8キロ、風なし。……外しません。",
        description: "冷静沈着なスナイパー兼分析官。空間収納能力を持ち、どこからでも長距離ライフルを取り出して精密射撃を行う。アイリスの大ファンでもある。",
        history: `
            <h3>アイリスへの憧れ</h3>
            <p>アイリスの活躍に憧れており、彼女の戦闘ログを全て暗記しているほど。ヴァーミリオンでの共闘を通じて、単なるファンから信頼できる戦友へと成長した。</p>
            <h3>誘拐と生還</h3>
            <p>一時シルバー・ヴェノムに誘拐され危機に陥ったが、仲間の尽力により生還。その経験は彼女をより強く、慎重にさせた。</p>
        `,
        personality: "控えめで礼儀正しいが、任務においては冷徹なプロフェッショナル。アイリスの前では少しミーハーな一面を見せることも。",
        stats: { strength: 70, intelligence: 90, charisma: 75, agility: 95 }
    },
    "gareth": {
        name: "Gareth",
        jpName: "ガレス",
        role: "Bogdaz Javelin Vice Leader / Swordsman",
        nation: "vermilion",
        image: "assets/Gareth.png",
        quote: "……俺は剣だ。考えるのはお前らの役目だ。",
        description: "ボグダス・ジャベリンの副リーダーを務める寡黙な剣士。圧倒的な戦闘力を持ち、仲間からの信頼も厚い。女性に対しては少し奥手。",
        history: `
            <h3>無口な守護者</h3>
            <p>過去の経歴は詳しく語らないが、数々の修羅場をくぐり抜けてきた歴戦の戦士。アイリスと共にレヴィリアを追跡した際は、彼女の背中を完璧に守り抜いた。</p>
        `,
        personality: "無骨で無口だが、情に厚い。多くを語らず行動で示すタイプ。",
        stats: { strength: 98, intelligence: 75, charisma: 80, agility: 88 }
    },
    "sebastian": {
        name: "Sebastian Valerius",
        jpName: "セバスチャン・ヴァレリウス",
        role: "Bogdaz Javelin Leader",
        nation: "vermilion",
        image: "assets/Sebastian.png",
        quote: "感情で動くな。証拠が揃うまで待機だ。",
        description: "傭兵団ボグダス・ジャベリンを率いるリーダー。青い瞳を持つ冷静な指揮官。常に全体を見渡し、最善の一手を打つ。",
        history: `
            <h3>真実の追求者</h3>
            <p>フィオナの不審な動きや、シルバー・ヴェノムとの関連をいち早く疑い、粘り強く証拠を集めた。アイリス失踪の真相に最も近づいた人物の一人。</p>
        `,
        personality: "極めて理知的で慎重。部下の命を何よりも大切にし、無謀な作戦は決して立案しない。",
        stats: { strength: 90, intelligence: 96, charisma: 92, agility: 85 }
    },

    // --- Blue Rose ---
    "fiona": {
        name: "Fiona",
        jpName: "フィオナ",
        role: "Blue Rose Leader / Faruja COO",
        nation: "blue_rose",
        image: "assets/Fiona.png",
        quote: "この世界は私のものよ。私のスパッツに跪きなさい♡",
        description: "ブルー・ローズの実質的な支配者であり、ファールージャ社のＣＯＯ。妖艶な魅力を武器に、地下街の男たちを支配し、ついには国家をも動かす存在となった。",
        history: `
            <h3>スパッツ外交</h3>
            <p>自らの性的魅力を政治的武器として利用する「スパッツ外交」を展開。クロセヴィアやアイアン・シンジケートからの投資を引き出し、ブルー・ローズを急成長させた。</p>
            <h3>裏の顔</h3>
            <p>実はアイリス失踪に関与した黒幕の一人という疑惑がある。独自の術式使い、他者の力を奪う能力を持つとされる。</p>
        `,
        personality: "極めて野心的で計算高い。他者を支配することに喜びを感じており、そのための手段は選ばない。",
        stats: { strength: 85, intelligence: 95, charisma: 100, agility: 90 }
    },
    "piatrino": {
        name: "Pia Trino",
        jpName: "ピアトリーノ",
        role: "Fiona's Aide",
        nation: "blue_rose",
        image: "assets/PiaTrino.png",
        quote: "フィオナさんのためなら、私はどんな役でも演じます。",
        description: "フィオナの側近であり、眼鏡をかけた巨乳・巨尻の女性。フィオナに絶対的な忠誠を誓っており、彼女の「遊び」にも喜んで付き合う。",
        history: `
            <h3>忠実な影</h3>
            <p>フィオナと共に地下街の誘拐事件を解決し、「ヒーロー」として称えられた。しかし裏ではフィオナの陰謀に加担し、セバスチャンの追及をかわすなど、汚れ役もこなす。</p>
        `,
        personality: "フィオナに対しては従順だが、敵対者には冷徹。眼鏡の奥の瞳は常に周囲を観察している。",
        stats: { strength: 75, intelligence: 88, charisma: 85, agility: 80 }
    },
    "yonic": {
        name: "Yonic",
        jpName: "ヨニック",
        role: "Blue Rose Supreme Commander",
        nation: "blue_rose",
        image: "assets/Iris.png", // Placeholder
        quote: "あなた方は……本物のヒーローだ！！",
        description: "ブルー・ローズ政府の最高司令官。厳格な軍人だが、地下街の問題に悩み続けていた。フィオナたちが事件を解決した際には、涙を流して感謝した。",
        history: `
            <h3>苦悩する司令官</h3>
            <p>長年、地下街の治安悪化とテロの脅威に頭を抱えていた。フィオナの実力と成果を認め、彼女に全幅の信頼を置いているが、その裏の顔には気づいていない。</p>
        `,
        personality: "真面目で責任感が強いが、それゆえにフィオナのような強力なリーダーシップに心酔してしまっている。",
        stats: { strength: 80, intelligence: 70, charisma: 75, agility: 60 }
    },

    // --- SS Range ---
    "ike": {
        name: "Ike Lopez",
        jpName: "アイク・ロペス",
        role: "SS Range Prime Minister",
        nation: "ss_range",
        image: "assets/Ike.png",
        quote: "感情で動くのは二流だ。利益とリスクを計算しろ。",
        description: "SSレンジの若き首相。合理的かつプラグマティックな思考の持ち主。マリーナやフィオナの台頭を警戒しつつも、表向きは友好関係を保つ老獪さを持つ。",
        history: `
            <h3>冷徹な計算</h3>
            <p>バイタルヘクト構想には距離を置き、独自路線を模索。亡命してきたエレナを保護し、共に世界の真実を暴くために動き出した。</p>
        `,
        personality: "常に冷静で、感情を表に出さない。しかし、世界の均衡を守ろうとする意志は強い。",
        stats: { strength: 65, intelligence: 98, charisma: 90, agility: 70 }
    },

    // --- Mieltenga ---
    "marina": {
        name: "Marina Bobbin",
        jpName: "マリーナ・ボビン",
        role: "Mieltenga President",
        nation: "mieltenga",
        image: "assets/Marina.png",
        quote: "世界は統治されるべきよ。優秀な私たちの手によってね。",
        description: "ミエルテンガの冷徹な総統。「バイタルヘクト」構想を提唱し、世界統一政府の樹立を目論む。その野望のためなら、他国の主権を奪うことも厭わない。",
        history: `
            <h3>統一への野望</h3>
            <p>経済力と軍事力を背景に、クレセント大地方の統一を画策。アイリス失踪やフィオナの台頭も、彼女の描いたシナリオの一部である可能性が高い。</p>
        `,
        personality: "支配欲が強く、極めて傲慢。しかし、それを裏付けるだけの実力とカリスマ性を持っている。",
        stats: { strength: 70, intelligence: 95, charisma: 98, agility: 65 }
    },
    "michael": {
        name: "Michael Gabrieli",
        jpName: "ミカエル・ガブリエリ",
        role: "Faruja CEO",
        nation: "mieltenga",
        image: "assets/Iris.png", // Placeholder
        quote: "うちのCOOがまた勝手なことを……まあ、利益が出るならいいですが。",
        description: "世界最大の企業ファールージャ社のCEO。ビジネスライクな人物だが、部下であるフィオナの暴走には頭を悩ませている。",
        history: `
            <h3>企業のトップ</h3>
            <p>マリーナの統一構想には一定の理解を示しつつも、企業の利益を最優先に考える。政治的な野心よりも、経済的な支配に関心がある。</p>
        `,
        personality: "冷静沈着なビジネスマン。感情よりも数字を信じる。",
        stats: { strength: 60, intelligence: 92, charisma: 88, agility: 50 }
    },

    // --- Iron Syndicate ---
    "reid": {
        name: "Reid Kakizaki",
        jpName: "レイド・カキザキ",
        role: "Iron Syndicate Supreme Commander",
        nation: "iron_syndicate",
        image: "assets/Reid.png",
        quote: "力こそ正義だ。弱者の言い分など聞く耳持たん。",
        description: "アイアン・シンジケートの無骨な軍事指導者。軍国主義を掲げ、力による支配を信奉する。マリーナの統一構想に賛同し、軍事面での協力を惜しまない。",
        history: `
            <h3>鋼鉄の拳</h3>
            <p>ブルー・ローズへの巨額投資を決定するなど、軍事だけでなく経済的な影響力拡大も狙っている。単純な武力信奉者に見えて、意外と政治的な駆け引きも行う。</p>
        `,
        personality: "粗野で暴力的だが、リーダーとしての器量は持つ。単純明快な「強さ」を好む。",
        stats: { strength: 100, intelligence: 60, charisma: 85, agility: 70 }
    },

    // --- Crosevia ---
    "castina": {
        name: "Castina Tempest",
        jpName: "カスチーナ・テンペスト",
        role: "Crosevia Prime Minister",
        nation: "mieltenga", // Creating a category for others or adding new nation logic later? Using Mieltenga as placeholder or "Other" logic needed? Let's assume standard nations for now. 
        // Wait, Crosevia is 4th economy. It's a nation. I should probably add it to world data later, but for now I'll assign 'mieltenga' region or leave blank
        nation: "ss_range", // Grouping with updated logic: actually let's keep nation field but note it might not map to a flag yet.
        image: "assets/Iris.png", // Placeholder
        quote: "女性こそが、この世界を導く光となるのです。",
        description: "クロセヴィア初の女性首相。女性主導の社会変革を掲げ、マリーナやフィオナと連携する。資源国としての強みを活かした外交を行う。",
        history: `
            <h3>女性主導の夢</h3>
            <p>当初はフィオナのブルー・ローズをモデルケースとして称賛していたが、その過度な個人崇拝と歪みに疑念を抱き始め、投資縮小を決断した。</p>
        `,
        personality: "理想家であり、少し夢見がちな部分もあるが、政治的な判断力は正常。潔癖な面がある。",
        stats: { strength: 55, intelligence: 85, charisma: 90, agility: 60 }
    },

    // --- SUDOM / Out of Crescent ---
    "yeshivato": {
        name: "Yeshivato",
        jpName: "イェシバトー",
        role: "Bogdaz Javelin Operative",
        nation: "sudom",
        image: "assets/Iris.png", // Placeholder
        quote: "へへっ、俺たちに任せな！ シルバーだかゴールデンだか知らねえが、ぶっ飛ばしてやるよ！",
        description: "ボグダス・ジャベリンのメンバー。茶髪の青年で、明るい性格。ニニギス、ミナと共にSUDOM方面の捜索を担当。",
        personality: "お調子者だが、戦闘では勇敢。仲間思い。",
        stats: { strength: 85, intelligence: 65, charisma: 80, agility: 88 }
    },

    // --- Villains ---
    "lastman": {
        name: "Lastman",
        jpName: "ラストマン",
        role: "Silver Venom Remnant",
        nation: "sudom", // Operates in underground
        image: "assets/Iris.png", // Placeholder
        quote: "へへっ、いい眺めだぜ……そのおっぱい、最高だ……",
        description: "シルバー・ヴェノムの残党。「エロいの大好き男」として悪名高く、女性を卑猥な目で見ることに執着する。フィオナたちにアジトを壊滅させられた。",
        history: `
            <h3>歪んだ欲望</h3>
            <p>地下街で女性を監禁し、歪んだ欲望を満たしていたが、フィオナとピアトリーノによって成敗された。典型的な小悪党。</p>
        `,
    },
    // --- Special ---
    "mina": {
        name: "Mina Eureka",
        jpName: "ミナ・エウレカ",
        role: "Bogdaz Javelin / Psychic",
        nation: "bogdaz",
        image: "assets/Eureka_new.jpg",
        quote: "超念力――拘束！",
        description: "ボグダス・ジャベリンのメンバーで、青い髪が特徴的な超念力使い。強力な力場を発生させて敵を拘束する能力を持つ。冷静沈着で、戦闘では確実に敵を無力化する。",
        history: `
            <h3>超念力使い</h3>
            <p>青い髪を翻すミナ・エウレカは、ボグダス・ジャベリンの精鋭メンバーの一人。彼女の超念力は、透明な力場を発生させ、敵を完全に拘束することができる。</p>
            <h3>ピジョン島作戦</h3>
            <p>アイリス救出作戦では、AJやファリエルの拘束に成功。「超念力――拘束！」の掛け声と共に、敵を次々と無力化した。</p>
            <h3>Gen's Notes</h3>
            <p>オウンドメディア「Gen's Notes」を通じて、この世界の出来事を記録・発信している。</p>
        `,
        personality: "冷静沈着で寡黙。戦闘では確実に任務を遂行するプロフェッショナル。",
        link: "https://note.com/gensnotes",
        stats: { strength: 45, intelligence: 90, charisma: 70, agility: 75 }
    }
};
