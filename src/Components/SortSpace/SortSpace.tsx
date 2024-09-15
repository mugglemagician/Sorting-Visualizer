import { useState } from "react";
import "./SortSpace.css";
import Element from "../Element/Element";

const getRandomValue = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max + 1));
}

const generateArray = () => {
    const array: number[] = [];
    for (let i = 0; i < 335; i++) {
        array.push(getRandomValue(5, 700));
    }
    return array;
}

export default function SortSpace() {

    const [array, setArray] = useState<number[]>(() => generateArray());

    return (
        <div className="sortSpace">
            {array.map((element, idx) => <Element key={idx} value={element} />)}
        </div>
    )
}
