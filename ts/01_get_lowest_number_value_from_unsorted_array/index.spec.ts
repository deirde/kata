import { getTheLowestNumber } from "./index";

test("Get the lowest number value from an unsorted array", () => {
  expect(getTheLowestNumber([2, 1, 3])).toBe(1);
});

test("Get the lowest number value from an unsorted array", () => {
  expect(getTheLowestNumber([80, 5, 100])).toBe(5);
});


test("Get the lowest number value from an unsorted array, ttt", () => {
  expect(getTheLowestNumber([-500, 0, 50])).toBe(-500);
});

