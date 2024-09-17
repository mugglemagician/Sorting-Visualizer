export function bubbleSort(array: number[]): number[][] {
    const animations: number[][] = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animations.push([j, j + 1]);
            }
            else {
                animations.push([j, j]);
            }
        }
    }

    return animations;
}