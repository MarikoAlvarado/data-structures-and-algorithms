# Stacks and Queues
Create three classes for node, class and stack.

## Challenge
Create a new node with properties for value and next which references a node which follows. Create a Stack class with property `top`that creates a empty stack when instantiated and methods push, pop, peek and isEmpty. Create Queue class with property `front` that creates empty queue when instantiated and methods enqueue, dequeue, peek and isEmpty. Write 14 tests to prove functionality. 

## Approach & Efficiency
Without using arrays, I used linked list traversal in methods resulting in O(1)time and O(n) for space depending on how many nodes are added to a stack or queue. 

## API
`push()` - add a node to top of stack

`pop()` - remove node from top of stack

`peek()` - return value of node at top of stack

`isEmpty()` - checks whether or not stack is empty and returns false or true

`enqueue()` - adds node to back of queue

`dequeue()` - removes node from front of queue

`peek()` - return value of node at front of queue

`isEmpty()` - checks whether or not queue is empty and returns false or true

