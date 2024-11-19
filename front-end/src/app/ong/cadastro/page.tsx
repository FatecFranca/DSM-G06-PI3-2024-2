"use client"
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { CadastroONG } from "@/components/ong/cadastro-ong";


export default function Page() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <Header />
            <main className="w-full flex-grow flex-col flex justify-center items-center">
                <CadastroONG />
            </main>
            <Footer />
        </div>
    )
}