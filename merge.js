function merge(arr1,arr2) {

  const newArr = [];
  let i = 0;
  let j = 0;

  while ( arr1.length > i && arr2.length > j){
    if (arr1[i] < arr2[j]){
      newArr.push(arr1[i]);
      i++;
    }else{
      newArr.push(arr2[j]);
      j++;
    }
  }


  while( i < arr1.length){
    newArr.push(arr1[i]);
    i++;
  }
  while( j < arr2.length){
    newArr.push(arr2[j]);
    j++;
  }
 console.log("newArr===", newArr)
  return newArr;

  // let arr1 = [1,3,4,5];
  // let arr2 = [2,4,6,8];


}





function mergeSort() {}

module.exports = { merge, mergeSort};