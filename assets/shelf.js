// 発明品の棚（トップページ）
// 番号のボタンを押すと、右のパネルがその発明品に切り替わる
(function () {
  var shelf = document.getElementById('shelf');
  if (!shelf) return;

  var list = [
{ id: '002', name: '家系Bot', status: '外部に納品済み', done: true, desc: 'レシートを撮るか、金額を書くだけの家計簿Bot。AIが支出を分析し、Googleカレンダーとも連携します。', use: '会費や経費の記録を、チャットに書くだけにする。', tags: ['Discord', 'レシート読み取り', 'AI分析'] },
{ id: '003', name: '創造局Bot', status: '仕上げ中', done: false, desc: '声を聞き取り、AIが考え、キャラクターの声で返す。ライブ配信の相棒です。', use: '窓口の案内係や電話の一次受付を、話せるAIキャラクターに任せる。', tags: ['音声認識', 'Claude', 'VOICEVOX', 'OBS'] },
{ id: '004', name: 'Shorts自動投稿', status: '完成', done: true, desc: '縦型動画のサイズ調整、タイトル付け、YouTubeへの投稿までを自動で行います。', use: '活動の様子を、撮るだけで動画で発信する。', tags: ['YouTube API', 'React'] },
{ id: '005', name: '看板職人くん', status: '完成', done: true, desc: 'お店のSNSや既存ページのURLから、AIが紹介ページを組み立てます。', use: '団体の紹介ページを、最短で公開する。', tags: ['Claude API', 'Streamlit'] },
{ id: '006', name: 'サブモニターくん', status: '完成', done: true, desc: '使っていないAndroidタブレットを、無線でパソコンの第二画面にします。2台同時にも対応。', use: '使っていない端末を、受付やイベント会場の表示板に再利用する。', tags: ['Android', 'Windows', 'ストリーミング'] },
{ id: '007', name: 'アンドロナビくん', status: '開発中', done: false, desc: '市販の車載Androidナビに手を入れ、Linuxが動く小さなコンピュータに変えます。', use: '送迎車や巡回車のナビを、業務用の端末として活かす。', tags: ['Android', 'Linux'] },
{ id: '008', name: 'HUDくん', status: '開発中', done: false, desc: '速度、地図、音声案内、通知をひとつの横長画面にまとめた車載アプリ。', use: '送迎・巡回のドライバーが見る専用画面を、車両に合わせてつくる。', tags: ['Kotlin', 'Google Maps', '音声案内'] },
{ id: '009', name: 'AI秘書くん', status: '設計済み', done: false, desc: '独り言のように書き込むだけで、AIが整理して報告書にまとめます。', use: '活動の口頭報告を、そのまま事業報告の下書きにする。', tags: ['Discord', 'Claude'] },
{ id: '010', name: '生きてる報告書', status: '開発中', done: false, desc: 'その日の記録から、色の移り変わりで気分まで伝わる日報をつくります。', use: '活動日誌を、読んでもらえる報告書に変える。', tags: ['HTML', 'AI分類'] },
{ id: '011', name: 'RoadTalk', status: '運送会社で導入準備中', done: false, desc: 'ドライバーのタブレットと事務所をつなぐ音声・連絡システム。配車担当と管理者それぞれに専用の画面があります。', use: '送迎・配送・見守りの車両と事務所をつなぐ連絡網に。', tags: ['Kotlin', 'React', 'LiveKit', 'PostgreSQL'] },
{ id: '012', name: 'Mia Rinos', status: '開発中', done: false, desc: 'オンラインゲーム『FF11』のAIパートナー。気持ちに合わせて16種類の表情で話します。', use: 'よくある質問への案内を、会話できるキャラクターに任せる。', tags: ['Flutter', 'AIキャラクター'] }
];

  var picked = '011';
  var panel = document.querySelector('.gadget');
  var pill = panel.querySelector('.pill');
  var shot = document.getElementById('g-shot');
  var tags = document.getElementById('g-tags');

  function field(k, v) {
    panel.querySelectorAll('[data-g="' + k + '"]').forEach(function (el) { el.textContent = v; });
  }

  function render() {
    shelf.innerHTML = '';
    list.forEach(function (x) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-pressed', x.id === picked ? 'true' : 'false');
      b.innerHTML = '<span class="no"></span><span></span>';
      b.children[0].textContent = x.id + '号';
      b.children[1].textContent = x.name;
      b.addEventListener('click', function () {
        picked = x.id;
        render();
        shelf.querySelector('[aria-pressed="true"]').focus();
        if (window.innerWidth < 960) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      shelf.appendChild(b);
    });

    var s = list.filter(function (x) { return x.id === picked; })[0] || list[0];
    field('no', s.id + '号機');
    field('name', s.name);
    field('status', s.status);
    field('desc', s.desc);
    field('use', s.use);
    pill.classList.toggle('is-done', s.done);
    pill.classList.toggle('is-wip', !s.done);
    if (shot) { shot.src = 'assets/img/gadget-' + s.id + '.jpg'; shot.alt = s.name + 'の画面イメージ'; }
    tags.innerHTML = '';
    s.tags.forEach(function (t) {
      var sp = document.createElement('span');
      sp.className = 'tag';
      sp.textContent = t;
      tags.appendChild(sp);
    });
  }

  render();
})();
