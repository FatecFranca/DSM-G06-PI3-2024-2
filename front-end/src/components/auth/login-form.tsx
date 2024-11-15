"use client"

import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const LoginForm = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="font-semibold text-deep-blue text-2xl">Login</div>
            <div className="flex flex-col gap-3 w-full max-w-[500px]">
                <Input placeholder="Digite o seu email" />
                <Input placeholder="Digite a sua senha" password />
            </div>

            <Button size={2} label="Entrar" onClick={() => { }} />

            <div className=" text-deep-blue font-semibold flex flex-col justify-center items-center gap-1 lg:flex-row">
                <div>Não possui cadastro?</div>
                <Link className=" hover:underline" href="/cadastro">Cadastre-se</Link>
            </div>
        </div>
    )
}