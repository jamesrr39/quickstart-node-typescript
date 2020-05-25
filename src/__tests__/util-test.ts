import { isEven } from '../util';

test('isEven', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
});
