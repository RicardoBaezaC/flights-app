import "./FlightWidget.css"
import { useState, useEffect } from "react";
import { FlightInfo } from "../FlightInfo/FlightInfo";
import { createRandomLetter } from "../../utils/CreateRandomLetter";
import { createRandomNumber } from "../../utils/CreateRandomNumber";
import { createRandomTime } from "../../utils/CreateRandomTime";


export const FlightWidget = () => {

    const [flights, setFlights] = useState([{
        time: "13:20",
        destination: "MEXICO",
        flight: "M 423",
        gate: "R 05",
        remarks: "ON TIME"
    },
    {
        time: "09:30",
        destination: "INDIA",
        flight: "I 074",
        gate: "A 32",
        remarks: "ON TIME"
    },
    {
        time: "01:00",
        destination: "LONDON",
        flight: "L 312",
        gate: "B 35",
        remarks: "DELAYED"
    },
    {
        time: "06:24",
        destination: "MEXICO",
        flight: "M 008",
        gate: "F 73",
        remarks: "CANCELLED"
    },
    {
        time: "23:40",
        destination: "TOKIO",
        flight: "T 201",
        gate: "A 54",
        remarks: "ON TIME"
    }])

    useEffect(() => {

        const cities = ["MEXICO", "NEW YORK", "TOKIO", "LONDON", "SINGAPORE", "INDIA"]
        const remarks = ["DELAYED", "ON TIME", "CANCELLED"]

        const createNewFlight = (cities, remarks) => {
            const time = createRandomTime()
            const city = cities[createRandomNumber(cities.length)]
            const flight = city.charAt(0) + " " + createRandomNumber() + createRandomNumber() + createRandomNumber()
            const gate = createRandomLetter() + " " + createRandomNumber() + createRandomNumber()
            const remark = remarks[createRandomNumber(remarks.length)]
            return {
                time: time,
                destination: city,
                flight: flight,
                gate: gate,
                remarks: remark
            }
        }

        const cardChange = setInterval(() => {
            setFlights(prevFlights => {
                let data = prevFlights.slice()
                data.shift()
                data.push(createNewFlight(cities, remarks))
                return data
            })
        }, 5000)

        return () => clearInterval(cardChange)

    }, []);

    return (
        <div className="widget-container">
            <header>DEPARTURES</header>
            <table>
                <thead>
                    <tr>
                        <th>TIME</th>
                        <th>DESTINATION</th>
                        <th>FLIGHT</th>
                        <th>GATE</th>
                        <th>REMARKS</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => <FlightInfo data={flight} key={new Date().getTime() + index} />)}
                </tbody>
            </table>
        </div>
    );
}