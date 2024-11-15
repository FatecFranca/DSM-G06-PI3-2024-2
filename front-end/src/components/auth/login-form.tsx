"use client"

import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Logo } from "../ui/logo"

export const LoginForm = () => {
    return (<>
    
        <div className="font-semibold text-deep-blue text-2xl">Login</div>
        <div className="lg:w-11/12 flex flex-col gap-3 w-10/12 p-6 md:p-0">
            <Input placeholder="Digite o seu email" />
            <Input placeholder="Digite a sua senha" password />
        </div>
        <div>
            <Button size={2} label="Entrar" onClick={() => { }} />
        </div>
        <div className="text-deep-blue font-semibold flex flex-col justify-center items-center gap-1 lg:flex-row">
            <div>Não possui cadastro?</div>
            <Link className=" hover:underline" href="/cadastro">Cadastre-se</Link>
        </div>
    </>
    )
}