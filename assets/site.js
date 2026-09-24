// スマホ幅でのメニュー開閉
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  function set(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }
  btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();

// LINEで相談する追従ボタン（スマホは画面下のバー、PCは右下のボタン）
(function () {
  if (document.querySelector(".line-float")) return;
  var a = document.createElement("a");
  a.className = "line-float";
  a.href = "https://line.me/R/oaMessage/@699xcssc/?%E7%9B%B8%E8%AB%87%E3%81%97%E3%81%9F%E3%81%84%E3%81%A7%E3%81%99";
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg><span><b>LINEで相談する</b><small>AIが24時間受付・相談無料</small></span>';
  document.body.appendChild(a);
  document.body.classList.add("has-line-float");
})();

// 相談フォーム：入力内容を書き込んだ状態でメールソフトを開く
(function () {
  var f = document.getElementById('contact-form');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = f.elements['name'].value, mail = f.elements['email'].value, msg = f.elements['message'].value;
    var body = 'お名前：' + name + '\nメール：' + mail + '\n\n' + msg;
    location.href = 'mailto:spacefamilycompany@gmail.com?subject=' + encodeURIComponent('【HPからのご相談】' + name) + '&body=' + encodeURIComponent(body);
  });
})();
