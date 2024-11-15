"use client"
import Link from "next/link"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    icon?: IconDefinition;
    href?: string;
    label: string;
}

export const NavItem = ({ icon, href, label }: Props) => {
    return (
        <Link className='flex justify-center items-center gap-3 text-white font-medium hover:underline'href={href ? href : '/'}>
            {icon &&
                <FontAwesomeIcon icon={icon} />
            }
            {label}
        </Link>
    )
}