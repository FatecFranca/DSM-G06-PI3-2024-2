"use client";

import { useState, useEffect, useRef } from "react";

type Props = {
    placeholder: string;
    onChange?: (newValue: string) => void;
    defaultValue?: string;
};

export const InputGrande = ({ onChange, placeholder, defaultValue = "" }: Props) => {
    const [value, setValue] = useState<string>(defaultValue || "");
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setValue(defaultValue || "");
    }, [defaultValue]);

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        const text = e.currentTarget.textContent || "";
        setValue(text);
        if (onChange) {
            onChange(text);
        }
    };

    useEffect(() => {
        const range = document.createRange();
        const selection = window.getSelection();
        if (divRef.current && selection) {
            range.setStart(divRef.current.childNodes[0] || divRef.current, value.length);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }, [value]);

    return (
        <div className="w-full flex gap-6 px-6 py-6 bg-sand-300 rounded-lg">
            <div className="flex-1 w-full">
                <div
                    ref={divRef}
                    className="w-full text-sm min-h-14 outline-none font-semibold text-sand-150 empty:before:text-sand-900
                            empty:before:content-[attr(data-placeholder)] break-words whitespace-normal overflow-hidden"
                    contentEditable
                    role="textbox"
                    data-placeholder={placeholder}
                    onInput={handleInput}
                    suppressContentEditableWarning={true}
                >
                    {value}
                </div>
            </div>
        </div>
    );
};
