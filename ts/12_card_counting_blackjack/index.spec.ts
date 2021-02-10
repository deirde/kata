import { count } from './index';

it('count total points', () => {
    expect(count(1, 2, 5)).toBe(40);
});