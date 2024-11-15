import { Animal } from "@/types/animal"
import { FotoAnimal } from "./fotos-animal"
import { DescricaoAnimal } from "./descricoes/descricao-animal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@/components/ui/button";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CardOng } from "@/components/ong/card-ong";
import { InformacoesAnimal } from "@/components/animal/descricoes/informacoes-animal";
import { useParams } from "next/navigation";
import { api } from "@/conection/api";
import { useEffect, useState } from "react";


export const PaginaAnimalDesktop = () => {

    const [animal, setAnimal] = useState<Animal | null>(null); // Inicializa como null para verificar o estado de carregamento
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            api.get(`/animais/${params.id}?include=raca,imagens,ong`).then((response) => {
                console.log(response.data);
                setAnimal(response.data);
            });
        }
    }, [params.id]);

    return (
        <div className="min-h-screen p-6 flex w-full justify-center">
            {animal && animal.ong && (
                <div className="flex gap-3 md:gap-6 justify-center itesm-center">
                    <div className="w-4/5 md:w-3/5 lg:w-2/5 flex flex-col gap-8">
                        <FotoAnimal animal={animal} />
                        <DescricaoAnimal animal={animal} />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-16 w-fit">
                        <div className="flex flex-col lg:gap-3 gap-1">
                            <div className="flex items-center justify-between w-3/4">
                                <h2 className="
                                    text-deep-blue
                                    font-semibold
                                    text-5xl
                                    sm:text-6xl
                                    md:text-7xl
                                    xl:text-8xl">
                                    {animal.nome}
                                </h2>
                                {/* {animal.sexo === "M" && (
                                    <FontAwesomeIcon className="text-4xl lg:text-6xl text-blue-500" icon={faMars} />
                                )}
                                {animal.sexo === "F" && (
                                    <FontAwesomeIcon className="text-4xl lg:text-6xl text-rose-500" icon={faVenus} />
                                )} */}
                            </div>
                            <InformacoesAnimal animal={animal} />
                            <Link target='_blank' className="mt-1 2xl:mt-0" href={`https://wa.me/${animal.ong.whatsapp}`}>
                                <Button size={0} label="Quero adotar" />
                            </Link>
                        </div>
                        <div className="2xl:mt-16 xl:mt-14 mt-12 w-4/5">
                            <CardOng ong={animal.ong} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}