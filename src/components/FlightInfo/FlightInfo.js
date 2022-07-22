import "./FlightInfo.css"
import { Letter } from "../InfoLetter/InfoLetter";

export const FlightInfo = ({data}) => {

    const {time, destination, flight, gate, remarks} = data

    const convertStringToArray = (string) => {
        return Array.from(string).map((letter, index) => <Letter letter={letter} index={index} random={Math.floor(Math.random()*5000)} key={new Date().getTime()+index}/>)
    }

    return (
        <tr className="flight">
            <td><div className="header-text">TIME</div><div className="word">{convertStringToArray(time)}</div></td>
            <td><div className="header-text">DESTINATION</div><div className="word">{convertStringToArray(destination)}</div></td>
            <td><div className="header-text">FLIGHT</div><div className="word">{convertStringToArray(flight)}</div></td>
            <td><div className="header-text">GATE</div><div className="word">{convertStringToArray(gate)}</div></td>
            <td><div className="header-text">REMARKS</div><div className="word">{convertStringToArray(remarks)}</div></td>
        </tr>
    );
}