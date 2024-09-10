function mergeSort(arr) {
  // Base case: length is 1
  if (arr.length === 1) return arr;

  let sortedArray = [];
  let leftHalf = mergeSort(arr.slice(0, arr.length / 2));
  let rightHalf = mergeSort(arr.slice(arr.length / 2));
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] <= rightHalf[0]) {
      sortedArray.push(leftHalf.shift());
    } else {
      sortedArray.push(rightHalf.shift());
    }
  }
  return [...sortedArray, ...leftHalf, ...rightHalf];
}
