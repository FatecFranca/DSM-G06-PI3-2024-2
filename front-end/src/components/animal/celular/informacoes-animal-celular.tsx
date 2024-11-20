import { Animal } from "@/types/animal"
import { formatDate } from "@/utils/formatDate"
import { converterData } from "@/utils/converterData"

type Props = {
    animal: Animal
}

export const InformacoesAnimalCelular = ({ animal }: Props) => {
    return (
        <div className="
        text-deep-blue
        text-xl
        flex
        flex-col
        gap-2
        ">
            <div className="flex flex-col gap-2">
                <div className="font-semibold flex gap-2">
                    <p>Idade:</p>
                    <p className="font-light">{animal.data_nascimento ? formatDate(converterData(animal.data_nascimento)) : !animal.idade_anos ? animal.idade_meses : animal.idade_anos}</p>
                </div>
                <div className="font-semibold flex gap-2">
                    <p>Raça:</p>
                    <p className="font-light">{animal.raca?.nome}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-semibold flex gap-2">
                    <p>Sexo:</p>
                    {
                        animal.sexo == 'M' &&
                        <p className="font-light">Macho</p>
                    }
                    {
                        animal.sexo == 'F' &&
                        <p className="font-light">Fêmea</p>
                    }
                </div>
                <div className="font-semibold flex gap-2">
                    <p>Porte:</p>
                    <p className="font-light">{animal.porte}</p>
                </div>
            </div>
        </div>
    )

}