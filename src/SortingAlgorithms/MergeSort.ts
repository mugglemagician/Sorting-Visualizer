function merge(left: number, middle: number, right: number, array: number[], animations: number[][]) {
    let i = left;
    let j = middle + 1;
    let k = left;
    const temp: number[] = [];

    while (i <= middle && j <= right) {
        animations.push([i, j]);
        animations.push([i, j]);

        // first push to indicate the elements we are comparing
        // second push to stop comparing
        // third push to set the real index in the org array where the small element of the two will get inserted in a sorted segment

        if (array[i] <= array[j]) {
            animations.push([k++, array[i]]);
            temp.push(array[i++]);
        }
        else {
            animations.push([k++, array[j]]);
            temp.push(array[j++]);
        }
    }

    while (i <= middle) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k++, array[i]]);
        temp.push(array[i++]);
    }

    while (j <= right) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k++, array[j]]);
        temp.push(array[j++]);
    }

    for (let k = 0; k < temp.length; k++) {
        array[left++] = temp[k];
    }
}

function divide(left: number, right: number, array: number[], animations: number[][]) {
    if (left >= right) return;
    let middle = Math.floor((left + right) / 2);
    divide(left, middle, array, animations);
    divide(middle + 1, right, array, animations);
    merge(left, middle, right, array, animations);
}

export function mergeSort(array: number[]) {
    const animations: number[][] = [];
    divide(0, array.length - 1, array, animations);
    return animations;
}