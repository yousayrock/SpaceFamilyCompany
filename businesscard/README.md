# SpaceFamilyCompany 名刺エディタ

公開URL: https://yousayrock.github.io/SpaceFamilyCompany/businesscard/

91 × 55 mm の名刺を、iPhone の Safari でもPCでも編集できるエディタ。

## 使い方（iPhone）
- 画面上に名刺、その下に「文字 / 配置 / 素材 / 保存」のタブ。
- **文字**：入力すると名刺にすぐ反映。メールとホームページはその場でQRになる。
- **配置**：名刺の上をタップ、またはボタンで素材を選ぶ。指でドラッグして移動、右下の丸でサイズ変更。矢印ボタンは1回0.5mm（押し続けると連続）。
- **素材**：ロゴ・背景を写真やファイルから差し替え（大きい画像は自動で縮小）。完成イメージのガイドを重ねて表示できる。
- **保存**：「画像（PNG）で保存」で約380dpiの画像を作る。長押し→「"写真"に保存」、または共有ボタンで保存。印刷 / PDF は91×55mmのページで出力される。
- 入力した文字・配置・差し替えた画像は、その端末のブラウザに自動保存される。
- iPhone を横向きにすると、名刺と操作パネルが左右に並ぶ。
- 共有メニューの「ホーム画面に追加」で、アプリのように全画面で開ける。

## ファイル
- `index.html` — エディタ本体
- `vendor/qrcode.js` — QR生成（qrcode-generator 2.0.4, MIT）。外部サイトに頼らずQRを作れる。
- `vendor/html2canvas.min.js` — PNG書き出し（html2canvas 1.4.1, MIT）。「画像で保存」を押したときだけ読み込む。
- `assets/logo/` — SpaceFamilyCompany の正本ロゴ一式（logo-horizontal-v1～3: 横型、logo-icon-v1～2: アイコン型）
- `assets/reference/` — 名刺デザインの参考画像（`approved_businesscard_reference.jpeg` をガイドに使用）
- `assets/design-history/` — デザイン検討用の過去案

## ブランド方向
- 水色 × ピンク
- SpaceFamilyCompany セリフ体ワードマーク
- 菱形 / 八面体モチーフ
- 白を基調に、淡い宇宙・星・光の表現
- キャッチコピー：「あなたの困りごと、研究させてください。」
