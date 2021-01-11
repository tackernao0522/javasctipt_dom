// test() マッチする文字列か判定

const torahack = 'torahack'
const charahack = 'charahack'
const regex = RegExp('tora*')

console.log("Is tora~ ?", regex.test(torahack)); // true
console.log("Is tora~ ?", regex.test(charahack)); // flase
console.log("Is chara~ ?", /chara*/.test(charahack)) // true

const isTora = regex.test(torahack)

if (isTora) {
  console.log("私はトラハックです。");
} else {
  console.log("私はトラハックではありません。");
}
// 私はトラハックです。
