import {difference} from "./set-utils";

describe('test set-utils module', () => {
  it ('should calculate difference between two sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);

    let result = difference(a, b);
    expect(result).toEqual(new Set([1]));

    result = difference(b, a);
    expect(result).toEqual(new Set([4]));
  });
});
