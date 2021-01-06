'use strict';

const test = document.getElementById('test');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  test.textContent = 'ありがとう';
});
