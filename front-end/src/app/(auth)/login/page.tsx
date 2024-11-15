import { LoginForm } from "@/components/auth/login-form";
import { Logo } from "@/components/ui/logo";

export default function Page() {
    return (
        <div className="w-screen h-full flex items-center justify-center">
            <div className="flex w-3/4 justify-center rounded-3xl overflow-hidden flex-col lg:flex-row">
                <div className="bg-deep-blue lg:w-1/2 flex items-center flex-col gap-2 text-white p-10 justify-center max-w-[700px]">
                    <Logo size={200} colorido></Logo>
                    <div className="font-semibold lg:text-2xl text-lg">Seja bem-vindo(a)!</div>
                    <div className="font-normal w-2/3 text-center hidden lg:flex">
                        Para aproveitar todas as funcionalidades do nosso site e manter-se conectado, faça login com suas informações pessoais.
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-2xl lg:rounded-none flex items-center flex-col bg-sand-700 gap-4 p-10 min-h-[500px] justify-center min-w-[450px] max-w-[700px]">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}
