function merge(arr1, arr2) {

  const merged = [];
  let i = 0;
  let j = 0;

  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}


/*
- Accept an array and divide in halves until there is one value left in each
array
- Call two values on the merge function to sort them
- Group the sorted values, then compare two more sorted arrays by calling the
merge function
- return the array once it is a complete single array
*/


function mergeSort(arr) {
  // Base case
  // when there are only two values, compare them and sort them, then return
  if (arr.length <= 1) {
    return arr;
  }

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length/2) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  let leftHalf = mergeSort(arr1);
  let rightHalf = mergeSort(arr2);

  return (merge(leftHalf, rightHalf));
}

module.exports = { merge, mergeSort };