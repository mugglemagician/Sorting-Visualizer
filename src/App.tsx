import { useCallback, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SortingVisualizer from './Components/SortingVisualizer/SortingVisualizer';
import { AlgorithmType } from './types';
import { algorithms } from './Components/Utils';


function App() {

  const [algorithm, setAlgorithm] = useState<AlgorithmType>({ id: -1, fn: ([]) => [] });
  const [startAlgo, setStartAlgo] = useState<boolean>(false);

  const updateAlgorithm = useCallback((id: number) => {
    setAlgorithm(algorithms[id]);
  }, []);

  const toggleStartAlgo = useCallback(() => {
    setStartAlgo(prev => !prev);
  }, []);

  return (
    <>
      <Navbar algoId={algorithm.id} updateAlgo={updateAlgorithm} startAlgo={startAlgo} toggleStartAlgo={toggleStartAlgo} />
      <SortingVisualizer algo={algorithm} startAlgo={startAlgo} toggleStartAlgo={toggleStartAlgo} />
    </>
  )
}

export default App
