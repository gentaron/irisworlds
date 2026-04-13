const fs = require('fs');
const path = require('path');

// ソースファイルのパス
const sourceFiles = [
    '../IRIS_1.txt',
    '../IRIS_2.txt',
    '../IRIS_3.txt',
    '../IRIS_4.txt'
];

// 章タイトルの定義（日本語と英語）
const chapterTitles = [
    "第1章: 蒼き幻影",
    "第2章: 同盟と混沌",
    "第3章: 裏切り",
    "第4章: 深淵へ",
    "第5章: ヴェノムの影",
    "第6章: 救出作戦",
    "第7章: 新たな脅威",
    "第8章: 女性主導の波",
    "第9章: ボグダスの介入",
    "第10章: 地下の闇",
    "第11章: エロスの罠",
    "第12章: 抵抗の意志",
    "第13章: ピンチと覚醒",
    "第14章: 逆襲の刻",
    "第15章: 真実の探求",
    "第16章: 統一への道",
    "第17章: 陰謀の深化",
    "第18章: 決戦前夜",
    "第19章: 最終決戦",
    "第20章: 新世界の夜明け"
];

console.log('=== IRIS Chronicles 20章ビルドスクリプト ===\n');

try {
    // 全ソースファイルを読み込んで結合
    let fullContent = '';
    for (const relativePath of sourceFiles) {
        const fullPath = path.join(__dirname, relativePath);
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            fullContent += content;
            console.log(`✓ 読み込み完了: ${path.basename(fullPath)}`);
        } else {
            console.error(`✗ ファイルが見つかりません: ${fullPath}`);
            process.exit(1);
        }
    }

    console.log(`\n総文字数: ${fullContent.length.toLocaleString()}`);

    // 段落で分割（空行区切り）
    const paragraphs = fullContent.split(/\r?\n\r?\n+/).filter(p => p.trim().length > 0);
    console.log(`段落数: ${paragraphs.length.toLocaleString()}\n`);

    // 20章に分割
    const totalParagraphs = paragraphs.length;
    const paragraphsPerChapter = Math.ceil(totalParagraphs / 20);

    const storyData = {};
    let currentIndex = 0;

    for (let i = 0; i < 20; i++) {
        const chapterKey = `ch${i + 1}`;
        const startIdx = currentIndex;
        const endIdx = Math.min(currentIndex + paragraphsPerChapter, totalParagraphs);

        // この章の段落を結合
        const chapterParagraphs = paragraphs.slice(startIdx, endIdx);
        const chapterContent = chapterParagraphs.join('\r\n\r\n');

        storyData[chapterKey] = chapterContent;

        const charCount = chapterContent.length;
        const lineCount = chapterContent.split('\n').length;
        console.log(`${chapterTitles[i]}: ${charCount.toLocaleString()}文字, ${lineCount}行 (段落 ${startIdx}-${endIdx})`);

        currentIndex = endIdx;
    }

    // story_content.jsに出力
    const jsContent = `const storyData = ${JSON.stringify(storyData, null, 4)};`;
    fs.writeFileSync('story_content.js', jsContent, 'utf8');

    console.log('\n✓ story_content.js を生成しました');
    console.log(`  ファイルサイズ: ${(fs.statSync('story_content.js').size / 1024).toFixed(2)} KB`);

} catch (err) {
    console.error('\n✗ エラー:', err.message);
    process.exit(1);
}
