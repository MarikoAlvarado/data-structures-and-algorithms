# Challenge Summary
<!-- Short summary or background information -->
Create a pseudoQueue made up of two stack objects.

## Challenge Description
<!-- Description of the challenge -->
Create a PseudoQueue with methods enqueue and dequeue that either pushes a new value into the first stack on enqueue or pushes a new value into the second stack on dequeue by popping a value from the first stack.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I took the approach of coming up with the problem domain first and then writing code so it would make more sense. Then I wrote tests to test against. I had two stacks labeled A and B and by calling Enqueue stackA would use stack methods of push to add a value to. Using Dequeue first checks to see if there are values in stackA, if so, pop a value from it and push it into stackB.

## Solution
<!-- Embedded whiteboard image -->

![whiteboard](queuestacks.png)