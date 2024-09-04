// Task 1

let randomArray = [1,'d',2,7,'fg',2];

function calculationAverage(array){
  let average = 0;
  let temp = 0;

  for (let i = 0; i < array.length; i++) {
    if(!isNaN(array[i])) {
      average += array[i];
      temp++;
    }
  }
  return average/temp;
}

console.log(`1. Calculation average ${calculationAverage(randomArray)}`);

// Task 2

let x, y, znak;

while (isNaN(x)) {
  x = prompt('enter a first number x:');
}

while (isNaN(y)) {
  y = prompt('enter a second number y:');
}

do {
  znak = prompt('enter an action : (+, -, *, /, %, ^)');
} while (znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/' && znak !== '%' && znak !== '^');

function doMath(x, znak, y) {

  switch (znak) {
    case '+':
        return +x + +y;
        break;
    case '-':
        return x - y;
        break;
    case '*':
        return x * y;
        break;
    case '/':
        return x / y;
        break;
    case '%':
        return x % y;
        break; 
  }
}

let result = doMath(x, znak, y);

console.log(`2. Math ${result}`);

// Task 3

function fillingArray() {
  let mainArray = prompt('enter number of element Main array');
  let internalArray = prompt('enter number of element Internal array');

  array = [];

  for (let i = 1; i <= mainArray; i++) {
    secArray = [];
    for (let j = 1; j <= internalArray; j++) {
        let elementArray = (prompt(`Enter [${j}] value [${i}] element main array`));
        secArray.push(elementArray);
    }

  array.push(secArray);
  }

  return array;
}

console.log(fillingArray());

// Task 4

let string = prompt('Enter phrase');
let deleteSymbol = prompt('Enter symbol for delete');

function removeSymbol(string, deleteSymbol) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
      if (deleteSymbol.indexOf(string[i]) === -1) {
          result += string[i];
      }
  }
  return result;
}

console.log(removeSymbol(string, deleteSymbol));

