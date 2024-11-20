import { AtualizarAnimal } from "@/components/animal/atualizar-animal";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

export default function Page() {

    return (
        <div className="w-full min-h-screen flex flex-col ">
            <main className="flex-grow">
                <Header />
                <div className="w-full flex items-center justify-center">
                    <AtualizarAnimal />
                </div>
            </main>
            <Footer />
        </div>
    )
}