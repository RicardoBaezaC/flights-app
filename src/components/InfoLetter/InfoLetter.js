import "./InfoLetter.css"
import { useEffect, useRef } from "react";

export const Letter = ({letter, index, random}) => {

    const lett = useRef(null)
    
    useEffect(() => {
        lett.current.classList.remove("flip")
        setTimeout(() => lett.current.classList.add("flip"), 100 * index)
    }, [index, random])

    return (
        <div className="letter" ref={lett}>
            {letter}
        </div>
    );
}