/**
 * Merges three arrays into a single array
 */
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // Combine all arrays
    const allItems: number[] = [];

    // Add items from all collections
    for (let i = 0; i < collection_1.length; i++) {
        allItems.push(collection_1[i]);
    }
    for (let i = 0; i < collection_2.length; i++) {
        allItems.push(collection_2[i]);
    }
    for (let i = 0; i < collection_3.length; i++) {
        allItems.push(collection_3[i]);
    }

    // Bubble sort
    for (let i = 0; i < allItems.length; i++) {
        for (let j = 0; j < allItems.length - i - 1; j++) {
            if (allItems[j] > allItems[j + 1]) {
                const temp = allItems[j];
                allItems[j] = allItems[j + 1];
                allItems[j + 1] = temp;
            }
        }
    }

    return allItems;
}