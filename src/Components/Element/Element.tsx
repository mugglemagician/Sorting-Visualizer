import { ElementPropType } from "../../types";
import "./Element.css";

export default function Element({ value, comparing }: ElementPropType) {

    const extraClass = comparing ? 'comparing' : '';

    return (
        <div className={`element ${extraClass}`} style={{ height: `${value}px` }}></div>
    )
}
