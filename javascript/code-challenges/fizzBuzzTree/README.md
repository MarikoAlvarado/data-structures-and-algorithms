# Challenge Summary CC18
<!-- Short summary or background information -->
Take a k-ary tree inside of a function and return a new tree with the same structure but new values under specific condition.

## Challenge Description
<!-- Description of the challenge -->
Create a function that takes in a tree with an unknown number of child nodes per parent. If original value of a node is divisible by 3, give it the value of "Fizz", if divisible by 5 give it the value of "Buzz", if divisible by both then "FizzBuzz" and if it not divisible by either, turn the original value as a string. Each node with it's new value will be placed appropriately in the new tree. Return the new tree.

## Approach & Efficiency (Mariko,Simon,Ricardo)
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

We took the approach of using a recursive function that takes in a node starting with the root. The node is checked against certain conditions and the we check if the node has an array of children, if it does then the recursive function is called for each child which then goes through the same process. The big O for space and time is O(n) because each node in the tree is visited and the new tree is of the same structure.

## Solution
<!-- Embedded whiteboard image -->

![whiteboard](cc18.png)