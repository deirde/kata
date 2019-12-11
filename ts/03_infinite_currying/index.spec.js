import { sum } from './index';

test('two positive numbers', () => {
  // expect(sum(2, 3)).toBe(5);
  expect(sum(2)(3)).toBe(5);
  // expect(sum(2)(3)(2)(3)).toBe(10);
});

test('with zeros', () => {
  expect(sum(2, 0)).toBe(2);
  expect(sum(2)(0)).toBe(2);
  expect(sum(0, 3)).toBe(3);
  expect(sum(0)(3)(5)(0)(10)).toBe(18);
});
