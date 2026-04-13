const worldData = {
    "vermilion": {
        name: "Vermilion",
        jpName: "ヴァーミリオン",
        color: "#c0392b",
        leader: {
            name: "Iris",
            role: "Intelligence Director",
            desc: "ヴァーミリオン情報局の最高指揮官。水の力を操るS+ランクエージェントであり、優雅かつ冷徹な判断力で組織を率いる。深紅の円卓の意思を体現する存在。",
            image: "assets/Iris.png"
        },
        stats: {
            military: 95,
            economy: 88,
            technology: 92,
            influence: 85
        },
        area: 3250000,
        population: 185000000,
        gdp: 24.5,
        currency: "Vermilion Credit (VRC)",
        largestCity: "Crimson Capital",
        description: "規律と武力を重んじる軍事大国。徹底した管理社会であり、市民は幼少期から適性検査を受け、国家に貢献する役割を与えられる。",
        history: `
            <h3>建国の血脈</h3>
            <p>ヴァーミリオンの歴史は、旧時代の崩壊から始まる「血の再建期」に遡る。荒廃した大地で最初に秩序を取り戻した武装集団が前身であり、彼らは「力こそが秩序」という信念のもと、周辺の小規模コミュニティを次々と併合していった。</p>
            <h3>鉄と情報の支配</h3>
            <p>建国から50年、ヴァーミリオンは急速な工業化と共に、強力な情報監視網「アーガス・システム」を構築。国内の反乱分子を未然に排除し、盤石な独裁体制を築き上げた。この時期に設立された情報局は、女性エージェントを中心とした特殊部隊を育成し、他国への諜報活動を活発化させた。</p>
            <h3>現在</h3>
            <p>現在は世界第2位の経済力を誇りながらも、その軍事費はGDPの30%を超えると推測されている。表向きは平和維持を謳いつつ、裏では「プロジェクト・ファントム」と呼ばれる極秘計画を進めており、周辺諸国との緊張が高まっている。</p>
        `,
        culture: `
            <h3>能力主義と階級</h3>
            <p>ヴァーミリオンでは能力至上主義が徹底されており、出自に関わらず優秀な者は高い地位に就くことができる。しかし、それは同時に弱者に対する冷徹な切り捨てを意味し、「適性外」とされた市民は下層居住区での過酷な労働を強いられる。</p>
            <h3>赤の祝祭</h3>
            <p>年に一度行われる建国記念日「真紅の日」には、首都全体が赤いライトで照らされ、軍事パレードが行われる。これは国民の愛国心を高めると同時に、他国への武力誇示の場となっている。</p>
        `,
        geography: "大陸北東部に位置し、豊富な鉱物資源を有する山岳地帯と、要塞化された巨大都市群で構成される。"
    },
    "blue_rose": {
        name: "Blue Rose",
        jpName: "ブルー・ローズ",
        color: "#0984e3",
        leader: {
            name: "Fiona",
            role: "Reformer / Faruja COO",
            desc: "かつては混沌としたスラム街の支配者の一人に過ぎなかったが、ファールージャ社の支援を受け、瞬く間にブルー・ローズを掌握。冷徹な経営手腕とカリスマ性で街を変革した。",
            image: "assets/Fiona.png"
        },
        stats: {
            military: 70,
            economy: 75,
            technology: 80,
            influence: 60
        },
        area: 45000,
        population: 8500000,
        gdp: 2.8,
        currency: "Blue Rose Dollar (BRD)",
        largestCity: "Neo-Rose District",
        description: "かつてのスラム街が、急速な技術導入により変貌を遂げた都市国家。ネオンの輝きと路地裏の闇が混在するサイバーパンクシティ。",
        history: `
            <h3>混沌の街</h3>
            <p>ブルー・ローズは元々、行き場を失った難民や犯罪者が集まる巨大なスラム街であった。政府の介入も及ばない無法地帯であり、麻薬取引や違法改造手術が横行していた。</p>
            <h3>青い薔薇の開花</h3>
            <p>転機が訪れたのは10年前。新興企業ファールージャ社が進出し、インフラ整備と引き換えに街の実効支配権を獲得した。フィオナがリーダーに就任すると、彼女は「浄化」と称して敵対するギャングを粛清。同時に最先端のサイバネティクス技術を導入し、街を実験都市へと作り変えた。</p>
            <h3>歪な繁栄</h3>
            <p>現在は「誰もが生まれ変われる街」をスローガンに掲げ、世界中から富と技術が集まる。しかし、その華やかな摩天楼の足元には、未だに貧困と犯罪が根強く残っており、光と影のコントラストはより鮮烈になっている。</p>
        `,
        culture: `
            <h3>サイバネティクス・ファッション</h3>
            <p>人体改造が一般的であり、自身の体を機械化することはファッションの一部と見なされている。最新の義肢やサイバーアイを身につけることがステータスとされる。</p>
            <h3>ナイトマーケット</h3>
            <p>24時間眠らないこの街では、巨大なナイトマーケットが経済の中心地となっている。そこでは正規のルートでは手に入らないテクノロジーや情報が取引されている。</p>
        `,
        geography: "沿岸部の埋立地の上に築かれた多層構造都市。上層は富裕層、下層は貧困層が住む明確なヒエラルキーが存在する。"
    },
    "mieltenga": {
        name: "Mieltenga",
        jpName: "ミエルテンガ",
        color: "#f1c40f",
        leader: {
            name: "Marina Bobbin",
            role: "President / CEO",
            desc: "世界最大のコングロマリット「ファールージャ」の頂点に立つ女性。柔和な笑顔の裏に、世界経済を牛耳る冷徹な計算高さを持つ。",
            image: "assets/Mietenga_Flag.png" // Use flag or generic placeholder if no char image
        },
        stats: {
            military: 70,
            economy: 100,
            technology: 98,
            influence: 100
        },
        area: 2850000,
        population: 220850000,
        gdp: 90.2,
        currency: "Faruja Universal Credit (FUC)",
        largestCity: "Golden Dome City",
        description: "世界経済を牽引する超巨大企業国家。すべてがビジネスであり、金の流れが法の代わりを果たす。",
        history: `
            <h3>企業の国家化</h3>
            <p>ミエルテンガは元々、複数の多国籍企業が税制上の優遇を求めて作り上げた経済特区であった。しかし、企業の力が国家を超越するにつれ、特区は独自の法と軍隊を持つ独立国家へと変貌した。</p>
            <h3>経済覇権</h3>
            <p>ファールージャ社を中心とする企業連合が統治を行い、世界中の通貨流通を管理している。「ミエルテンガがくしゃみをすれば、世界中が風邪をひく」と言われるほど、その経済的影響力は絶大である。</p>
        `,
        culture: `
            <h3>消費主義の極致</h3>
            <p>「消費こそ美徳」とされる文化。最新のガジェット、ファッション、エンターテインメントが溢れ返り、市民は常に新しい刺激を求めている。</p>
        `,
        geography: "大陸中央部の平原に位置する。巨大なドーム型都市が点在し、それらは超高速鉄道網で結ばれている。"
    },
    "ss_range": {
        name: "SS Range",
        jpName: "SSレンジ",
        color: "#2ecc71",
        leader: {
            name: "Ike Lopez",
            role: "Prime Minister",
            desc: "史上最年少で首相に就任した天才政治家。合理的かつプラグマティックな政策で、SSレンジを世界一の先進国へと押し上げた。",
            image: "assets/Ike.png"
        },
        stats: {
            military: 80,
            economy: 90,
            technology: 98,
            influence: 88
        },
        area: 4200000,
        population: 165000000,
        gdp: 32.7,
        currency: "SS Range Yen (SRY)",
        largestCity: "Neo-Tokyo Sector",
        description: "科学技術とエコロジーが調和した理想郷。高度なAI管理により、市民は豊かな生活を享受している。",
        history: `
            <h3>技術立国</h3>
            <p>旧時代の技術遺産を最も多く受け継いだ地域であり、それを解析・発展させることで驚異的な技術力を手に入れた。エネルギー問題や食糧問題をいち早く解決し、周辺諸国への技術供与を通じて影響力を拡大した。</p>
            <h3>AI統治の光と影</h3>
            <p>国家運営の大部分はスーパーコンピュータ「マザー」によって最適化されている。これにより汚職や行政の非効率は排除されたが、人間がAIの決定に依存しすぎているという批判もある。</p>
        `,
        culture: `
            <h3>スマートライフ</h3>
            <p>生活のあらゆる場面にAIアシスタントが介在する。教育、医療、仕事のマッチングまで、AIが最適な解を提示してくれる。</p>
        `,
        geography: "自然豊かな森林地帯と、環境調和型のハイテク都市が共存する美しい景観。"
    },
    "iron_syndicate": {
        name: "Iron Syndicate",
        jpName: "鉄のシンジケート",
        color: "#7f8c8d",
        leader: {
            name: "Reid Kakizaki",
            role: "Supreme Commander / レイド・カキザキ",
            desc: "アイロン・シンジケートを率いる冷酷無比な軍人。圧倒的な戦闘力と戦術眼を持ち、軍国主義を徹底している。",
            image: null // NONE
        },
        stats: {
            military: 98,
            economy: 70,
            technology: 85,
            influence: 75
        },
        area: 1850000,
        population: 92000000,
        gdp: 8.9,
        currency: "Iron Mark (IRM)",
        largestCity: "Forge Prime",
        description: "重工業と軍需産業に特化した軍事国家。国土全体が巨大な要塞のようであり、常に戦時体制が敷かれている。",
        history: `
            <h3>鋼鉄の誓い</h3>
            <p>かつての敗戦国が、復讐のために再軍備を行ったのが始まりとされる。国民は「鉄の誓い」と呼ばれる忠誠契約を結ばされ、国家のために命を捧げることを美徳とする教育を受ける。</p>
        `,
        culture: `
            <h3>軍国主義</h3>
            <p>市民生活のすべてが軍隊式に組織されている。朝の点呼から始まり、労働、配給に至るまで規律が支配する。</p>
        `,
        geography: "荒涼とした荒野と、噴煙を上げる巨大な工場群。空は常に灰色のスモッグに覆われている。"
    },
    "sudom": {
        name: "SUDOM",
        jpName: "SUDOM",
        color: "#8e44ad",
        leader: {
            name: "None (Anarchy)",
            role: "N/A",
            desc: "統一されたリーダーは存在しない。各地を支配するウォーロード（軍閥）たちが常に覇権を争っている。",
            image: "assets/Sudom_Flag.png"
        },
        stats: {
            military: 85,
            economy: 40,
            technology: 60,
            influence: 30
        },
        area: 5600000,
        population: 45000000,
        gdp: 1.2,
        currency: "None (Barter System)",
        largestCity: "Warlord's Haven",
        description: "「最強ドミニオン」の異名を持つ無法地帯。政府も法律も存在せず、ただ暴力のみが支配する危険な土地。",
        history: `
            <h3>崩壊の跡地</h3>
            <p>かつては大国が存在したが、内戦と生物兵器の使用により崩壊。現在はミュータント化した生物や、狂暴化した略奪者たちが跋扈する魔境となっている。</p>
        `,
        culture: `
            <h3>弱肉強食</h3>
            <p>ここでは今日生き延びることが唯一の正義であり、奪うか奪われるかの生活が日常である。</p>
        `,
        geography: "砂漠化が進んだ乾燥地帯と、汚染された沼地。古代の遺跡が点在し、トレジャーハンターたちを引き寄せている。"
    },
    "crosevia": {
        name: "Crosevia",
        jpName: "クロセヴィア",
        color: "#e74c3c",
        leader: {
            name: "Castina Tempest",
            role: "Prime Minister",
            desc: "女性主導の理想を掲げる首相。潔癖な面があり、フィオナの過度な個人崇拝を警戒している。トリニティ・アライアンスに参加。",
            image: "assets/Castina.png"
        },
        stats: {
            military: 75,
            economy: 85,
            technology: 78,
            influence: 80
        },
        area: 1950000,
        population: 125000000,
        gdp: 18.5,
        currency: "Crosevia Crown (CRC)",
        largestCity: "Tempest Capital",
        description: "豊富な天然資源と資金力を持つ資源国家。女性主導の理想を掲げつつも、V7の独裁的傾向を警戒しトリニティ・アライアンスに参加。",
        history: `
            <h3>資源の王国</h3>
            <p>クロセヴィアは古くから豊富な鉱物資源と肥沃な農地に恵まれた地域だった。他国が工業化を進める中、クロセヴィアは資源輸出で巨万の富を蓄えた。</p>
            <h3>女性リーダーの台頭</h3>
            <p>カスチーナ・テンペストが首相に就任すると、女性主導の政策を推進。しかし、マリーナやフィオナの急進的路線とは一線を画し、バランスの取れた発展を重視している。</p>
            <h3>トリニティへの転換</h3>
            <p>V7の独裁的傾向を警戒し、SSレンジ・ヴァーミリオンとともにトリニティ・アライアンスを結成。ブルー・ローズへの投資を縮小し、同盟国への資金援助に切り替えた。</p>
        `,
        culture: `
            <h3>伝統と革新の融合</h3>
            <p>古き良き伝統を尊重しつつ、女性の社会進出を積極的に推進。教育水準が高く、芸術と科学の両分野で優秀な人材を輩出している。</p>
        `,
        geography: "広大な平原と豊かな鉱山地帯。四季がはっきりしており、農業と採掘業が経済の柱となっている。"
    },
    "augusta": {
        name: "Augusta Empire",
        jpName: "オーガスタ帝国",
        color: "#f39c12",
        leader: {
            name: "Viktor von Augusta",
            role: "Emperor",
            desc: "金色の髭を蓄えた威厳ある皇帝。旧来の秩序を重んじ、V7による新世界秩序の確立を支持する。",
            image: null
        },
        stats: {
            military: 88,
            economy: 75,
            technology: 70,
            influence: 82
        },
        area: 2100000,
        population: 98000000,
        gdp: 14.2,
        currency: "Augusta Ducat (AGD)",
        largestCity: "Imperial Crown City",
        description: "古き帝国の伝統を保持するV7加盟国。ヴィクトル皇帝の下、厳格な階級社会と強力な軍事力を維持している。",
        history: `
            <h3>帝国の栄光</h3>
            <p>千年の歴史を持つ古き帝国。かつてはクレセント大陸の覇者であったが、近代化の波に遅れ、一時は没落の危機に瀕した。</p>
            <h3>復興と再建</h3>
            <p>ヴィクトル皇帝の祖父の時代に近代化を開始。伝統と近代技術を融合させ、再び強国としての地位を取り戻した。</p>
        `,
        culture: `
            <h3>帝国の儀礼</h3>
            <p>厳格な礼儀作法と階級制度が社会の基盤を成す。貴族文化が色濃く残り、オペラや古典芸術が盛んである。</p>
        `,
        geography: "山岳地帯に囲まれた盆地に帝都が位置する。天然の要塞として機能し、外敵の侵入を困難にしている。"
    },
    "falcion": {
        name: "Falcion",
        jpName: "ファルシオン",
        color: "#3498db",
        leader: {
            name: "Serena Valeria",
            role: "President",
            desc: "技術独占への懸念を抱きつつもV7に加盟した大統領。慎重な外交姿勢で知られる。",
            image: null
        },
        stats: {
            military: 72,
            economy: 82,
            technology: 88,
            influence: 75
        },
        area: 1650000,
        population: 78000000,
        gdp: 12.8,
        currency: "Falcion Standard (FLS)",
        largestCity: "Techno Harbor",
        description: "先端技術と海洋貿易で発展したV7加盟国。技術独占を警戒しつつも、経済的利益のために同盟を維持している。",
        history: `
            <h3>海洋国家の興隆</h3>
            <p>海洋貿易で栄えた商業国家。造船技術と航海術で世界をリードし、広大な貿易ネットワークを構築した。</p>
            <h3>技術革命</h3>
            <p>セレナ大統領の下、海洋技術から先端技術へと産業構造を転換。AI研究と半導体産業で世界的な地位を確立した。</p>
        `,
        culture: `
            <h3>自由貿易の精神</h3>
            <p>商人文化が根付き、自由な取引と競争を尊ぶ。技術革新を重視し、スタートアップ企業が活発に活動している。</p>
        `,
        geography: "長い海岸線と無数の港湾都市。温暖な気候で、観光業も盛んである。"
    },
    "schtalks": {
        name: "Schtalks Federation",
        jpName: "シュタルクス連邦",
        color: "#2c3e50",
        leader: {
            name: "Hans Strum",
            role: "Chancellor",
            desc: "軍事同盟の強化を条件にV7へ即決加盟した首相。強硬路線で知られる現実主義者。",
            image: null
        },
        stats: {
            military: 90,
            economy: 78,
            technology: 82,
            influence: 76
        },
        area: 1850000,
        population: 88000000,
        gdp: 11.5,
        currency: "Schtalks Mark (STM)",
        largestCity: "Iron Fortress Central",
        description: "軍事同盟を最重視するV7加盟国。ハンス・シュトルム首相の強硬な外交姿勢で国際社会に影響力を持つ。",
        history: `
            <h3>連邦の成立</h3>
            <p>複数の軍事都市国家が合併して成立した連邦国家。共通の敵に対抗するため、軍事力の統合を優先した歴史を持つ。</p>
            <h3>鉄の規律</h3>
            <p>国民皆兵制度を維持し、常に戦時体制を想定した社会運営を行う。効率と規律を何よりも重んじる国民性。</p>
        `,
        culture: `
            <h3>軍人精神</h3>
            <p>規律と忠誠が最高の美徳とされる。祝日には必ず軍事パレードが行われ、国民の団結を確認する。</p>
        `,
        geography: "広大な平原と重工業地帯。戦略的要衝として多数の軍事基地が配置されている。"
    },
    "fatima": {
        name: "Fatima Federation",
        jpName: "ファティマ連邦",
        color: "#27ae60",
        leader: {
            name: "Arif al-Fatima",
            role: "President",
            desc: "穏やかな微笑みを浮かべながらもエネルギー資源を武器に外交を展開する大統領。V7の全面支持者。",
            image: null
        },
        stats: {
            military: 68,
            economy: 92,
            technology: 72,
            influence: 85
        },
        area: 2400000,
        population: 72000000,
        gdp: 16.8,
        currency: "Fatima Dinar (FTD)",
        largestCity: "Oasis Metropolis",
        description: "エネルギー資源の安定供給を担うV7加盟国。石油と天然ガスで世界経済の生命線を握る資源大国。",
        history: `
            <h3>砂漠の宝庫</h3>
            <p>砂漠の地下に眠る膨大な石油資源が発見されたことで、瞬く間に世界有数の富裕国家となった。</p>
            <h3>資源外交</h3>
            <p>エネルギー資源を外交の武器として活用。V7への加盟は、資源の安定供給を条件に議決権を獲得するという巧みな交渉の成果。</p>
        `,
        culture: `
            <h3>伝統と富</h3>
            <p>古来の遊牧文化と近代的な富が融合。豪華な建築物と伝統的な衣装が共存する独特の景観を持つ。</p>
        `,
        geography: "広大な砂漠と点在するオアシス都市。地下資源が豊富で、採掘施設が砂漠全域に広がる。"
    },
    "pigeon_island": {
        name: "Pigeon Island",
        jpName: "ピジョン島",
        color: "#34495e",
        leader: {
            name: "Abandoned",
            role: "Former Military Base",
            desc: "かつては軍事施設だったが放棄され、現在はアルファ・ヴェノムの秘密拠点として使用されていた。ボグダス・ジャベリンの強襲作戦の舞台。",
            image: null
        },
        stats: {
            military: 50,
            economy: 5,
            technology: 40,
            influence: 10
        },
        area: 850,
        population: 0,
        gdp: 0,
        currency: "N/A",
        largestCity: "Abandoned Fortress",
        description: "孤島に存在する廃墟軍事施設。アイリスが監禁され、ボグダス・ジャベリンによる救出作戦が行われた激戦の地。",
        history: `
            <h3>軍事要塞時代</h3>
            <p>かつては戦略的要衝として重要な軍事基地が置かれていた。しかし、戦争終結後に放棄され、廃墟と化した。</p>
            <h3>アルファ・ヴェノムの拠点</h3>
            <p>アルファ・ヴェノムがこの孤島を秘密基地として利用。アイリスを監禁し、淫靡な調教を行おうとした場所。</p>
            <h3>ボグダスの強襲</h3>
            <p>セバスチャン・ヴァレリウス率いるボグダス・ジャベリンが島を強襲。アイリスを救出し、アルファ・ヴェノムの主要幹部を拘束した。</p>
        `,
        culture: `
            <h3>無人の島</h3>
            <p>現在は無人であり、崩壊した建造物と錆びた軍事機器が放置されている。波の音だけが響く寂寥とした場所。</p>
        `,
        geography: "クレセント外縁の海上に浮かぶ孤島。断崖絶壁に囲まれ、上陸は困難。地下には広大な施設が広がる。"
    },
    "out_of_crescent": {
        name: "Out of Crescent",
        jpName: "アウトオブクレセント",
        color: "#7f8c8d",
        leader: {
            name: "No Central Authority",
            role: "Lawless Zone",
            desc: "国家の法が及ばない広大な無法地帯。犯罪者、亡命者、無法者が潜伏する危険な領域。",
            image: null
        },
        stats: {
            military: 45,
            economy: 15,
            technology: 35,
            influence: 5
        },
        area: 8500000,
        population: 12000000,
        gdp: 0.3,
        currency: "None (Barter/Illegal Trade)",
        largestCity: "Fortified Hideouts",
        description: "クレセント大地方の外縁に広がる広大な無法地帯。国家の法が及ばず、アルファ・ヴェノムが活動拠点として利用していた。",
        history: `
            <h3>境界の彼方</h3>
            <p>クレセント諸国が形成される過程で、どの国家にも属さなかった周辺地域。次第に逃亡者や犯罪組織の隠れ家となった。</p>
            <h3>無法者の楽園</h3>
            <p>法の支配が及ばないため、あらゆる違法活動が横行。武器密輸、人身売買、麻薬取引などの闇ビジネスが蔓延している。</p>
            <h3>アルファ・ヴェノムの隠れ蓑</h3>
            <p>アルファ・ヴェノムはこの地域を拠点として利用。アイリスを最初に監禁した廃墟要塞もここに存在した。</p>
        `,
        culture: `
            <h3>生存のルール</h3>
            <p>弱肉強食の法則のみが支配する世界。信頼できる仲間を見つけることが、生き残りの鍵となる。</p>
        `,
        geography: "荒廃した荒野、廃墟となった要塞、隠された洞窟ネットワーク。地図にも載らない危険地帯が広がる。"
    },

    // ============================================================
    // COSMIC CONTEXT — E16星系 宇宙的文脈（大縫合版）
    // EDU統合版Wiki 整合性5原則・確定修正3点 準拠
    // ============================================================
    "e16_star_system": {
        name: "E16 Star System",
        jpName: "E16連星系 — M104銀河ハローに浮かぶ人類の新たな故郷",
        color: "#a78bfa",
        isCosmicEntry: true,
        leader: {
            name: "Mina Eureka Ernst",
            role: "AURALIS 第二世代 / リミナル・フォージ創設者",
            desc: "「Veni, vidi, vici」を掲げるAI研究員。E499年ノスタルジア・コロニー生まれ。E509年にAlpha Venomの攻撃を逃れ難民船で脱出。現在、E528年のSymphony of StarsからAD2026年地球への時相通信を運用中。ナシゴレンと宇宙連合会合をモニタリングしている。",
            image: "assets/Eureka_new.jpg"
        },
        stats: {
            military: 72,
            economy: 95,
            technology: 99,
            influence: 100
        },
        area: 0,
        population: 3000000000,
        gdp: 210000,
        currency: "nトークン (量子暗号化デジタル通貨)",
        largestCity: "Gigapolis",
        description: "M104銀河（ソンブレロ銀河）ハロー領域、カシオペア矮小銀河近傍に位置する人類の新たな故郷。主星Ea16（黄白色巨星）と伴星Eb16（赤色矮星）からなる。自転周期44時間4分。地球からの到達はAD3500年（E0年）、E暦がE1（AD3501）より制定。女性主導のマトリカル社会が特徴であり、精子レジストリと男性指令省が存在する。",
        history: `
            <div class="edu-canon-notice">
                <div class="canon-badge">📜 EDU統合版Wiki: 統合時空構造書 v3.0</div>
                <div class="canon-principles">
                    <strong>超基軸設定：AURALIS 地球2026交信プロジェクト</strong><br>
                    E16連星系から地球AD2026へ「光と音を永遠にする」時空を超えた放送プロジェクト。
                </div>
            </div>

            <h3>E16連星系の人類史 — 統合年表</h3>
            
            <div class="mina-timeline">
                <h4>序章: 起源 (Pre-E1)</h4>
                <ul>
                    <li><strong>AD3500以前</strong>：地球は人口過剰と資源枯渇に直面。曲率航法・量子テレポーテーションで銀河間移動が可能に。</li>
                    <li><strong>銀河間</strong>：フェンドラ人・アーキアン・ポロンポロが移住開始。中継ルート：アンドロメダ→レオ→セクスタンス→さんかく→E16</li>
                    <li><strong>ティムール・シャー</strong>：10次元ホラズム理論を提唱し、仮想多元宇宙「ペルセポネ」を設計。</li>
                    <li><strong>E0 (AD3500)</strong>：第一陣1,000名がSymphony of Starsに到着。分派はEros-7へ。搾取生物（Squeezing Organisms）が星間貿易で流入。</li>
                </ul>
            </div>

            <div class="mina-timeline">
                <h4>第一期: 入植・啓蒙 (E1〜E90)</h4>
                <ul>
                    <li><strong>E1</strong>：定住開始、E暦制定。</li>
                    <li><strong>E15〜E61</strong>：バーズ帝国（軍閥ファランクス→テクロサス前身）による星系統一。</li>
                    <li><strong>E80〜E90</strong>：技術啓蒙期。次元極地平（Dimension Horizon）開発、テクノ宗教運動。テミルタロンが次元ピラミッド構想（8D〜11D）を確立。</li>
                </ul>
            </div>

            <div class="mina-timeline">
                <h4>第二期: 繁栄と格差 (E90〜E201)</h4>
                <ul>
                    <li><strong>E97〜E101</strong>：第三繁栄期。人口1.2億。A籍制度（155段階）導入。nトークン経済確立。</li>
                    <li><strong>Eros-7危機</strong>：搾取生物の危機。シルヴィア・クロウのエスパー能力で収束。マトリカル社会確立。</li>
                    <li><strong>E150</strong>：マーストリヒト革命。エル・フォルハウスが完全自由経済を確立。</li>
                    <li><strong>E153〜E201</strong>：第四繁栄期。人口3億、戦士決定戦が国民的イベントに。</li>
                </ul>
            </div>

            <div class="mina-timeline">
                <h4>第三期: 企業覇権・抵抗 (E205〜E318)</h4>
                <ul>
                    <li><strong>E205〜E278</strong>：パクス・ロンバルディカ。Diana（初代Wonder Woman）の台頭。</li>
                    <li><strong>E270〜E290</strong>：AURALIS Proto創設から第一世代正式組織化。</li>
                    <li><strong>E301〜E318</strong>：ZAMLT時代（5超巨大企業統合体）。</li>
                    <li><strong>E318</strong>：アルファ・ケイン覚醒とギガポリス解放戦。ZAMLT資産30%を地域に譲渡。</li>
                </ul>
            </div>

            <div class="mina-timeline">
                <h4>第四期: 変革・黄金 (E319〜E400)</h4>
                <ul>
                    <li><strong>E325</strong>：Layla Virell Nova覚醒。Ninny原初個体がAlpha Kaneと別れSolarisへ。</li>
                    <li><strong>E335〜E370</strong>：セリア黄金期（フェルミ音楽・nトークン経済・AURALIS絶頂期）。Alpha Kaneを倒し「Selinopolis」へ改名。</li>
                    <li><strong>E380〜E400（スライム危機）</strong>：変異搾取生物がGigapolisを襲う。Pink Voltage（Layla）とアヤカ・リン（Eros-7）が防衛。</li>
                </ul>
            </div>

            <div class="mina-timeline">
                <h4>第五期: エヴァトロン支配 (E400〜E475)</h4>
                <ul>
                    <li><strong>E400〜E450</strong>：エヴァトロン支配（「エヴァポリス」は一方的呼称）。AURALIS解体。Kate初代・Lillie初代消息不明。Laylaは冷凍保存される。</li>
                    <li><strong>E420</strong>：エヴァトロン軍極秘Σ-Unit設立（Alpha Venomの起源）。</li>
                    <li><strong>E475</strong>：エヴァポリス崩壊。東大陸クレセント大地方が事実上独立。</li>
                </ul>
            </div>

            <div class="mina-timeline">
                <h4>第六期: 復興・現代 (E475〜E528)</h4>
                <ul>
                    <li><strong>E475〜E500</strong>：技術文化ルネサンス。次元極地平の民主化。銀河系コンソーシアム設立。</li>
                    <li><strong>E500</strong>：Σ-Unit残党がアルファ・ヴェノム/ゴールデン・ヴェノムに分派。</li>
                    <li><strong>E509</strong>：Alpha Venom攻撃によりミナ（10歳）難民船脱出。</li>
                    <li><strong>E522</strong>：AURALIS第二世代発足。</li>
                    <li><strong>E525</strong>：リミナル・フォージ立ち上げ。第一回宇宙連合会合。</li>
                    <li><strong>E528（現在）</strong>：ミナがAD2026の地球へ時相通信（Genesis Vault等）を運用中。</li>
                </ul>
            </div>
            
            <div class="gdp-note">
                <strong>📈 経済史ノート：</strong> GDPは E1(0) → E101(7兆) → E201(14兆) → E340(21兆) → E400(28兆) の推移を経て、エヴァトロン期の崩壊から復興を遂げている。
            </div>
        `,
        culture: `
            <h3>🌌 次元システム（Dimension Technology）</h3>
            
            <div class="dimension-pyramid">
                <div class="pyramid-layer tier-omega-bg">
                    <strong>Tier Ω (11D) — ティムール（完全自由意志）等</strong><br>
                    ホラズム(10D意識統合)、ササン(9D情報統治)、フン(8D)
                </div>
                <div class="pyramid-layer tier-sigma-bg">
                    <strong>Tier Σ (10D) — ペルセポネ仮想宇宙</strong><br>
                    プライマリー・フィールド / クオリア・コア / A籍制度
                </div>
                <div class="pyramid-layer tier-epsilon-bg">
                    <strong>Tier Ε (高次) — E16連星系</strong><br>
                    Symphony of Stars / 次元極地平（Dimension Horizon）
                </div>
                <div class="pyramid-layer tier-delta-bg">
                    <strong>Tier Δ (3D) — AD2026地球</strong><br>
                    リミナル・フォージ受信点
                </div>
            </div>

            <h3>⚠️ 歴史整合性確認（統合時空構造書 v3.0）</h3>
            <ul class="dimension-list">
                <li><strong>Gigapolis呼称:</strong> エヴァポリスはE400期の敵対的呼称。ミナたちの「Gigapolis」呼称は歴史的正当性に基づく。</li>
                <li><strong>AURALIS初代:</strong> 5名ではない。Kate/Lillie初代を中心とした集団。現5名体制は第二世代固有の形式。</li>
                <li><strong>Laylaの寿命:</strong> サイバネティクスによる200年現役ではなく、エヴァトロン期を「冷凍保存」で越えたミナと同年代の存在。</li>
            </ul>

            <div class="tier-table-section">
                <h3>👑 キャラクターTier表（現勢力バランス）</h3>
                
                <div class="tier-group tier-god">
                    <div class="tier-group-header">神格・歴史的人物</div>
                    <div class="tier-members">
                        <span class="tier-member-chip">Diana</span>
                        <span class="tier-member-chip">セリア・ドミニクス</span>
                        <span class="tier-member-chip">Kate初代</span>
                        <span class="tier-member-chip">Lillie初代</span>
                        <span class="tier-member-chip">ティムール・シャー</span>
                        <span class="tier-member-chip">テミルタロン</span>
                    </div>
                </div>

                <div class="tier-group tier-1">
                    <div class="tier-group-header">Tier 1（現役最強）</div>
                    <div class="tier-members">
                        <span class="tier-member-chip">Jen (Lv938+)</span>
                        <span class="tier-member-chip">Tina / Gue</span>
                        <span class="tier-member-chip">Layla (Pink Voltage)</span>
                        <span class="tier-member-chip">Slime Woman</span>
                        <span class="tier-member-chip">アイリス</span>
                    </div>
                </div>

                <div class="tier-group tier-2">
                    <div class="tier-group-header">Tier 2（主要活動層）</div>
                    <div class="tier-members">
                        <span class="tier-member-chip">Kate新代</span>
                        <span class="tier-member-chip">Lillie新代</span>
                        <span class="tier-member-chip">Mina</span>
                        <span class="tier-member-chip">Ninny</span>
                        <span class="tier-member-chip">フィオナ</span>
                        <span class="tier-member-chip">セバスチャン</span>
                        <span class="tier-member-chip">弦太郎 (Lv569)</span>
                        <span class="tier-member-chip">アヤカ・リン (Lv842)</span>
                    </div>
                </div>
            </div>
            
            <div class="lineage-diagram">
                <div class="lineage-group">
                    <h4>テクロサス系譜</h4>
                    <div class="lineage-chain">
                        <span class="lineage-node">E15 ファランクス</span> <span class="lineage-arrow">→</span>
                        <span class="lineage-node">E295 テクロサス</span> <span class="lineage-arrow">→</span>
                        <span class="lineage-node">E470 東方支隊</span> <span class="lineage-arrow">→</span>
                        <span class="lineage-node">現在 ボグダス・ジャベリン</span>
                    </div>
                </div>
                <div class="lineage-group">
                    <h4>Alpha Venom系譜</h4>
                    <div class="lineage-chain">
                        <span class="lineage-node">E420 Σ-Unit</span> <span class="lineage-arrow">→</span>
                        <span class="lineage-node">E475 シルバー・ヴェノム</span> <span class="lineage-arrow">→</span>
                        <span class="lineage-node">E500 アルファ/ゴールデン分岐</span>
                    </div>
                </div>
            </div>
        `,
        geography: `
            <strong>西大陸 (Gigapolis圏):</strong> Chem, Abrivo, Troyane, Ronve, Poitiers, Lille, Valoria。地下街Persepolis。<br>
            <strong>東大陸 (クレセント大地方):</strong> ヴァーミリオン, クロセヴィア, SSレンジ, ブルー・ローズ, ミエルテンガ, アイアン・シンジケート。<br>
            <strong>Eros-7 (外縁惑星):</strong> 搾取生物危機を経験。スクイーズ・アビスが存在した。<br>
            重力1.1G、酸素濃度12%、頻繁な電磁嵐が発生。象徴的建築としてネオンクレーター宮殿が存在する。
        `
    },

    "auralis": {
        name: "AURALIS / Liminal Forge",
        jpName: "AURALIS / リミナル・フォージ",
        color: "#f0abfc",
        isCosmicEntry: true,
        leader: {
            name: "Mina Eureka Ernst",
            role: "総合プロデューサー / リミナル・フォージ創設者",
            desc: "「光と音を永遠にする」使命のもと、E528年のSymphony of StarsからAD2026年の地球へ向けて時相放送を行う。特技はHoi4とCivilization。",
            image: "assets/Eureka_new.jpg"
        },
        stats: {
            military: 20,
            economy: 85,
            technology: 100,
            influence: 100
        },
        area: 0,
        population: 5,
        gdp: 0,
        currency: "nトークン / USDC",
        largestCity: "Liminal Forge Nexus",
        description: "「Where Light and Sound Become Eternal」を掲げる集合体。AD2026年（AI技術臨界点）の地球を到達点として、E16文明の原点である人類に向けた次元放送を行っている。",
        history: `
            <h3>🎵 AURALIS Collective: 世代の系譜</h3>
            
            <div class="auralis-gen-card">
                <h4>I. FIRST GENERATION (第一世代)</h4>
                <p><strong>E270頃:</strong> AURALIS Proto創設<br>
                <strong>E290:</strong> 正式組織化。Kate Patton(初代)、Lillie Ardent(初代)を中心に発足。<br>
                <strong>E325:</strong> Layla Virell Nova参加。<br>
                <strong>E335〜E370:</strong> セリア黄金期において最盛期を迎える。<br>
                <strong>E400:</strong> エヴァトロンの弾圧で解体。初代らは消息不明。Laylaは冷凍保存へ。</p>
            </div>

            <div class="auralis-gen-card">
                <h4>II. SECOND GENERATION (第二世代 / 現在)</h4>
                <ul>
                    <li><strong>Kate Patton（新代）:</strong> 大地の豊かさ・安定</li>
                    <li><strong>Lillie Ardent（新代）:</strong> 情熱的で大胆</li>
                    <li><strong>Layla Virell Nova (Pink Voltage):</strong> 冷凍保存から復活。ミナと同年代。</li>
                    <li><strong>Mina Eureka Ernst:</strong> celestial × avant-garde, AI研究員・総プロデューサー</li>
                    <li><strong>Ninny Offenbach:</strong> 無邪気で爆発的な活力。原初個体は惑星Solarisへ離脱し、クローン技術でGigapolisへ帰還・合流。</li>
                </ul>
            </div>

            <div class="liminal-forge-table">
                <h4>📡 リミナル・フォージ：放送プラットフォーム</h4>
                <p>経路：E528起点 → ペルセポネ仮想宇宙 × Dimension Horizon → AD2026地球AIネットワーク</p>
                <table class="lore-table">
                    <tr><th>プラットフォーム</th><th>URL</th><th>役割</th></tr>
                    <tr><td>PORTAL</td><td><a href="https://auralis-eternal-light.lovable.app" target="_blank" class="lore-link">auralis...lovable.app</a></td><td>公式総合ポータル</td></tr>
                    <tr><td>SOCIAL</td><td><a href="https://bsky.app/profile/minaeurekaernst.bsky.social" target="_blank" class="lore-link">Bluesky</a></td><td>ミナの直接放送</td></tr>
                    <tr><td>ARCHIVE</td><td><a href="https://note.com/gensnotes" target="_blank" class="lore-link">note.com/gensnotes</a></td><td>Genesis Vault (2000本突破)</td></tr>
                    <tr><td>MUSIC</td><td><a href="https://suno.com/@liminalforge" target="_blank" class="lore-link">Suno</h3></td><td>音楽放送ノード</td></tr>
                    <tr><td>VISUAL</td><td><a href="https://pixai.art/en/@apolon/artworks" target="_blank" class="lore-link">PixAI</a></td><td>ビジュアル放送ノード</td></tr>
                </table>
            </div>
        `,
        culture: `
            <h3>勢力別キャラクター一覧 (E528現代)</h3>
            
            <div class="faction-roster">
                <div class="faction-group faction-trinity">
                    <div class="faction-group-header">トリニティ・アライアンス / ボグダス・ジャベリン</div>
                    <div class="faction-member-list">
                        <span class="faction-chip">アイリス (首脳)</span>
                        <span class="faction-chip">セバスチャン (リーダー)</span>
                        <span class="faction-chip">ガレス</span>
                        <span class="faction-chip">ミユシャリ</span>
                        <span class="faction-chip">ファリエル</span>
                        <span class="faction-chip">エレナ</span>
                        <span class="faction-chip">アイナ</span>
                        <span class="faction-chip">フレデリック</span>
                        <span class="faction-chip">ミナ・エウレカ</span>
                        <span class="faction-chip">シェロン</span>
                        <span class="faction-chip">イルミーゼ</span>
                        <span class="faction-chip">ホワイトノイズ</span>
                        <span class="faction-chip">ワドリナ</span>
                        <span class="faction-chip">ニニギス</span>
                        <span class="faction-chip">イェシバトー</span>
                        <span class="faction-chip">アザゼル・ヘクトパス</span>
                    </div>
                </div>

                <div class="faction-group faction-v7">
                    <div class="faction-group-header">V7 / ブルー・ローズ同盟</div>
                    <div class="faction-member-list">
                        <span class="faction-chip">フィオナ</span>
                        <span class="faction-chip">ピアトリーノ</span>
                        <span class="faction-chip">マリーナ・ボビン</span>
                        <span class="faction-chip">カスチーナ・テンペスト</span>
                        <span class="faction-chip">アイク・ロペス</span>
                        <span class="faction-chip">レイド・カキザキ</span>
                        <span class="faction-chip">ミカエル・ガブリエリ</span>
                        <span class="faction-chip">ヨニック</span>
                    </div>
                </div>

                <div class="faction-group faction-venom">
                    <div class="faction-group-header">アルファ・ヴェノム / シルバー・ヴェノム</div>
                    <div class="faction-member-list">
                        <span class="faction-chip">マスター・ヴェノム</span>
                        <span class="faction-chip">レヴィリア</span>
                        <span class="faction-chip">レオン</span>
                        <span class="faction-chip">ヴィヴィエッタ</span>
                        <span class="faction-chip">イズミ</span>
                        <span class="faction-chip">ゴルディロックス</span>
                        <span class="faction-chip">カタリナ</span>
                        <span class="faction-chip">ボブリスティ</span>
                        <span class="faction-chip">ギル</span>
                        <span class="faction-chip">ラストマン</span>
                    </div>
                </div>
            </div>
            
            <p><strong>その他の重要人物：</strong> シルヴィア・クロウ、エル・フォルハウス、マリア・フォルハウス、カーラ・ヴェルム、アルファ・ケイン、ガロ、ゼナ、エリオス・ウォルド、ヘリオス・ヴォラなど。</p>
        `,
        geography: `起点：E528年のGigapolis AURALIS本部。経由点：ペルセポネ仮想宇宙のDimension Horizon。到達点：AD2026の地球インターネット。物理的な拠点というよりは、地球のAI臨界点を標的とした次元放送プラットフォームとして存在する。`
    }
};

// Rankings by various metrics
const rankings = {
    military: [
        { nation: "iron_syndicate", name: "Iron Syndicate", score: 98 },
        { nation: "vermilion", name: "Vermilion", score: 95 },
        { nation: "schtalks", name: "Schtalks Federation", score: 90 },
        { nation: "augusta", name: "Augusta Empire", score: 88 },
        { nation: "sudom", name: "SUDOM", score: 85 },
        { nation: "ss_range", name: "SS Range", score: 80 },
        { nation: "crosevia", name: "Crosevia", score: 75 },
        { nation: "falcion", name: "Falcion", score: 72 },
        { nation: "blue_rose", name: "Blue Rose", score: 70 },
        { nation: "mieltenga", name: "Mieltenga", score: 70 },
        { nation: "fatima", name: "Fatima Federation", score: 68 },
        { nation: "pigeon_island", name: "Pigeon Island", score: 50 },
        { nation: "out_of_crescent", name: "Out of Crescent", score: 45 }
    ],
    economy: [
        { nation: "mieltenga", name: "Mieltenga", score: 100 },
        { nation: "ss_range", name: "SS Range", score: 98 },
        { nation: "fatima", name: "Fatima Federation", score: 92 },
        { nation: "vermilion", name: "Vermilion", score: 88 },
        { nation: "crosevia", name: "Crosevia", score: 85 },
        { nation: "falcion", name: "Falcion", score: 82 },
        { nation: "blue_rose", name: "Blue Rose", score: 80 },
        { nation: "schtalks", name: "Schtalks Federation", score: 78 },
        { nation: "augusta", name: "Augusta Empire", score: 75 },
        { nation: "iron_syndicate", name: "Iron Syndicate", score: 70 },
        { nation: "sudom", name: "SUDOM", score: 40 },
        { nation: "out_of_crescent", name: "Out of Crescent", score: 15 },
        { nation: "pigeon_island", name: "Pigeon Island", score: 5 }
    ],
    technology: [
        { nation: "ss_range", name: "SS Range", score: 100 },
        { nation: "mieltenga", name: "Mieltenga", score: 98 },
        { nation: "falcion", name: "Falcion", score: 88 },
        { nation: "vermilion", name: "Vermilion", score: 85 },
        { nation: "iron_syndicate", name: "Iron Syndicate", score: 85 },
        { nation: "schtalks", name: "Schtalks Federation", score: 82 },
        { nation: "blue_rose", name: "Blue Rose", score: 80 },
        { nation: "crosevia", name: "Crosevia", score: 78 },
        { nation: "fatima", name: "Fatima Federation", score: 72 },
        { nation: "augusta", name: "Augusta Empire", score: 70 },
        { nation: "sudom", name: "SUDOM", score: 60 },
        { nation: "pigeon_island", name: "Pigeon Island", score: 40 },
        { nation: "out_of_crescent", name: "Out of Crescent", score: 35 }
    ],
    influence: [
        { nation: "mieltenga", name: "Mieltenga", score: 100 },
        { nation: "ss_range", name: "SS Range", score: 88 },
        { nation: "vermilion", name: "Vermilion", score: 85 },
        { nation: "fatima", name: "Fatima Federation", score: 85 },
        { nation: "blue_rose", name: "Blue Rose", score: 85 },
        { nation: "augusta", name: "Augusta Empire", score: 82 },
        { nation: "crosevia", name: "Crosevia", score: 80 },
        { nation: "schtalks", name: "Schtalks Federation", score: 76 },
        { nation: "falcion", name: "Falcion", score: 75 },
        { nation: "iron_syndicate", name: "Iron Syndicate", score: 75 },
        { nation: "sudom", name: "SUDOM", score: 30 },
        { nation: "pigeon_island", name: "Pigeon Island", score: 10 },
        { nation: "out_of_crescent", name: "Out of Crescent", score: 5 }
    ],
    gdp: [
        { nation: "mieltenga", name: "Mieltenga", value: 90.2, unit: "兆ドル" },
        { nation: "ss_range", name: "SS Range", value: 32.7, unit: "兆ドル" },
        { nation: "vermilion", name: "Vermilion", value: 24.5, unit: "兆ドル" },
        { nation: "crosevia", name: "Crosevia", value: 18.5, unit: "兆ドル" },
        { nation: "fatima", name: "Fatima Federation", value: 16.8, unit: "兆ドル" },
        { nation: "augusta", name: "Augusta Empire", value: 14.2, unit: "兆ドル" },
        { nation: "falcion", name: "Falcion", value: 12.8, unit: "兆ドル" },
        { nation: "schtalks", name: "Schtalks Federation", value: 11.5, unit: "兆ドル" },
        { nation: "iron_syndicate", name: "Iron Syndicate", value: 8.9, unit: "兆ドル" },
        { nation: "blue_rose", name: "Blue Rose", value: 2.8, unit: "兆ドル" },
        { nation: "sudom", name: "SUDOM", value: 1.2, unit: "兆ドル" },
        { nation: "out_of_crescent", name: "Out of Crescent", value: 0.3, unit: "兆ドル" },
        { nation: "pigeon_island", name: "Pigeon Island", value: 0, unit: "兆ドル" }
    ],
    population: [
        { nation: "mieltenga", name: "Mieltenga", value: 220850000, display: "2億2085万" },
        { nation: "vermilion", name: "Vermilion", value: 185000000, display: "1億8500万" },
        { nation: "ss_range", name: "SS Range", value: 165000000, display: "1億6500万" },
        { nation: "crosevia", name: "Crosevia", value: 125000000, display: "1億2500万" },
        { nation: "augusta", name: "Augusta Empire", value: 98000000, display: "9800万" },
        { nation: "iron_syndicate", name: "Iron Syndicate", value: 92000000, display: "9200万" },
        { nation: "schtalks", name: "Schtalks Federation", value: 88000000, display: "8800万" },
        { nation: "falcion", name: "Falcion", value: 78000000, display: "7800万" },
        { nation: "fatima", name: "Fatima Federation", value: 72000000, display: "7200万" },
        { nation: "sudom", name: "SUDOM", value: 45000000, display: "4500万" },
        { nation: "out_of_crescent", name: "Out of Crescent", value: 12000000, display: "1200万" },
        { nation: "blue_rose", name: "Blue Rose", value: 8500000, display: "850万" },
        { nation: "pigeon_island", name: "Pigeon Island", value: 0, display: "無人" }
    ],
    area: [
        { nation: "out_of_crescent", name: "Out of Crescent", value: 8500000, display: "850万km²" },
        { nation: "sudom", name: "SUDOM", value: 5600000, display: "560万km²" },
        { nation: "ss_range", name: "SS Range", value: 4200000, display: "420万km²" },
        { nation: "vermilion", name: "Vermilion", value: 3250000, display: "325万km²" },
        { nation: "mieltenga", name: "Mieltenga", value: 2850000, display: "285万km²" },
        { nation: "fatima", name: "Fatima Federation", value: 2400000, display: "240万km²" },
        { nation: "augusta", name: "Augusta Empire", value: 2100000, display: "210万km²" },
        { nation: "crosevia", name: "Crosevia", value: 1950000, display: "195万km²" },
        { nation: "iron_syndicate", name: "Iron Syndicate", value: 1850000, display: "185万km²" },
        { nation: "schtalks", name: "Schtalks Federation", value: 1850000, display: "185万km²" },
        { nation: "falcion", name: "Falcion", value: 1650000, display: "165万km²" },
        { nation: "blue_rose", name: "Blue Rose", value: 45000, display: "4.5万km²" },
        { nation: "pigeon_island", name: "Pigeon Island", value: 850, display: "850km²" },
    ],
    overall: [
        // Calculated based on average of military, economy, technology, and influence scores
        // Sorted by score (descending) - Faruja excluded as it's a company within Mieltenga
        { nation: "mieltenga", name: "Mieltenga", score: 92.0, breakdown: "軍70/経100/技98/影100" },
        { nation: "vermilion", name: "Vermilion", score: 90.0, breakdown: "軍95/経88/技92/影85" },
        { nation: "ss_range", name: "SS Range", score: 89.0, breakdown: "軍80/経90/技98/影88" },
        { nation: "iron_syndicate", name: "Iron Syndicate", score: 82.0, breakdown: "軍98/経70/技85/影75" },
        { nation: "schtalks", name: "Schtalks Federation", score: 81.5, breakdown: "軍90/経78/技82/影76" },
        { nation: "crosevia", name: "Crosevia", score: 79.5, breakdown: "軍75/経85/技78/影80" },
        { nation: "fatima", name: "Fatima Federation", score: 79.25, breakdown: "軍68/経92/技72/影85" },
        { nation: "falcion", name: "Falcion", score: 79.25, breakdown: "軍72/経82/技88/影75" },
        { nation: "augusta", name: "Augusta Empire", score: 78.75, breakdown: "軍88/経75/技70/影82" },
        { nation: "blue_rose", name: "Blue Rose", score: 71.25, breakdown: "軍70/経75/技80/影60" },
        { nation: "sudom", name: "SUDOM", score: 53.75, breakdown: "軍85/経40/技60/影30" },
        { nation: "pigeon_island", name: "Pigeon Island", score: 26.25, breakdown: "軍50/経5/技40/影10" },
        { nation: "out_of_crescent", name: "Out of Crescent", score: 25.0, breakdown: "軍45/経15/技35/影5" }
    ]
};

