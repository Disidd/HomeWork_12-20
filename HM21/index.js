const array = [
  [
    ['some text', true, [1,2,3,4, [10, 20]]],
  ],
  [
    [1, 2, 3, [100, 200]],
    ['name', 'age']
  ],
];

function deepClone(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray.push(deepClone(array[i]))
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(deepClone(array));
