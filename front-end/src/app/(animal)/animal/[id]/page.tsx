"use client";

import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { PaginaAnimalDesktop } from "@/components/animal/pagina-animal-desktop";
import { PaginaAnimalCelular } from "@/components/animal/pagina-animal-celular";

export default function Page() {
   

    return (
        <div className="w-full flex-col min-h-screen overflow-x-hidden">
            <main className="flex-grow mb-10">
                <Header />
                { /** Primeira DIV */ }
               <div className="items-center justify-center  hidden sm:flex">
                    <PaginaAnimalDesktop/>
               </div>
               <div className="sm:hidden">
                    <PaginaAnimalCelular/>
               </div>
            </main>
            <Footer />
        </div>
    );
}