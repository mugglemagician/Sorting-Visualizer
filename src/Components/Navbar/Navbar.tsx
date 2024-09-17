import { useEffect, useState } from "react";
import { NavbarPropType } from "../../types";
import "./Navbar.css";

export default function Navbar({ algoId, updateAlgo, startAlgo, toggleStartAlgo }: NavbarPropType) {

    const [buttonText, setButtonText] = useState("Visualize");

    useEffect(() => {
        if (!startAlgo) {
            setButtonText("Visualize");
        }
    }, [startAlgo])

    const handleClick = () => {
        if (startAlgo) return;
        if (algoId === -1) {
            setButtonText("Pick Algorithm !");
        }
        else {
            setButtonText(`Visualizing`);
            toggleStartAlgo();
        }
    }

    const handleSelect = (id: number) => {
        if (startAlgo) return;
        updateAlgo(id);
        setButtonText("Visualize");
    }

    return (
        <nav>
            <ul className="navbar">

                <li className="brand">
                    <h1>
                        Sorting Visualizer
                    </h1>
                </li>

                <li className="nav-item" onClick={() => handleSelect(0)}>
                    <h3>
                        Merge Sort
                    </h3>
                </li>

                <li className="nav-item" onClick={() => handleSelect(1)}>
                    <h3>
                        Bubble Sort
                    </h3>
                </li>

                <li className="nav-item" onClick={() => handleSelect(2)}>
                    <h3>
                        Insertion Sort
                    </h3>
                </li>

                <li className="nav-item" onClick={() => handleSelect(3)}>
                    <h3>
                        Heap Sort
                    </h3>
                </li>

                <li className="nav-item" onClick={() => handleSelect(4)}>
                    <h3>
                        Quick Sort
                    </h3>
                </li>

                <li>
                    <button className="button" onClick={handleClick}>{buttonText}</button>
                </li>

            </ul >
        </nav >
    )
}
