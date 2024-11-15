"use client"
import { DataNascimento } from "@/components/animal/data-nascimento";
import { ListagemRacas } from "@/components/animal/listagem-racas";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { CheckBox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputGrande } from "@/components/ui/inputGrande";
import { useState } from "react";




export default function Page() {
    const [marcado, setMarcado] = useState(false);

    const handleMarcado = () => {
        setMarcado(!marcado);
    }

    return (
        <div className="w-full min-h-screen flex flex-col">
            <main className="flex-grow">
                <Header />
                <div className="w-4/5 flex flex-col justify-around">
                    <p className="text-2xl text-sand-1500 font-semibold">O animal é um:</p>
                    <div className="flex flex-row">
                        <CheckBox option={"Gato"} onClick={handleMarcado} checked={marcado} />
                        <CheckBox option={"Cachorro"} onClick={handleMarcado} checked={marcado} />
                    </div>
                </div>
                <ListagemRacas especieSelecionada="Cachorro" />
                <DataNascimento/>
                <Input placeholder="Digite algo aqui!"/>
                <InputGrande/>
            </main>
            <Footer />
            

        </div>
    )
}