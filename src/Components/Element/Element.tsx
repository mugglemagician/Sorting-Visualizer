import React from "react";
import { ElementPropType } from "../../types";
import "./Element.css";

function Element({ value, comparing }: ElementPropType) {

    const extraClass = comparing ? 'comparing' : '';

    return (
        <div className={`element ${extraClass}`} style={{ height: `${value}px` }}></div>
    )
}

export default React.memo(Element);
