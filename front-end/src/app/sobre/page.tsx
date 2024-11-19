import { CardDev } from "@/components/devs/card-devs";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { PageName } from "@/components/ui/PageName";


export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <main className="flex flex-grow flex-col w-full min-h-screen font-medium text-deep-blue text-2xl items-center">
                <PageName label="Sobre Nós" />
                <div className="mt-4 flex flex-col md:w-3/5 gap-10 p-10">
                    <p className="">Sabia que mais de 30 milhões de cães e gatos  estão vivendo nas ruas aqui no Brasil, segundo a Organização Mundial da Saúde (OMS)? </p>
                    <div className="w-full flex">
                        <img className="w-full object-cover" alt='Gatos Abandonados' src="/gato-abandonado.jpg" />
                    </div>

                    <p> Embora existam ONGs dedicadas à proteção animal, o número de animais que  elas conseguem resgatar e cuidar é muito pequeno em relação à alta demanda.</p>
                    <div className="flex ">
                        <img className="w-full object-cover" 
                            src="/patasuniao.png" alt="De Patas e Mãos Unidas" />
                    </div>

                    <p>Aqui na plataforma você encontra informações detalhadas  e centralizadas sobre os animais disponíveis para adoção.
                    </p>
                    <div className="w-full flex">
                        <img  className="w-full object-cover"
                            src={'/capatopo.jpg'}
                            alt="Paws Sefety"  />
                    </div>

                    <p>E com isso, esperamos aumentar significativamente o número de adoções, reduzir as devoluções ao fornecer dados completos sobre os animais e apoiar as ONGs a resgatar mais animais em situação de rua, aliviando a superlotação dos abrigos e facilitando assim que mais animais sejam resgatados.</p>

                </div>
            </main>
            <div className="my-16 flex flex-col w-4/5 items-center justify-center font-semibold text-5xl  text-center text-deep-blue gap-4">
                <p>Quer conhecer mais?</p>
                <p className="md:text-2xl text-xl text-center font-normal md:w-2/5">Entre em contato conosco, através do nosso perfil no LinkedIn:</p>
                <div className="mt-12 flex flex-col gap-x-32 gap-y-16 items-center justify-center lg:grid lg:grid-cols-2">
                    <CardDev
                        nome="Felipe Avelino"
                        imagem="/gamora.png"
                        linkedin="https://www.linkedin.com/in/felipe-avelino-pedaes-939288279/"
                    />
                    <CardDev
                        nome="Gabriel Spirlandelli"
                        imagem="/Gabriel - Remo.jpg"
                        linkedin="https://www.linkedin.com/in/gabrielspirlan/"
                    />
                    <CardDev
                        nome="Henrique Florentino"
                        imagem="/uno.png"
                        linkedin="https://www.linkedin.com/in/henriqueflorentino/"
                    /> 
                    <CardDev
                        nome="Luiz Felipe Soares"
                        imagem="/maya.png"
                        linkedin="https://www.linkedin.com/in/luizfelipesoarees/"
                    />
                </div>

            </div>
            <Footer />
        </div>
    )
}