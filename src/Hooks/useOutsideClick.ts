import { useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(ref: React.RefObject<T | null>, isShowing: boolean, callback: () => void) {
    useEffect(() => {

        function handleClickOutside(event: globalThis.MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (isShowing) {
                    callback();
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isShowing, callback]);
}

export default useOutsideClick;