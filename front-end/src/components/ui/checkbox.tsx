"use client"

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

type Props = {
    option: String;
    onClick: () => void;
    checked: boolean;
}


export const CheckBox = ({ option, onClick, checked }: Props) => {
    return (
        <div className="flex flex-row gap-2 items-center justify-center text-2xl text-sand-1500 font-medium">
            <div role="checkbox"
                className="flex items-center justify-center aspect-square size-10 cursor-pointer bg-white rounded-xl"
                onClick={onClick}
                aria-checked={checked}
            >

                {checked &&
                    <FontAwesomeIcon icon={faCheck} />
                }
            </div>
            <p>{option}</p>
        </div >
    )
}