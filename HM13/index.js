// 1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

sumPositiveElements = 0;
numberPositiveElements = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    numberPositiveElements++;
    sumPositiveElements += array[i];
  }
}
 
console.log(`Number of positive elements: ${numberPositiveElements}`);
console.log(`Sum of positive elements: ${sumPositiveElements}`);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.

minElements = 0;
indexMinElements = 0;

for (i = 0; i < array.length; i++) {
  if (minElements > array[i])  {
    minElements = array[i];
    indexMinElements = i;
  }
}
 
console.log(`min elements: ${minElements}`);
console.log(`index min elements: ${indexMinElements}`);

// 3.Знайти максимальний елемент масиву та його порядковий номер.

maxElements = 0;
indexMaxElements = 0;

for (i = 0; i < array.length; i++) {
  if (maxElements < array[i])  {
    maxElements = array[i];
    indexMaxElements = i;
  }
}
 
console.log(`max elements: ${maxElements}`);
console.log(`index max elements: ${indexMaxElements}`);

// 4. Визначити кількість негативних елементів.

negativeElements = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] < 0)  {
    negativeElements++;
  }
}
 
console.log(`Number of negatives elements: ${negativeElements}`);

// 5.Знайти кількість непарних позитивних елементів.

oddPositiveElements = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0)  {
    oddPositiveElements++;
  }
}
 
console.log(`Number of odd positive elements: ${oddPositiveElements}`);

// 6.Знайти кількість парних позитивних елементів.

couplesPositiveElements = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0)  {
    couplesPositiveElements++;
  }
}
 
console.log(`Number of couples positive elements: ${couplesPositiveElements}`);

// 7.Знайти суму парних позитивних елементів..

sumCouplesPositiveElements = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0)  {
    sumCouplesPositiveElements += array[i];
  }
}
 
console.log(`Sum of couples positive elements: ${sumCouplesPositiveElements}`);

// 8.Знайти суму непарних позитивних елементів.

sumOddPositiveElements = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0)  {
    sumOddPositiveElements += array[i];
  }
}
 
console.log(`Sum of odd positive elements: ${sumOddPositiveElements}`);

// 9.Знайти добуток позитивних елементів.

productPositiveElements = 1;

for (i = 0; i < array.length; i++) {
  if (array[i] > 0 )  {
    productPositiveElements *= array[i];
  }
}
 
console.log(`Product positive elements: ${productPositiveElements}`);


// 10.Знайти найбільший серед елементів масиву, інші обнулити.

maxInElements = array[0];
resetResult = 0
for (i = 0; i < array.length; i++) {
  if (array[i] > maxInElements )  {
    maxInElements = array[i];
  }
}

for (i = 0; i < array.length; i++) {
  if (array[i] !== maxInElements )  {
    array[i] = 0;
  }
}
 
console.log(`Max in elements and reset: ${array}`);

