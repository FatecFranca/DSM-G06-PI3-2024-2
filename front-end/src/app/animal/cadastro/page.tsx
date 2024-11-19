import { CadastroAnimal } from "@/components/animal/cadastro-animal";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

export default function Page() {

    return (
        <div className="w-full min-h-screen flex flex-col ">
            <main className="flex-grow">
                <Header />
                <div className="w-full flex items-center justify-center">
                    <CadastroAnimal />
                </div>
            </main>
            <Footer />
        </div>
    )
}