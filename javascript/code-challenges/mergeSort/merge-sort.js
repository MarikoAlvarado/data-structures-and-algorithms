'use strict';


function mergeSort(arr) {
  console.log('wtf', arr);

  if (arr.length <= 1) {
    return arr;
  }
  let n = arr.length;
  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // console.log('left:', typeof (left), 'right:', right);
  let resultArr = [];
  let i = 0; //left index
  let j = 0; //right index
  // let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      resultArr.push(left[i]);
      i++;
    } else {
      resultArr.push(right[j]);
      j++;
    }
  }
  return resultArr.concat(left.slice(i)).concat(right.slice(j))
}
module.exports = mergeSort;