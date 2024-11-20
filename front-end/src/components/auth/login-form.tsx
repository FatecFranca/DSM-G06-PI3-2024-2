"use client";

import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { api } from "@/conection/api";
import { useState, useEffect } from "react";
import { Ong } from "@/types/ong";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
    const router = useRouter();
    const [ong, setOng] = useState<Ong | null>(null); // Armazenar a ONG retornada
    const [emailLogin, setEmailLogin] = useState<string>("");
    const [senhaLogin, setSenhaLogin] = useState<string>("");

    useEffect(() => {
        // Verifica se o ID da ONG já está armazenado no navegador
        const storedOngId = sessionStorage.getItem("ongId");

        if (storedOngId) {
            router.push("/ong/home"); // Redireciona para a página inicial da ONG
            alert("Olá, você já está conectado no sistema!")
        }
    }, [router]);

    const acessoTeste = () => {
        sessionStorage.setItem("ongId", "673b8e707273bb6eaee64510");
        sessionStorage.setItem("nomeOng", "PawsSafety");
        router.push("/ong/home"); // Redireciona para a página inicial da ONG
    }

    const login = async () => {
        console.log(emailLogin);

        if (!emailLogin) {
            alert("Por favor, digite o seu email");
            return;
        }

        if (!senhaLogin) {
            alert("Por favor, digite a sua senha");
            return;
        }

        try {
            const response = await api.get(`/ongs/login/${emailLogin}`);
            const fetchedOng: Ong = response.data;
            setOng(fetchedOng);
            console.log(ong);

            if (senhaLogin === fetchedOng.senha) {
                sessionStorage.setItem("ongId", fetchedOng.id);
                sessionStorage.setItem("nomeOng", fetchedOng.nome_fantasia || "");
                console.log(sessionStorage.getItem("nomeOng"));
                router.push("/ong/home");
            } else {
                alert("Senha errada, por favor tente novamente.");
            }
        } catch (error) {
            if (error instanceof Error && (error as any)?.response?.status === 404) {
                alert("Usuário Não Encontrado");
            } else {
                alert("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
            }
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="font-semibold text-deep-blue text-2xl">Login</div>
            <div className="flex flex-col gap-3 w-full max-w-[500px]">
                <Input placeholder="Digite o seu email" onChange={(e) => setEmailLogin(e)} />
                <Input placeholder="Digite a sua senha" password onChange={(e) => setSenhaLogin(e)} />
            </div>

            <div className="flex flex-col justify-center w-1/2 text-center max-w-[500px]">
                <Button size={2} label="Entrar" onClick={login} />
            </div>


            <div className=" text-deep-blue font-semibold flex flex-col justify-center items-center gap-1 lg:flex-row ">
                <div>Não possui cadastro?</div>
                <Link className=" hover:underline" href="/cadastro">
                    Cadastre-se
                </Link>
            </div>

            <div className="mt-2 flex flex-col justify-center sm:w-1/2 w-11/12 text-center gap-2">
                <p className="text-sm font-regular text-deep-blue">Toque no botão abaixo para acessar com o usuário de testes:</p>
                <div>
                    <Button size={3} label="Acessar no modo teste" onClick={acessoTeste}></Button>
                </div>
            </div>
        </div>
    );
};
