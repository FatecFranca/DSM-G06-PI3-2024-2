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
        let atualizaImagens = outrasImagens;
        console.log(atualizaImagens)
        atualizaImagens[index] = imagemPrincipal;
        setImagemPrincipal(imagem);
        setOutrasImagens(atualizaImagens);
    }

    return (

        <div className="flex sm:flex-row flex-col gap-2 w-full h-fit">
            {outrasImagens.length > 0 &&
                <div className="flex-col gap-1 hidden sm:flex justify-between sm:w-1/5">
                    {outrasImagens &&
                        outrasImagens.map((imagem) =>
                        (
                            <div key={imagem.src} className=" aspect-square cursor-pointer flex-1 rounded-2xl"
                                onClick={() => handleImageClick(imagem)}>
                                <img className="aspect-square object-cover rounded-xl  shadow-md" src={imagem ? imagem.src : "/"} alt={animal.nome} />
                            </div>
                        )
                        )
                    }
                </div>
            }


            <div className={`flex aspect-square justify-center rounded-2xl lg:rounded-3xl w-full shadow-xl  ${outrasImagens.length > 1 ? 'sm:w-4/5' : 'sm:w-full'}`}>
                <img className="aspect-square object-cover rounded-2xl lg:rounded-3xl " src={imagemPrincipal ? imagemPrincipal.src : "/"} alt={animal.nome} />
            </div>



            <div className="flex-row flex sm:hidden justify-between">
                {outrasImagens &&
                    outrasImagens.map((imagem) =>
                    (
                        <div key={imagem.src} className="cursor-pointer flex center w-1/5"
                            onClick={() => handleImageClick(imagem)}>
                            <img className="aspect-square object-cover rounded-lg " src={imagem ? imagem.src : "/"} alt={animal.nome} />
                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}