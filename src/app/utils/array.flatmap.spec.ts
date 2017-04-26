import './array.flatmap';

describe('Array', () => {

    it('#flatMap flattens array', () => {
        const start = [1, 2, 3, 4, 5];
        const actual = start.flatMap((value) => {
            return [value, value * 2];
        });

        expect(actual).toEqual([1, 2, 2, 4, 3, 6, 4, 8, 5, 10]);
    });
});
