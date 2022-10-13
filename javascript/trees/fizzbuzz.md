# FizzBuzz

## Partner

Worked on this with Daniel Frey

## Challenge

- Write a function called fizz buzz tree
- Arguments: k-ary tree
- Return: new k-ary tree

## WHITE BOARD IMAGE

![WHITE BOARD](./img/code18.png)

## Approach & Efficiency

- Determined whether or not the value of each node is divisible by 3, 5 or both. Created a new tree with the same structure as the original, but the values modified.
- Big O for this problem is time: O(n) space: O(n)

## API

### Binary Tree

- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String
