import { ChangeEvent, useState, useEffect } from "react";

type Props = {
    onDateChange: (date: string) => void;
    defaultValue?: string;
};

export const Data = ({ onDateChange, defaultValue }: Props) => {
    const [selectedDate, setSelectedDate] = useState(() => {
        return defaultValue 
            ? new Date(defaultValue).toISOString().split('T')[0]
            : "";
    });

    useEffect(() => {
        if (defaultValue) {
            const formattedDate = new Date(defaultValue).toISOString().split('T')[0];
            setSelectedDate(formattedDate);
            // Enviar o valor padrão ao `onDateChange` ao menos uma vez
            onDateChange(formattedDate);
        }
    }, [defaultValue]);

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setSelectedDate(date);
        onDateChange(date);
    };

    return (
        <input 
            className="px-4 font-semibold h-14 rounded-full text-sm text-sand-1500 w-full bg-sand-300"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
        />
    );
};
