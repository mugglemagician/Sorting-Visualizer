import { visualizeBubbleSort, visualizeHeapSort, visualizeInsertionSort, visualizeMergeSort, visualizeQuickSort } from "../SortingAlgorithms/visualizeAlgos";
import { AlgorithmType } from "../types";

export const algorithms: AlgorithmType[] = [
    { id: 0, fn: visualizeMergeSort, isMergeSort: true, name: "MS" },
    { id: 1, fn: visualizeInsertionSort, isMergeSort: false, name: "IS" },
    { id: 2, fn: visualizeQuickSort, isMergeSort: false, name: "QS" },
    { id: 3, fn: visualizeBubbleSort, isMergeSort: false, name: "BS" },
    { id: 4, fn: visualizeHeapSort, isMergeSort: false, name: "HS" }
];