"use client"

import { Animal } from "@/types/animal"
import { Imagem } from "@/types/imagem"
import { useState } from "react"

type Props = {
    animal: Animal
}


export const FotoAnimal = ({ animal }: Props) => {
    const [imagemPrincipal, setImagemPrincipal] = useState(animal.imagens[0]);
    const [outrasImagens, setOutrasImagens] = useState(animal.imagens?.slice(1, 5));

    const handleImageClick = (imagem: Imagem) => {
        console.log(imagem);
        const index = outrasImagens.findIndex((img) => img.src === imagem.src)

        console.log(index);
        const atualizaImagens = outrasImagens;
        console.log(atualizaImagens)
        atualizaImagens[index] = imagemPrincipal;
        setImagemPrincipal(imagem);
        setOutrasImagens(atualizaImagens);
    }

    return (

        <div className="flex flex-col w-full gap-4">

            <div className="aspect-square flex justify-center items-center w-full h-full rounded-2xl lg:rounded-3xl shadow-xl">
                <img
                    className="w-full h-full object-cover rounded-2xl lg:rounded-3xl aspect-square"
                    src={imagemPrincipal ? imagemPrincipal.src : "/"}
                    alt={animal.nome}
                />
            </div>



            <div className="w-full grid grid-cols-4 gap-3">
                {outrasImagens &&
                    outrasImagens.map((imagem) =>
                    (
                        <div key={imagem.src} className="w-full cursor-pointer flex center relative aspect-square"
                            onClick={() => handleImageClick(imagem)}>
                            <img className="w-full object-cover aspect-square rounded-xl" src={imagem ? imagem.src : "/"} alt={animal.nome} />
                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}