// Add up the Numbers from a Single Number

export const addUpNumsFromSingleNum = (num: number): number => {
    var response: number = 0;
    for (let i = 0; i <= num; i++) response = response + i;
    return response;
}