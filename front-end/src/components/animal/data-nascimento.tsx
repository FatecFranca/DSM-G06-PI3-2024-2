import { ChangeEvent, useState } from "react";

export const DataNascimento = () => {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };


    return (
        <div className="flex flex-col text-2xl text-sand-1500 ">
            <label className="font-semibold">Data de Nascimento: </label>
            <input className="font-medium p-2" type="date" value={selectedDate}
                onChange={handleDateChange}></input>
        </div>
    )
}