'use strict';

function quickSort(arr, left, right) {
  console.log('coming into quickSort:', arr, left, right);
  if (arr[left] < arr[right]) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1)
    quickSort(arr, position + 1, right)
  }
}
function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1

  for (let i = low; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low)
    } else {
      swap(arr, right, low + 1)
    }
  }
  return low + 1;
}
function swap(arr, i, low) {
  console.log('hitting swap:', arr, i, low);
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp
  return temp;
}
module.exports = quickSort;