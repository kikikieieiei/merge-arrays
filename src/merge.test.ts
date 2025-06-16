import { merge } from './merge';

describe('merge function', () => {
    test('merges three empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
    });

    test('merges arrays when some arrays are empty', () => {
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
        expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
        expect(merge([], [], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('merges three sorted arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [6, 4, 2];
        const collection_3 = [0, 7, 9];

        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 9];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });

    test('merges arrays with duplicate values', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [5, 3, 1];
        const collection_3 = [2, 3, 4];

        const expected = [1, 1, 2, 3, 3, 3, 4, 5, 5];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });
});