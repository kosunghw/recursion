function fibs(num) {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  const fibArray = [0, 1];
  let i = 2;
  while (i < num) {
    let lastNum = fibArray[i - 1];
    let secondLastNum = fibArray[i - 2];
    fibArray.push(lastNum + secondLastNum);
    i++;
  }
  return fibArray;
}

function fibsRec(num) {
  console.log('this function was called recursively');
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const arr = fibsRec(num - 1);
  const next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next);
  return arr;
}
