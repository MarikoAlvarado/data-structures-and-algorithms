# Merge-Sort CC 27

Given the algorithm:

```
ALGORITHM mergeSort(arr)
      DECLARE n <-- arr.length
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]

      // merge the sorted left and right sides together and return the resulting arr from merge
      return merge(mergeSort(left), mergeSort(right))

ALGORITHM merge(left, right)
    DECLARE i <-- 0 //left index
    DECLARE j <-- 0 //right index
    DECLARE resultArr <-- empty array

    while i < left.length && j < right.length
        if left[i] < right[j]
            push into resultArr <-- left[i]
            i <-- i + 1
        else
            push into resultArr <-- right[j]
            j <-- j + 1

    return resultArr + concat of remainder of either left or right arr

```

**STEP 1** using sample array `[8, 4, 23, 42, 16, 15]`

  - Have the function `mergeSort()` take in the array and declare the variable **n** to be the length of the array
    - declare variable **mid** to be the array's middle index
    - declare variable **left** to be the first half of the original array up until **mid**
    - declare variable **right** to be the second half of the original array after **mid**
    
    invoke `merge()` passing the arguments of both arrays recursively called in the `mergeSort()` and return the resulting array from `mergeSort()`

**STEP 2** `merge()` takes in the left and right array

- declare variables:
  - **i** which represents the index of the left array starting at 0
  - **j** which represents the index of the right array starting at 0
  - **arr** an empty array that each integer will be pushed into in their ascending order

- while the current left index is less than the length of its array AND the current right index is less that *its* array:
    - check for which ever integer at its current index position in the array is of lesser value than the other
    - that which is less will be pushed in the result arr and the index position of the array will bump up one increment, continuing the for loop until the length of either of the arrays has been reached. 

**STEP 3** return the array of sorted integers merged with the remainder of what's left of either array.

[resources](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)