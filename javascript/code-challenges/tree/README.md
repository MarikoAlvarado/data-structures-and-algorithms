# Trees
<!-- Short summary or background information -->
Create a Node class, a BinaryTree class and a BinarySearchTree class.

## Challenge
<!-- Description of the challenge -->

Create a node class with properties for value,left child and right child. Create a Binary Tree class with methods PreOrder, inOrder and postOrder that return an array with values from tree in the right order. Create a BinarySearchTree class with an add method that will create a new node and place it correctly within the tree, add another method named contains that will accept a value and return true or false if the value exists within the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I took the approach of creating an add method with and O(h) for time and O(1) for space. Because I'm unsure of how to construct add to a tree and *then* use a traversal method based on the new construct, I designed my test for preOrder to first add() and then send the root of the additions to the preOrder method. It was on the right track but it did not pass.

## API
<!-- Description of each method publicly available in each of your trees -->

`add()`

`preOrder()`


