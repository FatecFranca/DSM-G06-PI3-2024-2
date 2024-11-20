"use client"
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { AtualizaOng } from "@/components/ong/atualiza-ong";



export default function Page() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <Header />
            <main className="w-full flex-grow flex-col flex justify-center items-center">
                <AtualizaOng />
            </main>
            <Footer />
        </div>
    )
}