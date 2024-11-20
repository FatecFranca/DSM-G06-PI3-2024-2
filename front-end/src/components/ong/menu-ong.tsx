"use client"

import { Icon } from "@/components/ui/Icon";
import { faGear, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type Props = {
    nome: string;
}

export const MenuONG = ({nome} : Props) => {
    const router = useRouter();

    const deslogar = () => {
        sessionStorage.removeItem("ongId")
        sessionStorage.removeItem("nomeOng")
        alert("Usuário desconectado")
        router.push('/login')
    }

    return (
        <div className="mt-5 flex flex-col justify-center items-cneter gap-6 p-6 flex-grow">
            <div className="flex flex-col gap-3">
                <p className="font-semibold text-4xl">Olá, {nome}</p>
                <p className="font-regular text-deep-blue text-xl">O que você deseja fazer hoje?</p>
            </div>
            <div className="mt-2 flex flex-col gap-10 md:flex-row">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <Icon size={1} icon={faCirclePlus} onClick={() => router.push('/animal/cadastro/')} />
                    </div>
                    <p className="font-semibold">Cadastrar novo animal</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <Icon size={1} icon={faPaw} onClick={() => router.push('/ong/animais/')} />
                    </div>
                    <p className="font-semibold">Ver animais ativos</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <Icon size={1} icon={faGear} onClick={() => router.push('/ong/atualizar')} />
                    </div>
                    <p className="font-semibold">Configurar meus dados</p>
                </div>

            </div>
            <div className="flex items-center justify-center md:mt-10 md:my-0 my-5">
                <Button size={1}  label="Deslogar do sistema" onClick={deslogar} red/>
            </div>
            <div className="flex items-center justify-center md:mt-10 md:my-0 my-5 md:mb-20"> 
                <Button size={3} label="Como utilizar a plataforma?" onClick={() => router.push('/manual-de-uso')} />
            </div>
        </div>
    )
}