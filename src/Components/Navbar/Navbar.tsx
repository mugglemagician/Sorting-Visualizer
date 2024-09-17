import { useEffect, useState } from "react";
import { NavbarPropType } from "../../types";
import "./Navbar.css";
import DropDown from "../DropDown/DropDown";
import { algorithms } from "../Utils";

export default function Navbar({ algoId, updateAlgo, startAlgo, toggleStartAlgo, updateArraySize, toggleGenerateNewArray }: NavbarPropType) {

    const [buttonText, setButtonText] = useState("Visualize");
    const [rangeValue, setRangeValue] = useState<number>(100);

    useEffect(() => {
        if (!startAlgo && algoId !== -1) {
            setButtonText(`Visualize ${algorithms[algoId].name}`);
        }
    }, [startAlgo])

    const handleClick = () => {
        if (startAlgo) return;
        if (algoId === -1) {
            setButtonText("Pick Algorithm !");
        }
        else {
            setButtonText(`Visualizing ${algorithms[algoId].name}`);
            toggleStartAlgo();
        }
    }

    const handleSelect = (id: number) => {
        if (startAlgo) return;
        updateAlgo(id);
        setButtonText(`Visualize ${algorithms[id].name}`);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (startAlgo) return;
        setRangeValue(parseInt(e.target.value));
        updateArraySize(parseInt(e.target.value));
    }

    const handleGenerate = () => {
        if (startAlgo) return;
        toggleGenerateNewArray();
    }

    return (
        <nav>
            <ul className="navbar">

                <li className="brand">
                    <h1>
                        Sorting Visualizer
                    </h1>
                </li>

                <DropDown
                    dropDownLabel="Algorithms"
                    dropDownWidth="250px"
                    elements={["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort", "Heap Sort"]}
                    selectItem={handleSelect} />


                <li className="array-size">
                    <label htmlFor="arraySize">array size and speed</label>
                    <input type="range" min={5} max={400} id="arraySize" value={rangeValue} onChange={handleChange} />
                </li>

                <li>
                    <button className="button" onClick={handleGenerate}>Generate New Array</button>
                </li>

                <li>
                    <button className="button" onClick={handleClick}>{buttonText}</button>
                </li>

            </ul >
        </nav >
    )
}
