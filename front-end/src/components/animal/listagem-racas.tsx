import { ChangeEvent, useEffect, useState } from "react"
import { api } from "@/conection/api"
import { Especie } from "@/types/especie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Raca } from "@/types/raca";

type Props = {
    especieSelecionada: string;
    valorPadrao?: string;
    onChange: (raca: string) => void;
};

export const ListagemRacas = ({ especieSelecionada, valorPadrao, onChange }: Props) => {
    const [especie, setEspecie] = useState<Especie | null>(null);
    const [racaSelecionada, setRacaSelecionada] = useState<string>("");
    const [semRacaDefinida, setSemRacaDefinida] = useState<Raca | undefined>(undefined);

    useEffect(() => {
        if (especieSelecionada) {
            api.get(`/especies/nome/${especieSelecionada}/?include=raca`).then((response) => {
                const especieResposta: Especie = response.data;

                if (especieResposta.raca) {
                    const racasFiltradas = especieResposta.raca.filter(raca => raca.nome !== "Sem Raça Definida");
                    const racasOrdenadas = racasFiltradas.sort((a, b) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase()));

                    setEspecie({ ...especieResposta, raca: racasOrdenadas });

                    const semRaca = especieResposta.raca.find(raca => raca.nome === "Sem Raça Definida");
                    setSemRacaDefinida(semRaca);

                    if (valorPadrao) {
                        const racas = especieResposta.raca.filter(raca => raca.nome === valorPadrao);
                        if (racas.length > 0) {
                            setRacaSelecionada(racas[0].id);
                            onChange(racas[0].id);
                        }
                    } else {
                        if (semRaca && typeof onChange === "function") {
                            setRacaSelecionada(semRaca.id);
                            onChange(semRaca.id);
                        }
                    }
                }
            });
        }
    }, [especieSelecionada]);

    useEffect(() => {
        if (valorPadrao && especie?.raca) {
            const racas = especie.raca.filter(raca => raca.nome === valorPadrao);
            if (racas.length > 0) {
                setRacaSelecionada(racas[0].id);
                onChange(racas[0].id);
            }
        }
    }, [valorPadrao, especie]);

    const handleRacaChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedRaca = e.target.value;
        setRacaSelecionada(selectedRaca);
        onChange(selectedRaca);
    };

    return (
        <div className="flex flex-col text-sand-1500 gap-1 font-medium w-full">
            <label className="font-semibold text-lg">Escolha a raça</label>
            {
                especie && especie.raca &&
                <div className="flex relative" onClick={() => { }}>
                    <select
                        className="text-sm w-full bg-sand-300 h-14 rounded-full font-semibold px-4 appearance-none"
                        id="Escolha"
                        value={racaSelecionada}
                        onChange={handleRacaChange}
                    >
                        <option value={semRacaDefinida?.id}>{semRacaDefinida?.nome}</option>
                        {
                            especie?.raca.map((raca) => (
                                <option key={raca.id} value={raca.id}>
                                    {raca.nome}
                                </option>
                            ))
                        }
                    </select>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl pointer-events-none">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
            }
            {
                !especie &&
                <div className="text-sm w-full bg-sand-300 h-14 rounded-full font-semibold px-4 appearance-none flex items-center">
                    <div>Por favor, selecione uma espécie</div>
                </div>
            }
        </div>
    );
}
