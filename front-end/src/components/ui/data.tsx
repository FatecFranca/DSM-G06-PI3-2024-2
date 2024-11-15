import { ChangeEvent, useState } from "react";


export const Data = () => {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };


    return (
        <div className="flex flex-col text-sand-1500 w-full ">
            <input className="px-4 font-semibold h-14 rounded-full text-sm" type="date" value={selectedDate}
                onChange={handleDateChange}></input>
        </div>
    )
}