# Insertion Sort

Given an unsorted array, we want to sort it in ascending order in place and return the sorted array.

Given the pseudocode:  

```

 InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

```

1. First we start out with an unsorted array `[2,1,4]` that is passed into a function `insertionSort()`



2. The outer loop will start at index one and go until it reaches the end of the array `for(i = 1; arr.length;i++)`

  - `let j = index 1 - 1` so let j = 2
  - `let temp = current index` so let temp = 1

3. The inner loop will run while j(2) is greater than or equal to 0 AND the current index(1) is less than j(2).
  
  - 2 is greater than 0 AND 1 is less than 2 so...
  - index 0+1 = index 1 so index 1 is now 2
  - j = j-1 = -1


