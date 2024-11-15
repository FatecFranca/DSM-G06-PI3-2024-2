"use client"

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

type Props = {
    option: String;
    onClick?: () => void;
    checked: boolean;
}


export const CheckBox = ({ option, onClick, checked }: Props) => {
    return (
        <div className="flex flex-row gap-2 items-center justify-center text-base text-sand-1500 font-semibold">
            <div role="checkbox"
                className="flex items-center justify-center aspect-square size-8 cursor-pointer bg-sand-300 rounded-lg"
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