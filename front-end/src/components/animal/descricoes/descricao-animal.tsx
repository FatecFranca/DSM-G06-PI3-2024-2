import { Animal } from "@/types/animal"

type Props = {
    animal: Animal
}




export const DescricaoAnimal = ({ animal }: Props) => {
    return (
        <div className="
            text-deep-blue
            flex
            flex-col
            gap-5
            font-semibold
            text-xl
            md:text-2xl
            xl:text-3xl
            2xl:text-4xl">
            <div className="flex flex-col gap-1">
                <p>Descrição</p>
                <p className="font-light text-base xl:text-xl">{animal.descricao}</p>
            </div>
            <div className="flex flex-col gap-1">
                <p>Comportamento</p>
                <p className="font-light text-base  xl:text-xl">{animal.comportamento}</p>
            </div>
            <div className="flex flex-col gap-1">
                <p>Vacinas</p>
                <p className="font-light text-base xl:text-xl">{animal.vacinas}</p>
            </div>
        </div>
    )
}