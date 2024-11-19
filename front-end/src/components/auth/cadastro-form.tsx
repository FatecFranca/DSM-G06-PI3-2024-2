"use client"

import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const CadastroForm = () => {


    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confirmacao, setConfirmacao] = useState<string>("");

    const router = useRouter();

    const handleCadastro = () => {



        if (email == confirmacao) {
            if (senha) {
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("senha", senha);
                router.push('/ong/cadastro')
            }
            else {
                alert("Por favor, digite uma senha")
            }
        } else {
            alert("Emails não correspondem, por favor, tente novamente.")
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="font-semibold text-deep-blue text-2xl">Cadastre-se</div>
            <div className="flex flex-col gap-3 w-full max-w-[500px]">
                <Input placeholder="Digite o seu email" onChange={(e) => setEmail(e)} />
                <Input placeholder="Confirme o seu email" onChange={(e) => setConfirmacao(e)} />
                <Input placeholder="Digite a sua senha" password onChange={(e) => setSenha(e)} />
            </div>

            <Button size={2} label="Cadastrar" onClick={handleCadastro} />

            <div className="text-deep-blue font-semibold flex flex-col justify-center items-center gap-1 lg:flex-row">
                <div>Já possui cadastro?</div>
                <Link className=" hover:underline" href="/login">Login</Link>
            </div>
        </div>
    )
}