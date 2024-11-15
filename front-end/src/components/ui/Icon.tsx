"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
    size: 1 | 2 | 3 | 4 | 5;
    icon: IconDefinition;
    onClick?: () => {};
}


export const Icon = ({ icon, size, onClick }: Props) => {
    
    return (
        <div onClick={onClick}
            className={` active:bg-deep-blue-1000 cursor-pointer items-center inline-flex justify-center bg-deep-blue rounded-2xl text-white
                        ${size === 1 && "p-7 text-7xl"}
                        ${size === 2 && "p-6 text-6xl"}
                        ${size === 3 && "p-5 text-5xl"}
                        ${size === 4 && "p-4 text-4xl"}
                        ${size === 5 && "p-3 text-3xl"}`} >
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}