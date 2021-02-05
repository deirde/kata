/*
BLOCK THE SQUARE IN TIC TAC TOE

Create a function that returns a number which can block the player from reaching 3 in a row in a game of Tic Tac Toe. The number given as an argument will correspond to a grid of Tic Tac Toe: topleft is 0, topright is 2, bottomleft is 6, and bottomright is 8.

- Create a function that takes two numbers a, b and returns another number.

- This number should be the final one in a line to block the player from winning.

Examples
blockPlayer(0, 3) ➞ 6

blockPlayer(0, 4) ➞ 8

blockPlayer(3, 5) ➞ 4
*/

export const blockPlayer = (firstMove: number, secondMove: number): number => (secondMove - firstMove) * 2;