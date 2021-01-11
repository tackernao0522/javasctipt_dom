// filter()
const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" }
];

const result = objectArray.filter(object => {
  return object.id === 'hoge'
});

console.log(result);
// [ { id: 'hoge', text: 'fuga' } ]
console.log(result[0]);
// { id: 'hoge', text: 'fuga' }
console.log(result[0].text);
// fuga
