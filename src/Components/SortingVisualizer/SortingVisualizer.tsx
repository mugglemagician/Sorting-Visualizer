import "./SortingVisualizer.css";
import SortSpace from "../SortSpace/SortSpace";
import { SortingVisualizerPropType } from "../../types";

export default function SortingVisualizer({ algo, startAlgo, toggleStartAlgo, arraySize, generateNewArray, toggleGenerateNewArray }: SortingVisualizerPropType) {

    return (
        <div className="sortingVisualizer">
            <SortSpace algo={algo} startAlgo={startAlgo} toggleStartAlgo={toggleStartAlgo} arraySize={arraySize} generateNewArray={generateNewArray} toggleGenerateNewArray={toggleGenerateNewArray} />
        </div>
    )
}
