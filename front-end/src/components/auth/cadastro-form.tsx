"use client"

import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Logo } from "../ui/logo"

export const CadastroForm = () => {
    return (<>
        <div className="lg:hidden flex justify-center flex-col items-center gap-2">
            <Logo colorido size={100} />
            <p className="text-deep-blue font-semibold text-2xl">PawsSefety</p>
        </div>

        <div className="font-semibold text-deep-blue text-2xl">Cadastre-se</div>
        <div className="lg:w-11/12 flex flex-col gap-3 w-10/12 p-6 md:p-0">
            <Input placeholder="Digite o seu email" />
            <Input placeholder="Confirme o seu email" />
            <Input placeholder="Digite a sua senha" password />
        </div>
        <div>
            <Button size={2} label="Cadastrar" onClick={() => { }} />
        </div>
        <div className="text-deep-blue font-semibold flex flex-col justify-center items-center gap-1 lg:flex-row">
            <div>Já possui uma conta?</div>
            <Link className=" hover:underline" href="/login">Entrar</Link>
        </div>
    </>
    )
}