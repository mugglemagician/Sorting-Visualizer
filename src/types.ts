export type ElementPropType = {
    value: number,
    comparing: boolean
}

export type AlgorithmType = {
    id: number,
    fn: (array: number[]) => number[][]
}

export type NavbarPropType = {
    algoId: number,
    updateAlgo: (id: number) => void,
    startAlgo: boolean,
    toggleStartAlgo: () => void
}

export type SortingVisualizerPropType = {
    algo: AlgorithmType,
    startAlgo: boolean,
    toggleStartAlgo: () => void
};

export type SortSpacePropType = {
    algo: AlgorithmType,
    startAlgo: boolean,
    toggleStartAlgo: () => void
}