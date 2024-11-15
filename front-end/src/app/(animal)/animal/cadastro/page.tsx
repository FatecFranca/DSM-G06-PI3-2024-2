import { CadastroAnimal } from "@/components/animal/cadastro-animal";
import { CadastroAnimalCelular } from "@/components/animal/celular/cadastro-animal-celular";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

export default function Page() {

    return (
        <div className="w-full min-h-screen flex flex-col">
            <main className="flex-grow">
                <Header />
                <div className="hidden lg:flex">
                    <CadastroAnimal/>
                </div>
                <div className="flex lg:hidden">
                    <CadastroAnimalCelular />
                </div>

            </main>
            <Footer />


        </div>
    )
}