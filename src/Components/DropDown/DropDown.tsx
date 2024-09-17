import { useRef, useState } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { DropDownPropType } from "../../types";
import DropDownElement from "../DropDownElement/DropDownElement";
import "./DropDown.css";
import React from "react";

export default function DropDown({ dropDownLabel, elements, dropDownWidth, selectItem }: DropDownPropType) {

    const dropDownRef = useRef<HTMLLIElement | null>(null);
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const toggleDropDownList = () => {
        setIsShowing(prev => !prev);
    }

    useOutsideClick<HTMLLIElement>(dropDownRef, isShowing, toggleDropDownList);

    const style = { width: dropDownWidth, display: isShowing ? "inline-block" : "none" };

    const handleSelect = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        if (dropDownRef.current) {
            dropDownRef.current.lastChild?.childNodes.forEach((child: ChildNode, id: number) => {
                if ((child as Node) === (e.target as Node)) {
                    if (selectItem) {
                        selectItem(id);
                        return;
                    }
                }
            })
        }
    }

    return (
        <li className="dropDown" onClick={toggleDropDownList} ref={dropDownRef}>
            <div className="dropDownLabel">
                <h2>{dropDownLabel}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                </svg>
            </div>


            <ul className="dropDownList" style={style} onClick={(e) => handleSelect(e)}>
                {elements.map((element, idx) => <DropDownElement key={idx} element={element} />)}
            </ul>
        </li>

    );
}
