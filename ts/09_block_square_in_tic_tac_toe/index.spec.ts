import { blockPlayer } from './index';

test('blockPlayer', () => {
  expect(blockPlayer(0, 3)).toBe(6);
  expect(blockPlayer(0, 4)).toBe(8);
  expect(blockPlayer(3, 5)).toBe(4);
});