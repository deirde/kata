import { canNest } from './index';
import {addUp} from "../02_add_up_nums_from_single_num";

it('canNest', () => {
  expect(canNest([1, 2, 3, 4], [0, 6])).toBe(true);
  expect(canNest([3, 1], [4, 0])).toBe(true);
  expect(canNest([9, 9, 8], [8, 9])).toBe(false);
  expect(canNest([1, 2, 3, 4], [2, 3])).toBe(false);
});
