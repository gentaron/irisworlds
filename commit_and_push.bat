@echo off
chcp 65001 > nul
echo ========================================================
echo EDU 統合時空構造書 v3.0 更新のコミットとプッシュを開始します
echo ========================================================

cd /d "%~dp0"
git add .
git commit -m "feat: Integrate Eternal Dominion Universe v3.0 lore including cosmic context and Mina Eureka updates"
git push origin master

echo ========================================================
echo 完了しました。何かエラーが出ていないか確認してください。
echo ========================================================
pause
