import { CadastroForm } from "@/components/auth/cadastro-form";
import { Logo } from "@/components/ui/logo";

export default function Page() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-3/4 justify-center items-stretch rounded-2xl overflow-hidden">
                <div className="hidden bg-deep-blue w-1/2 lg:flex items-center flex-col gap-2 text-white p-10 min-h-[500px] justify-center">
                    <Logo size={200}></Logo>
                    <div className="font-semibold text-2xl">Seja bem-vindo(a)!</div>
                    <div className="font-normal w-2/3 text-center">
                        Faça o seu cadastro como ONG para poder anunciar os animais disponíveis para adoção!
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-2xl lg:rounded-none flex items-center flex-col bg-sand-700 gap-4 p-10 min-h-[500px] justify-center min-w-[450px] max-w-[700px]">
                    <CadastroForm/>
                </div>
            </div>
        </div>
    );
}
