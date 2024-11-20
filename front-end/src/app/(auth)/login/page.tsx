import { LoginForm } from "@/components/auth/login-form";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Logo } from "@/components/ui/logo";

export default function Page() {
    return (
        <div className="max-w-screen overflow-hidden">
            <Header />
            <div className="w-screen min-h-screen flex items-center justify-center p-6">
                <div className="flex justify-center overflow-hidden flex-col xl:flex-row w-full max-w-[1300px]">
                    {/* LADO ESQUERDO DA PÁGINA */}
                    <div className="bg-deep-blue flex items-center flex-col gap-2 text-white p-10 justify-center rounded-tl-3xl rounded-tr-3xl
                                xl:w-1/2 xl:py-36
                                xl:rounded-l-3xl xl:rounded-tr-none"
                    >
                        <Logo size={120} colorido />
                        <p className="font-semibold text-2xl text-shadow-md">PawsSafety</p>
                        <div className="font-semibold xl:text-xl text-base">Seja bem-vindo(a)!</div>
                        <div className="font-normal w-2/3 text-center hidden xl:flex">
                            Para aproveitar todas as funcionalidades do nosso site e manter-se conectado, faça login com suas informações pessoais.
                        </div>
                    </div>

                    {/* LADO DIREITO DA PÁGINA */}
                    <div className="p-6
                                w-full
                                flex flex-col items-center bg-sand-700 py-10 justify-center rounded-br-3xl rounded-bl-3xl
                                xl:w-1/2 xl:rounded-r-3xl xl:rounded-bl-none ">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
