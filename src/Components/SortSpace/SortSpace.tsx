import { useEffect, useRef, useState } from "react";
import "./SortSpace.css";
import Element from "../Element/Element";
import { SortSpacePropType } from "../../types";

const getRandomValue = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max + 1));
}

const generateArray = (arraySize: number) => {
    const array: number[] = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(getRandomValue(20, 700));
    }
    return array;
}

export default function SortSpace({ algo, startAlgo, toggleStartAlgo, arraySize, generateNewArray, toggleGenerateNewArray }: SortSpacePropType) {
    const [array, setArray] = useState<number[]>(() => generateArray(arraySize));
    const comparingIdx1 = useRef<number>(-1);
    const comparingIdx2 = useRef<number>(-1);
    const prevArraySize = useRef<number>(arraySize);

    useEffect(() => {

        if (generateNewArray) {
            setArray(generateArray(arraySize));
            toggleGenerateNewArray();
        }

        if (prevArraySize.current !== arraySize) {
            prevArraySize.current = arraySize;
            setArray(generateArray(arraySize));
        }

        if (startAlgo) {
            const animations = algo.fn([...array]);
            for (let i = 0; i < animations.length; i++) {
                setTimeout(() => {
                    setArray(prevArr => {
                        const idx01 = animations[i][0];
                        const idx02 = animations[i][1];
                        if (idx01 === -1 && idx02 === -1) return prevArr;
                        const newArr = [...prevArr];
                        if (i % 3 == 0) {
                            comparingIdx1.current = idx01;
                            comparingIdx2.current = idx02;
                        }
                        else if (i % 3 === 1) {
                            comparingIdx1.current = -1;
                            comparingIdx2.current = -1;
                        }
                        else {
                            if (!algo.isMergeSort) {
                                let temp = newArr[idx01];
                                newArr[idx01] = newArr[idx02]
                                newArr[idx02] = temp;
                            }
                            else {
                                newArr[idx01] = idx02;
                            }
                        }

                        return newArr;
                    });
                }, i * Math.floor(1000 / arraySize));
            }

            setTimeout(() => {
                toggleStartAlgo();
            }, animations.length * Math.floor(1000 / arraySize) + 100);
        }

    }, [startAlgo, arraySize, generateNewArray]);

    return (
        <div className="sortSpace">
            {array.map((element, idx) => <Element key={idx} value={element} comparing={idx === comparingIdx1.current || idx === comparingIdx2.current} />)}
        </div>
    )
}
