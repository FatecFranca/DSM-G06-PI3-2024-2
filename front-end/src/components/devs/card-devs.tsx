"use client"

import Image from "next/image";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
    imagem: string;
    nome: string;
    linkedin: string;
}


export const CardDev = ({ imagem, nome, linkedin }: Props) => {
    return (
        <div>
            <div className="flex flex-col items-center gap-10 bg-sand-400 w-[290px] rounded-2xl text-deep-blue text-2xl font-semibold p-6 shadow-lg">
                <Image
                    src={imagem}
                    alt={nome}
                    className="rounded-full -mt-10 shadow-lg"
                    quality={100}
                    width={180}
                    height={180}
                >
                </Image>
                <h3>{nome}</h3>
                <Link href={linkedin} target="blank">
                    <FontAwesomeIcon className="size-28" icon={faLinkedin}></FontAwesomeIcon>
                </Link>
            </div>
        </div>
    )
}