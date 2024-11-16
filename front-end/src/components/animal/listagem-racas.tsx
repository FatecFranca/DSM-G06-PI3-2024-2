import { ChangeEvent, useEffect, useState } from "react"
import { api } from "@/conection/api"
import { Especie } from "@/types/especie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Raca } from "@/types/raca";


type Props = {
    especieSelecionada: string;
    onChange: (raca: string) => void;  // Callback para atualizar a raça selecionada
};

export const ListagemRacas = ({ especieSelecionada, onChange }: Props) => {
    const [especie, setEspecie] = useState<Especie | null>(null);
    const [racaSelecionada, setRacaSelecionada] = useState<string>("");
    const [semRacaDefinida, setSemRacaDefinida] = useState<Raca | undefined>(undefined);

    useEffect(() => {
        // Carregar dados da espécie e raças
        if (especieSelecionada) {
            api.get(`/especies/nome/${especieSelecionada}/?include=raca`).then((response) => {
                const especieResposta: Especie = response.data;

                if (especieResposta.raca) {
                    // Filtra e ordena as raças, exceto "Sem Raça Definida"
                    const racasFiltradas = especieResposta.raca.filter(raca => raca.nome !== "Sem Raça Definida");
                    const racasOrdenadas = racasFiltradas.sort((a, b) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase()));

                    setEspecie({ ...especieResposta, raca: racasOrdenadas });

                    // Encontra a raça "Sem Raça Definida"
                    const semRaca = especieResposta.raca.find(raca => raca.nome === "Sem Raça Definida");
                    setSemRacaDefinida(semRaca);

                    // Quando a espécie mudar, defina a raça como "Sem Raça Definida"
                    if (semRaca && typeof onChange === "function") {
                        setRacaSelecionada(semRaca.id); // Atualiza o estado da raça para "Sem Raça Definida"
                        onChange(semRaca.id); // Chama o callback com o ID da raça
                    }
                }
            });
        }
    }, [especieSelecionada]);

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
                        {/* Aqui define o valor inicial de "Sem Raça Definida" */}
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
