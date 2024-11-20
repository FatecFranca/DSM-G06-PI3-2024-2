import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Icon } from "@/components/ui/Icon";
import { PageName } from "@/components/ui/PageName";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";

export default function Page() {
    return (
        <div className="min-w-screen flex flex-col">
            <Header />
            <main className="flex-grow flex-col items-center justify-center flex">
                <PageName label="Manual de Uso" />
                <div className="text-deep-blue font-medium text-xl p-6 gap-10 flex flex-col mt-6 md:w-4/5 md:p-0 items-center justify-center">
                    <p className="text-center items-center">Olá! Por aqui você vai aprender como utilizar a plataforma de uma forma simples e direta!</p>
                    <div className="items-center flex flex-col gap-3">
                        <p className="font-bold text-3xl">1. Conhecendo o seu espaço!</p>
                        <div className="w-1/2 md:w-3/4 flex items-center justify-center">
                            <img className="md:hidden flex object-cover"
                                src="/menu-ong-celular.jpg"
                                alt="Menus da ONG no Celular"
                            />
                            <img className="hidden md:flex object-cover"
                                src="/menu-ong-desktop.png"
                                alt="Menus da ONG no Computador"
                            />
                        </div>
                    </div>

                    <p>Aqui podemos ver que você possui alguns atalhos, sendo eles:</p>
                    <div className="flex flex-col items-center gap-12 w-full lg:w-1/2">
                        <div className="flex flex-row gap-8 ">
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    <Icon size={1} icon={faCirclePlus} />
                                </div>
                                <p className="font-semibold text-center">Cadastrar novo animal</p>
                            </div>
                            <p className="text-base md:text-lg">Neste atalho você possui um acesso rápido para a tela de cadastros de animais! Ficando bem fácil de criar novos anúncios de adoções</p>
                        </div>
                        <div className="flex flex-row gap-8">
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    <Icon size={1} icon={faPaw} />
                                </div>
                                <p className="font-semibold text-center">Ver animais ativos</p>
                            </div>
                            <p className="text-base md:text-lg">Aqui você pode vizualizar todos os seus anúncios de adoções ativos, tendo um painel geral informando a quantidade atual e permitindo que eles sejam editados</p>
                        </div>
                        <div className="flex flex-row gap-8">
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    <Icon size={1} icon={faGear} />
                                </div>
                                <p className="font-semibold text-center ">Configurar meus dados</p>
                            </div>
                            <p className="text-base md:text-lg">Este atalho permite que você acesse rapidamente o painel de dados pessoais do seu perfil, podendo altera-los e  assim mantendo tudo atualizado! </p>
                        </div>
                    </div>

                    <div className="mt-10 items-center flex flex-col gap-10 md:gap-20 mb-20">
                        <p className="-mb-10 font-bold text-3xl">2. Cadastrando um animal!</p>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <div className="w-3/4 flex md:hidden items-center justify-center">
                                <img src="/cadastro do animal - 1.jpg" alt="Cadastro do Animal" />
                            </div>
                            <div className="w-3/4 hidden md:flex items-center justify-center">
                                <img src="/cadastro-animal-desktop-01.png" alt="Cadastro do Animal" />
                            </div>
                            <p className="text-base w-3/4 md:w-2/4 md:text-center md:text-lg">Nesta primeira parte você pode informar qual animal está sendo cadastrado, assim como seu nome, fotos  e raça se tiver</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5">
                            <div className="w-3/4 flex md:hidden items-center justify-center">
                                <img src="cadastro do animal - 2.jpg" alt="Cadastro do Animal2" />
                            </div>
                            <div className="w-3/4 hidden md:flex items-center justify-center">
                                <img src="/cadastro-animal-desktop-02.png" alt="Cadastro do Animal" />
                            </div>
                            <p className="text-base w-3/4 md:w-2/4 md:text-center md:text-lg">Aqui é possivel informar algumas informações mais detalhadas sobre o animal cadastrado</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5">
                            <div className="w-3/4 flex md:hidden items-center justify-center">
                                <img src="/cadastro do animal - 3.jpg" alt="Cadastro do Animal" />
                            </div>

                            <div className="w-3/4 hidden md:flex items-center justify-center">
                                <img src="/cadastro-animal-desktop-03.png" alt="Cadastro do Animal" />
                            </div>
                            <p className="text-base w-3/4 md:text-center md:text-lg">Para finalizar, a plataforma permite que você insira mais informações para ajudar o adotante a escolher o animal ideal para perfil dele!</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}