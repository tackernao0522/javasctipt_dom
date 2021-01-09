// mutable (宣言後に変更可能)
// immutable (宣言後に変更不可能)

// let mutableText = 'let変更前';
// mutableText = 'let変更後'; // 変更可能

// const immutableText = 'const変更前';
// immutableText = 'const変更後'; // 変更不可

// const mutableArray = [1, 2, 3];
// mutableArray.push(4); // 変更可能 配列やオブジェクトは定数宣言してもmutableである

let mutableText = 'let変更前';
mutableText = 'let変更後';
console.log(mutableText); // let変更後

const immutableText = 'const変更前';
// immutableText = 'const変更後'; // 変更不可
console.log(immutableText); // const変更前

const mutableArray = [1, 2, 3];
mutableArray.push(4);
console.log(mutableArray); // [ 1, 2, 3, 4 ] 変更可能

const mutableObject = {id: 'hoge', value: 'fuga'}
mutableObject['name'] = 'bar';
console.log(mutableObject); // { id: 'hoge', value: 'fuga', name: 'bar' } 付け足し可能
