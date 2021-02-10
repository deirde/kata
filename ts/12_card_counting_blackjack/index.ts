// https://edabit.com/challenge/3kzhTP7nEwcaKP82H

// 2, 3, 4, 5, 6 are counted as +1
// 7, 8, 9 are counted as 0
// 10, J, Q, K, A are counted as -1

type deckType = {
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number,
    9: number,
    10: number,
    'J': number,
    'Q': number,
    'K': number,
    'A': number
};

const deck: deckType = {
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 0,
    8: 0,
    9: 0,
    10: -1,
    'J': -1,
    'Q': -1,
    'K': -1,
    'A': -1
}

let output = 0;
export const count = (cards: any[]): number => {
    cards.forEach(card => deck[card] && (output += deck[card]));
    return output;
}