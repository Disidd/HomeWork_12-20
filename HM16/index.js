array = [1,2,3,4,5,6];

function removeElement(array, item) {
    indexToRemove = array.indexOf(item);

    if (indexToRemove !== -1) {
      array.splice(indexToRemove, 1);
    }
}

removeElement(array, 8)
console.log(array);
