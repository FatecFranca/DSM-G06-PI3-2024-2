import { Animal } from "@/types/animal"
import { formatDate } from "@/utils/formatDate"
import { converterData } from "@/utils/converterData"

type Props = {
    animal: Animal
}

export const InformacoesAnimal = ({ animal }: Props) => {
    return (
        <div className="
        text-deep-blue
        flex
        items-center
        sm:items-start
        justify-centerf
        flex-row
        font-semibold
        gap-1
        sm:flex-col
        text-base
        sm:text-base
        md:text-xl
        xl:text-2xl xl:gap-2
        2xl:text-2xl 2xl:font-bold">
            <div className=" flex xl:gap-2 gap-1 2xl:flex-col 2xl:gap-1">
                <div className="flex flex-row">
                    <p>Idade</p><p className="2xl:hidden">:</p>
                </div>
                <p className="2xl:text-2xl font-light">{animal.data_nascimento ? formatDate(converterData(animal.data_nascimento)) : !animal.idade_anos ? animal.idade_meses : animal.idade_anos}</p>
            </div>
            <div className="flex gap-2 2xl:flex-col 2xl:gap-1">
                <div className="flex flex-row">
                    <p>Raça</p><p className="xl:hidden">:</p>
                </div>
                <p className="2xl:text-2xl font-light">{animal.raca?.nome}</p>
            </div>
            <div className="flex gap-2 2xl:flex-col 2xl:gap-1">
                <div className="flex flex-row">
                    <p>Sexo</p><p className="2xl:hidden">:</p>
                </div>
                {
                    animal.sexo == 'M' &&
                    <p className="2xl:text-2xl font-light">Macho</p>
                }
                {
                    animal.sexo == 'F' &&
                    <p className="2xl:text-2xl font-light">Fêmea</p>
                }
            </div>
            <div className="flex gap-2 2xl:flex-col 2xl:gap-1">
                <div className="flex flex-row">
                    <p>Porte</p><p className="2xl:hidden">:</p>
                </div>
                <p className="2xl:text-2xl font-light">{animal.porte}</p>
            </div>
        </div>
    )

}