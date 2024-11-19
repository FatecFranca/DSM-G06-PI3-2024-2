import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { PageName } from "@/components/ui/PageName";

export default function Page() {
    return (
        <div className="min-w-screen flex flex-col">
            <Header />
            <main className="flex-grow flex-col">
                <PageName label="Manual de Uso" />
                <div className="text-deep-blue font-medium text-xl p-6">
                    <p>Olá! Por aqui você vai aprender como utilizar a plataforma de uma forma simples e direta!</p>
                    <div>
                        
                        <p className="font-bold">1. Conheceno o seu espaço!</p>
                        <img
                            src=""
                            alt=""
                            />
                    </div>

                   <p>Aqui podemos ver que você possui alguns atalhos, sendo eles:</p>
                   <div>
                        <div>
                            <img src="" alt="" />
                            <p>Neste atalho você possui um acesso rápido para a tela de cadastros de animais! Ficando bem fácil de criar novos anúncios de adoções</p>
                        </div>
                   </div>

                   <div>
                        <div>
                            <img src="" alt="" />
                            <p>Aqui você pode vizualizar todos os seus anúncios de adoções ativos, tendo um painel geral informando a quantidade atual e permitindo que eles sejam editados</p>
                        </div>
                   </div>

                   <div>
                        <div>
                            <img src="" alt="" />
                            <p>Este atalho permite que você acesse rapidamente o painel de dados pessoais do seu perfil, podendo altera-los e  assim mantendo tudo atualizado! </p>
                        </div>
                   </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}