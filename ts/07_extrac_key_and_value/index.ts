/*
EXTRACT THE INDEX AND VALUE

Create a function that extract the index and value of the first element found from an unsorted array.
Return an object with the key and the value found, if the element doesn't exist then return an empty object.

Examples
extracKeyAndValue([4, 5, 5], 5) ➞ { key: 2, value: 5}
extracKeyAndValue([4, 5, 5, 6, 1], 5) ➞ { key: 5, value: 1}
extracKeyAndValue([4, 5, 5, 6, 1], 9) ➞ {}

*/

export const extracKeyAndValue = (arr: Array<number>, f: Number): Object => {
    let val = arr.find(el => el === f);
    return (!val) ? {} : {
        key: arr.findIndex(el => el === f),
        val: val
    }
}