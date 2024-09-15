import { ElementPropType } from "../../types";
import "./Element.css";

export default function Element({ value }: ElementPropType) {
    return (
        <div className="element" style={{ height: `${value}px` }}></div>
    )
}
