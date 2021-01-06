'use strict';

// li要素を作成する
const li = document.createElement('li');
li.textContent = 'リスト追加分';

// ulにliを追加する
const ul = document.querySelector('ul'); // htmlの要素を指定する
ul.appendChild(li); // 子要素を追加する
