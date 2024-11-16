import { ChangeEvent, useState } from "react";

type Props = {
    onDateChange: (date: string) => void;
}

export const Data = ({ onDateChange }: Props) => {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setSelectedDate(date);
        onDateChange(date);
    };


    return (
        <input className="px-4 font-semibold h-14 rounded-full text-sm text-sand-1500 w-full   bg-sand-300 "
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
        />
    )
}