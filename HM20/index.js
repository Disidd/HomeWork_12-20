function createSum() {
  let sum = 0;
  
  return function(number) {
      sum += number;
      return sum;
  };
}

const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(5));
