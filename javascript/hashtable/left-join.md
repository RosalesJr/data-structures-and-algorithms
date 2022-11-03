# Hashmap Left Join

## Credit

Worked on this with Taylor Main

## Challenge

- Write a function called left join that takes two hash maps as arguments.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

## Approach & Efficiency

- Combined the key and corresponding values into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
- If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- Big O for this problem is time: O(n) space: O(n)

## API

Utilized the Single-responsibility principle: methods are clean, reusable, abstract component parts to the whole challenge.
