"use client"

import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button } from "../ui/button";
import { Animal } from "@/types/animal";
import { formatDate } from "@/utils/formatDate";
import { converterData } from "@/utils/converterData";

type Props = {
    animal: Animal,
}

export const CardAnimal = ({ animal }: Props) => {
    // Define uma imagem padrão para o caso de não ter imagens do animal
    const defaultImage = "https://i.pinimg.com/originals/da/07/a8/da07a810a210e37988780cbfb691ab9c.jpg"; // Substitua com o caminho correto da sua imagem de fallback

    return (
        <div className="active:brightness-90 shadow-md flex flex-col items-center justify-center w-[270px] h-[350px] bg-sand-300 rounded-2xl text-deep-blue-1000 font-semibold overflow-hidden">
            <Link href={`/animal/${animal.id}`} className="w-full h-full">
                {/* Verifica se animal.imagens e animal.imagens[0] existem, caso contrário, exibe a imagem padrão */}
                <img
                    src={animal.imagens && animal.imagens.length > 0 ? animal.imagens[0].src : defaultImage}
                    alt={animal.nome}
                    className="w-full h-1/2 object-cover rounded-t-2xl"
                />
                <div className="w-full p-4 h-1/2 flex flex-col gap-2 justify-around">
                    <div className="flex justify-between items-center -mt-1">
                        {
                            animal.data_nascimento &&
                            <div className='font-light '>{formatDate(converterData(animal.data_nascimento))}</div>
                        }
                        {
                            animal.idade_anos && !animal.data_nascimento &&
                            <div className='font-light '>{animal.idade_anos} anos</div>
                        }
                        {
                            !animal.idade_anos && animal.idade_meses && !animal.data_nascimento &&
                            <div className='font-light '>{animal.idade_meses} meses</div>
                        }
                        <FontAwesomeIcon
                            icon={animal.sexo === 'F' ? faVenus : faMars}
                            className={animal.sexo === 'F' ? 'text-rose-500' : 'text-blue-700'}
                        />
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-xl">{animal.nome}</div>
                        <div className="font-light">{animal.raca?.nome}</div>
                    </div>
                    <div className="flex justify-center">
                        <Button label="Quero conhecer" size={2} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export const CardAnimalSkeleton = () => {
    return (
        <div className="animate-pulse shadow-md w-[270px] h-[350px] bg-sand-500 rounded-2xl"></div>
    );
};