export function insertionSort(array: number[]): number[][] {
    const animations: number[][] = [];
    const n = array.length;

    for (let curr = 1; curr < n; curr++) {
        let prev = curr - 1;
        while (prev >= 0 && array[prev] >= array[curr]) {

            animations.push([curr, prev]);
            animations.push([curr, prev]);

            if (array[prev] === array[curr]) break;
            animations.push([curr, prev]);
            const temp = array[prev];
            array[prev] = array[curr];
            array[curr] = temp;
            curr--; prev--;
        }
    }

    return animations;
}