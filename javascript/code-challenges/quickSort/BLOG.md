# Merge-Sort CC 27

Given the algorithm:

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

**STEP 1** using sample array `[8, 4, 23, 42, 16, 15]`

  - pass the array, the index of 0(left) and the last index of the array(right) into the `quickSort` function.
    - `quickSort(arr,0,arr.length-1)`
  - If left is less than right:
   - declare **position** as the result from `partition()` which takes in arr, left and right and returns index where low and pivot meet in the array.
  - recursively call `quickSort` passing arr, left and the result from the partition function - 1 index to determine if left is less than right.
  -recursively call `quicksort` passing arr, the result from the partition function + 1 and right to determine if left is less than right.
  - The if statement will time out once the left index 

