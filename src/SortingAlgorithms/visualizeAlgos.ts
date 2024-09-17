import { bubbleSort } from "./BubbleSort";
import { heapSort } from "./HeapSort";
import { insertionSort } from "./InsertionSort";
import { mergeSort } from "./MergeSort";
import { quickSort } from "./QuickSort";

export function visualizeMergeSort(array: number[]): number[][] {
    const animations = mergeSort(array);
    return animations;
}

export function visualizeBubbleSort(array: number[]): number[][] {
    const animations = bubbleSort(array);
    return animations;
}

export function visualizeInsertionSort(array: number[]): number[][] {
    const animations = insertionSort(array);
    return animations;
}

export function visualizeHeapSort(array: number[]): number[][] {
    const animations = heapSort(array);
    return animations;
}

export function visualizeQuickSort(array: number[]): number[][] {
    const animations = quickSort(array);
    return animations;
}