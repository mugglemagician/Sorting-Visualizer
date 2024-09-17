import { useEffect, useRef, useState } from "react";
import "./SortSpace.css";
import Element from "../Element/Element";
import { SortSpacePropType } from "../../types";

const getRandomValue = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max + 1));
}

const generateArray = () => {
    const array: number[] = [];
    for (let i = 0; i < 200; i++) {
        array.push(getRandomValue(5, 700));
    }
    return array;
}

export default function SortSpace({ algo, startAlgo, toggleStartAlgo }: SortSpacePropType) {
    const [array, setArray] = useState<number[]>(() => generateArray());
    const comparingIdx1 = useRef<number>(-1);
    const comparingIdx2 = useRef<number>(-1);

    useEffect(() => {
        if (startAlgo) {
            const animations = algo.fn([...array]);
            for (let i = 0; i < animations.length; i++) {
                setTimeout(() => {
                    setArray(prevArr => {
                        const idx01 = animations[i][0];
                        const idx02 = animations[i][1];
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
                            let temp = newArr[idx01];
                            newArr[idx01] = newArr[idx02]
                            newArr[idx02] = temp;
                        }

                        return newArr;
                    });
                }, i * 10);
            }

            setTimeout(() => {
                toggleStartAlgo();
            }, animations.length * 10 + 100);
        }
    }, [startAlgo]);

    return (
        <div className="sortSpace">
            {array.map((element, idx) => <Element key={idx} value={element} comparing={idx === comparingIdx1.current || idx === comparingIdx2.current} />)}
        </div>
    )
}
