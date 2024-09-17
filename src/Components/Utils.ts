import { visualizeBubbleSort, visualizeHeapSort, visualizeInsertionSort, visualizeMergeSort, visualizeQuickSort } from "../SortingAlgorithms/visualizeAlgos";
import { AlgorithmType } from "../types";

export const algorithms: AlgorithmType[] = [
    { id: 0, fn: visualizeMergeSort },
    { id: 1, fn: visualizeBubbleSort },
    { id: 2, fn: visualizeInsertionSort },
    { id: 3, fn: visualizeHeapSort },
    { id: 4, fn: visualizeQuickSort }
];