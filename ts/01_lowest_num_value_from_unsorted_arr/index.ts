/*
GET THE LOWEST NUMBER FROM AN UNSORTED ARRAY

Create a function that takes an array of numbers as an argument.
Return the lowest value contained in the array.
For example, if the input is [4, 3, 5] then your function should return 3 because it is the lowset number.

Examples
getLowest([4, 3, 5]) ➞ 3
getLowest([-500, 0, 50]) ➞ -500

Notes
The array may contain even negative numbers.

*/

export const getLowest = (arr: Array<number>): number => Math.min(...arr);
