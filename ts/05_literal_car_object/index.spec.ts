import { Car } from './index';

it('piping methods', () => {
    expect(new Car().accelerate(50).decelerate(10).speed).toBe(40);
    expect(new Car().accelerate(10).accelerate(30).fullBreak().speed).toBe(0);
    expect(new Car().accelerate(10).decelerate(30).speed).toBe(0);
});