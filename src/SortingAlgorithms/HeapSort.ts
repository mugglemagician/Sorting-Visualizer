const swap = (i: number, j: number, array: number[]): void => {
    array[i] ^= array[j];
    array[j] = array[i] ^ array[j];
    array[i] = array[i] ^ array[j];
}

const sink = (parent: number, lastIdx: number, array: number[], animations: number[][]): void => {

    while (true) {
        let leftChild = 2 * parent + 1;
        let rightChild = 2 * parent + 2;
        let largest = leftChild;

        if (rightChild < lastIdx && array[rightChild] > array[leftChild]) largest = rightChild;
        if (largest >= lastIdx || array[largest] < array[parent]) break;
        animations.push([parent, largest]);
        animations.push([parent, largest]);
        animations.push([parent, largest]);
        swap(parent, largest, array);
        parent = largest;
    }

}

const heapify = (array: number[], animations: number[][]): void => {
    const n = array.length;
    let curr = Math.floor(n / 2) - 1;

    while (curr >= 0) {
        sink(curr, n, array, animations);
        curr--;
    }
}

export function heapSort(array: number[]): number[][] {
    const animations: number[][] = [];

    heapify(array, animations);

    let lastIdx = array.length - 1;

    while (lastIdx > 0) {
        animations.push([0, lastIdx]);
        animations.push([0, lastIdx]);
        animations.push([0, lastIdx]);

        swap(0, lastIdx, array);
        sink(0, lastIdx, array, animations);

        lastIdx--;
    }

    return animations;
}