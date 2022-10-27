# task1
チーム開発課題用リポジトリ

# 10/22 To-Do
- [x] 課題の理解を各自進める
- [x] ウェブページのコンセプト検討
- [x] 必要なページ検討
- [x] 必要な機能検討
***
# Cafe Recursion Home Page（参考）
https://acha0203.github.io/Cafe-Recursion/
要件：トップページにスライダーアニメーションを配置する。
1. スライダーなしで作成
2. 見本どおりに作成
3. 見本にはないメニューのページやリンクなども作成
*** 
# コンセプト(仮)
カフェ（変更可）のwebサイト
# 要件定義(最低限？)
- HTML、CSS、Bootstrap（javascript）使用
- メニューバー（ページ幅縮小でToggle）
- スライダー部分
- What's newとRecommendation

## 時間の限り追加していく機能一例
- メニュー各種ページ作成
- What's newとRecommendationをクリックしたときのアクション
- 各種ページ, またオリジナル機能等（SNS連携?やユーザとのインタラクション機能など）

*** 
# 進め方（案）
1. まずは、トップページの開発を分担 例えばメニューバー担当、スライダー部分担当、ページ下部担当⇒pull request積極的に使ってアップデート⇒merge(3日くらい？) 

初回は、作業ディレクトリにて
`git clone https://github.com/greenGitWorkShop/task1.git` 
`git remote set-url origin https://github.com/greenGitWorkShop/task1.git`  
`git init`
`git switch -c {branchname}` 
`git status` 
`コード編集` 
`git add .` 
`git commit -m "xxx"`  (更新があったら積極的にcommit)
`git push origin {branchname}` 

（動作確認も終えてある程度できたら）**プルリクエスト！**reviewerにメンバー追加
Reviewerは修正等あれば編集やcomment、問題なければapprove。code複数行選ぶときはshift押しながら。
最後はリーダーがMerge

更なる機能追加、修正時作業ディレクトリにて
`git pull origin develop --rebase`
`git switch -c {branchname}` 
　　　　・
　　　　・
　　　　・

2. 完成したら、各ページの作成を担当者ごとに作成⇒pull request⇒merge（10/29 夕方あたりまで?）
3. **10/29 23:59**までにデプロイ

***
## その他
[マークダウン記法](https://qiita.com/kamorits/items/6f342da395ad57468ae3)
[vscode:ブラウザでhtml開く](https://step-learn.com/article/vscode/016-open-browser.html)
[「git pull」を実行するとリモートの内容が自動的にマージされてしまいますが、マージしたくない場合はfetchコマンド](https://qiita.com/tarr1124/items/d807887418671adbc46f)
[issueを作成するとGitHubが自動的に番号を割り振ってくれますので、issueに関連した作業をしたときはコミットメッセージにそのissueの番号を含めるようにしてください。](https://github.com/recursion-teamdev/practice/issues/22)
[githubでのスケジュール管理「Milestone」](https://seleck.cc/647)
[pull requestとissue紐づけ](https://qiita.com/kodai_0122/items/18f7faa80f0302244c51)
