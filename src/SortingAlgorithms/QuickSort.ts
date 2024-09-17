const swap = (i: number, j: number, array: number[]): void => {
    [array[i], array[j]] = [array[j], array[i]];
}

const partition = (left: number, right: number, array: number[], animations: number[][]): number => {
    let pivot = array[left];
    let i = left;
    let j = right;

    while (i < j) {
        while (i < j && array[i] <= pivot) {
            animations.push([left, i]);
            animations.push([left, i]);
            animations.push([-1, -1]);
            i++;
        }
        while (j >= i && array[j] > pivot) {
            animations.push([left, j]);
            animations.push([left, j]);
            animations.push([-1, -1]);
            j--;
        }
        if (i < j) {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, j]);
            swap(i, j, array);
        }
    }

    // Place the pivot in its correct place
    swap(left, j, array);
    animations.push([left, j]);
    animations.push([left, j]);
    animations.push([left, j]);
    return j;
}

const divide = (left: number, right: number, array: number[], animations: number[][]): void => {
    if (left >= right) return;
    const pIdx = partition(left, right, array, animations);
    divide(left, pIdx - 1, array, animations);
    divide(pIdx + 1, right, array, animations);
}

export function quickSort(array: number[]): number[][] {
    const animations: number[][] = [];
    divide(0, array.length - 1, array, animations);
    console.log(array); // Final sorted array
    return animations; // Return animations for visualization
}
