import { ChangeEvent, useEffect, useState } from "react"
import { api } from "@/conection/api"
import { Especie } from "@/types/especie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";


type Props = {
    especieSelecionada: string;
}

export const ListagemRacas = ({ especieSelecionada }: Props) => {
    const [aberto, setAberto] = useState(false);
    const [especie, setEspecie] = useState<Especie>();
    const [racaSelecionada, setRacaSelecionada] = useState<string>();

    useEffect(() => {
        api.get(`/especies/nome/${especieSelecionada}/?include=raca`).then((response) => {
            console.log(response.data);
            setEspecie(response.data);
        });
    }, []);

    const handleRacaChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRacaSelecionada(e.target.value);
    }




    return (
        <div className="flex flex-col text-sand-1500 gap-1 font-medium w-full">
            <label className="font-semibold text-lg">Escolha a raça</label>

            {
                especie && especie.raca &&
                <div className="flex relative" onClick={() => setAberto(!aberto)}>
                    <select
                        className="text-sm w-full bg-sand-100 px-4 h-14 rounded-full font-semibold  appearance-none"
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
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl pointer-events-none">
                       <FontAwesomeIcon icon={!aberto ? faCaretDown : faCaretUp} />
                    </div>
                </div>

            }
        </div>
    )
}