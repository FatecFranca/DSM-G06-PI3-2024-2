import { Animal } from "@/types/animal"
import { FotoAnimal } from "./fotos-animal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@/components/ui/button";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "@/conection/api";
import { useEffect, useState } from "react";
import { CardOngCelular } from "../ong/card-ong-celular";
import { DescricaoAnimalCelular } from "./celular/descricao-animal-celular";
import { InformacoesAnimalCelular } from "./celular/informacoes-animal-celular";


export const PaginaAnimalCelular = () => {

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
        <div className="flex items-center h-full w-full justify-center p-6 overflow-x-hidden">
            {animal && animal.ong && (
                <div className="flex h-full flex-col w-auto">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center w-full justify-between">
                            <h2 className="text-deep-blue font-semibold text-6xl lg:text-8xl">{animal.nome}</h2>
                            {animal.sexo === "M" && (
                                <FontAwesomeIcon className="text-5xl lg:text-6xl text-blue-500" icon={faMars} />
                            )}
                            {animal.sexo === "F" && (
                                <FontAwesomeIcon className="text-5xl text-rose-500" icon={faVenus} />
                            )}
                        </div>
                        <div className="w-full">
                            <FotoAnimal animal={animal} />
                        </div>
                        <Link target='_blank' className="w-full justify-center flex items-center" href={`https://wa.me/${animal.ong.whatsapp}`}>
                            <Button size={1} label="Quero adotar" />
                        </Link>
                    </div>
                    <div className="mt-6">
                        <InformacoesAnimalCelular animal={animal} />
                    </div>
                    <div className="mt-10">
                        <DescricaoAnimalCelular animal={animal} />
                    </div>
                    <div className="mt-10">
                        <CardOngCelular ong={animal.ong} />
                    </div>
                </div>
            )}
        </div>
    )
}