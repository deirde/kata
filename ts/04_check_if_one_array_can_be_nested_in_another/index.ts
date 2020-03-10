/*
NESTED ARRAY

Create a function that returns true if the first array can be nested inside the second.

Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false

Notes
Note the strict inequality.
*/


export const canNest = (arr1: Array<number>, arr2: Array<number>) => {
  return [ ...new Set(arr1.concat(arr2)) ].length === arr1.length + arr2.length;
};
