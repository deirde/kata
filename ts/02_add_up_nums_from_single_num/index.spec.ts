import { addUpNumsFromSingleNum } from './index';

it('with zeros', () => {
  expect(addUpNumsFromSingleNum(4)).toBe(10);
  expect(addUpNumsFromSingleNum(13)).toBe(91);
  expect(addUpNumsFromSingleNum(600)).toBe(180300);
});
