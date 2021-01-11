// map
const array = [1, 2, 4, 8];
const resultArray = array.map(x => x * 2)
console.log(resultArray)
// [ 2, 4, 8, 16 ]

const object = {
  "hoge": { text: "fuga" },
  "foo": { text: "bar" },
  "fiz": { text: "buzz" }
};

const objectToArray = Object.keys(object).map(key => {
  const value = object[key]
  // console.log(value)
  // { text: 'fuga' }
  // { text: 'bar' }
  // { text: 'buzz' }
  value['id'] = key
  // console.log(value)
  return value
});
console.log(objectToArray);
  /*
[
{ text: 'fuga', id: 'hoge' },
{ text: 'bar', id: 'foo' },
{ text: 'buzz', id: 'fiz' }
]
*/
