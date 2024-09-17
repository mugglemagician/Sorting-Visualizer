export type ElementPropType = {
    value: number,
    comparing: boolean
}

export type AlgorithmType = {
    id: number,
    fn: (array: number[]) => number[][],
    isMergeSort: boolean,
    name: string
}

export type NavbarPropType = {
    algoId: number,
    updateAlgo: (id: number) => void,
    startAlgo: boolean,
    toggleStartAlgo: () => void,
    updateArraySize: (newSize: number) => void,
    toggleGenerateNewArray: () => void
}

export type SortingVisualizerPropType = {
    algo: AlgorithmType,
    startAlgo: boolean,
    toggleStartAlgo: () => void,
    arraySize: number,
    generateNewArray: boolean,
    toggleGenerateNewArray: () => void
};

export type SortSpacePropType = {
    algo: AlgorithmType,
    startAlgo: boolean,
    toggleStartAlgo: () => void,
    arraySize: number,
    generateNewArray: boolean,
    toggleGenerateNewArray: () => void
}

export type DropDownPropType = {
    dropDownLabel: string,
    dropDownWidth: string,
    elements: string[],
    selectItem: ((id: number) => void) | undefined
}

export type DropDownElementPropType = {
    element: string
}
