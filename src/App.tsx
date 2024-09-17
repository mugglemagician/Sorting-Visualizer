import { useCallback, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SortingVisualizer from './Components/SortingVisualizer/SortingVisualizer';
import { AlgorithmType } from './types';
import { algorithms } from './Components/Utils';


function App() {

  const [algorithm, setAlgorithm] = useState<AlgorithmType>({ id: -1, fn: ([]) => [], isMergeSort: false, name: "" });
  const [startAlgo, setStartAlgo] = useState<boolean>(false);
  const [arraySize, setArraySize] = useState<number>(100);
  const [generateNewArray, setGenerateNewArray] = useState<boolean>(false);

  const updateAlgorithm = useCallback((id: number) => {
    setAlgorithm(algorithms[id]);
  }, []);

  const toggleStartAlgo = useCallback(() => {
    setStartAlgo(prev => !prev);
  }, []);

  const updateArraySize = useCallback((newSize: number) => {
    setArraySize(newSize);
  }, []);

  const toggleGenerateNewArray = useCallback(() => {
    setGenerateNewArray(prev => !prev);
  }, []);

  return (
    <>
      <Navbar algoId={algorithm.id} updateAlgo={updateAlgorithm} startAlgo={startAlgo} toggleStartAlgo={toggleStartAlgo} updateArraySize={updateArraySize} toggleGenerateNewArray={toggleGenerateNewArray} />
      <SortingVisualizer algo={algorithm} startAlgo={startAlgo} toggleStartAlgo={toggleStartAlgo} arraySize={arraySize} generateNewArray={generateNewArray} toggleGenerateNewArray={toggleGenerateNewArray} />
    </>
  )
}

export default App
