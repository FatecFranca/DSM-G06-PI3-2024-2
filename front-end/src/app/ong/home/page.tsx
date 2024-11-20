"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MenuONG } from "@/components/ong/menu-ong";

export default function Page() {
    const router = useRouter();
    const [nomeONG, setNomeONG] = useState<string>("");


    useEffect(() => {
        // Verifica se o ID da ONG está salvo no sessionStorage
        const ongId = sessionStorage.getItem("ongId");
        setNomeONG(sessionStorage.getItem("nomeOng") || "");
        console.log(sessionStorage.getItem("nomeOng"));
        if (!ongId) {
            alert("É necessário fazer login para acessar esta página.");
            router.push("/login"); // Redireciona para a página de login
        }
    }, [router]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow items-center justify-center flex flex-col text-deep-blue text-lg">
                <MenuONG nome={nomeONG}/>
            </main>
            <Footer />
        </div>
    );
}
