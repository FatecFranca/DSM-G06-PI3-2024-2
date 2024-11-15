import { Animal } from "@/types/animal"

type Props = {
    animal: Animal
}




export const DescricaoAnimalCelular = ({ animal }: Props) => {
    return (
        <div className="
            text-deep-blue
            text-xl
            flex
            flex-col
            gap-5
            font-bold"
        >
            <div className="flex flex-col gap-1">
                <p>Descrição</p>
                <p className="font-light text-base">{animal.descricao}</p>
            </div>
            <div className="flex flex-col gap-1">
                <p>Comportamento</p>
                <p className="font-light text-base ">{animal.comportamento}</p>
            </div>
            <div className="flex flex-col gap-1">
                <p>Vacinas</p>
                <p className="font-light text-base">{animal.vacinas}</p>
            </div>
        </div>
    )
}