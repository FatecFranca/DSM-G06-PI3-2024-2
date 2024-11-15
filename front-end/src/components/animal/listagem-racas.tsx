import { ChangeEvent, useEffect, useState } from "react"
import { api } from "@/conection/api"
import { Especie } from "@/types/especie"

type Props = {
    especieSelecionada: string;
}

export const ListagemRacas = ({ especieSelecionada }: Props) => {
    const [especie, setEspecie] = useState<Especie>();
    const [racaSelecionada, setRacaSelecionada] = useState<string>();

    useEffect(() => {
        api.get(`/especies/nome/${especieSelecionada}/?include=raca`).then((response) => {
            console.log(response.data);
            setEspecie(response.data);
        });
    }, []);

    const handleRacaChance = (e: ChangeEvent<HTMLSelectElement>) =>{
        setRacaSelecionada(e.target.value);
    }


    return (
        <div className="flex flex-col text-sand-1500 text-2xl gap-1 font-medium">
            <label className="font-semibold">Escolha a raça</label>
            {
                especie && especie.raca && 
                <select
                    className="bg-sand-100 p-2"
                    value={racaSelecionada}
                    id="Escolha"
                    onChange={(e) => setRacaSelecionada(e.target.value)}
                >
                    <option value="">Escolha uma raça</option>
                    {
                        especie?.raca.map((raca) => (
                            <option key={raca.nome} value={raca.nome}>
                                {raca.nome}
                            </option>
                        ))
                    }
                </select>
            }

        </div>
    )
}