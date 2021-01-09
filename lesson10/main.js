// function funcName(arguments) {
//   // 何かしらの処理
// }

// アロー関数
// const funcName = (arguments) => {
//   // 何かしらの処理
// }

// const funcName = (argumants) => // 1行で終わらせる処理;

// ES6以前の場合
function namedFunc(message) {
  console.log(message)
}

// アロー関数
const arrowFunc = (message) => {
  console.log(message)
}

// アロー関数 1line
const oneLineArrowFunc = (message) => console.log(message);

const users = {
  hoge: 'torahack'
}
const getUsername = (userId) => users[userId]; // returnが省略できる

namedFunc('これは名前付き関数です') // これは名前付き関数です
arrowFunc('これはアロー関数です')   // これはアロー関数です
oneLineArrowFunc('これは1行で書いたアロー関数です') // これは1行で書いたアロー関数です

const username = getUsername('hoge')
console.log(username) // torahack
