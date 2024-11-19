import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MenuONG } from "@/components/ong/menu-ong";


export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />


            <main className="flex-grow items-center justify-center flex flex-col text-deep-blue text-lg">
                <MenuONG />
            </main>


            <Footer />
        </div>
    )
}