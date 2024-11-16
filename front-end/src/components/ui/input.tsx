"use client"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

type Props = {
    placeholder: string;
    icon?: IconDefinition;
    password?: boolean;
    value?: string;
    onChange?: (newValue: string) => void;
}

export const Input = ({ placeholder, icon, password, value, onChange }: Props) => {
    const [showPassowrd, setShowPassword] = useState(false);
    return (
        <div
            className="w-full flex items-center p-3 has-[:focus]:border-sand-1400 bg-sand-300 text-sand-1400 font-semibold text-sm
                        rounded-full h-14 border-2 border-sand-300">
            {
                icon &&
                <FontAwesomeIcon className="size-5" icon={icon} />
            }

            <input
                className="placeholder-sand-900 flex-1 outline-none h-full px-4 bg-transparent"
                type={password && !showPassowrd ? 'password' : 'text'}
                onChange={e => onChange && onChange(e.target.value)}
                placeholder={placeholder}
                value={value}
            />
            {
                password &&
                <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassowrd)}
                    icon={showPassowrd ? faEye : faEyeSlash}
                    className="cursor-pointer mr-3 size-5"
                />
            }
        </div>
    )
}