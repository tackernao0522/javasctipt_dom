const testScope = (scope) => {
  if (scope === 'function') {
    var message = '関数スコープ'
  }
  console.log(message) // 関数スコープ if文の外で使える
}
testScope('function')

const testScope2 = (scope) => {
  if (scope === 'block') {
    let message = 'ブロックスコープ'
    console.log(message) // if文の中でないと使えない
  }
}
testScope2('block')
