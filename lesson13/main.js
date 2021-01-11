// findeIndex() 要素の何番目か知る

const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" }
];

const index = objectArray.findIndex(object => {
  return object.id === 'hoge'
});

console.log(index, objectArray[index]);
// 0 { id: 'hoge', text: 'fuga' }

console.log(index, objectArray[index].text);
// 0 fuga
