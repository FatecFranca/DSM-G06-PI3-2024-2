"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
    size: 1 | 2 | 3 | 4 | 5;
    icon: IconDefinition;
    onClick?: () => void;
}

export const Icon = ({ icon, size, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`active:bg-deep-blue-1000 cursor-pointer items-center inline-flex justify-center bg-deep-blue rounded-2xl aspect-[1/1] text-sand-400
                        
                    `}>
            <FontAwesomeIcon icon={icon} className={`${size === 1 && "p-6 size-24"} 
                                                    ${size === 2 &&  "p-6 size-20"} 
                                                    ${size === 3 &&  "p-5 size-16"} 
                                                    ${size === 4 &&  "p-4 size-14"} 
                                                    ${size === 5 &&  "p-3 size-10"} `} />
        </div>
    );
}
