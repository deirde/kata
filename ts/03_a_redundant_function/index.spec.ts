import { redundant } from './index';

it('redundant', () => {
  expect(redundant('apple')()).toBe('apple');
  expect(redundant('pear')()).toBe('pear');
  expect(redundant('')()).toBe('');
});
