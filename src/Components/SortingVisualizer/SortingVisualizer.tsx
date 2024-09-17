import "./SortingVisualizer.css";
import SortSpace from "../SortSpace/SortSpace";
import { SortingVisualizerPropType } from "../../types";

export default function SortingVisualizer({ algo, startAlgo, toggleStartAlgo }: SortingVisualizerPropType) {

    return (
        <div className="sortingVisualizer">
            <SortSpace algo={algo} startAlgo={startAlgo} toggleStartAlgo={toggleStartAlgo} />
        </div>
    )
}
