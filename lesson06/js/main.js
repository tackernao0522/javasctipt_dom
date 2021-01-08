'use strict';

// replace関数
function replace() {
  // e1要素のテキストを置換
  var e1 = document.getElementById('e1');
  e1.innerText = "置換しました";

  // e2要素を作成
  var e2 = document.createElement('div');
  e2.setAttribute("id", "e2");
  e2.innerText = "e2要素を作成しました";
  // e2要素をbodyに追加
  document.body.appendChild(e2);
}
