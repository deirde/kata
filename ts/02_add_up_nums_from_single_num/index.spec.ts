import { addUp } from './index';

it('with zeros', () => {
  expect(addUp(4)).toBe(10);
  expect(addUp(13)).toBe(91);
  expect(addUp(600)).toBe(180300);
});
