"use client"
import { useState, useEffect } from "react";
import { Banner } from "./banner";
import { useRouter } from "next/navigation";


export const CarouselBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const totalBanners = 3; // Total de banners no carrossel
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBanners);
        }, 5000); // Altere o tempo se quiser mais ou menos de 5 segundo

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="flex items-center justify-center w-full lg:w-5/6">
            {currentIndex === 0 && (
                <Banner
                    src="/patasuniao.png"
                    alt="#DePatas&MãosUnidas"
                    title="#DePatas&MãosUnidas"
                    description="Ajude a dar uma nova chance para cães e gatos que aguardam uma família cheia de amor."
                    button="Saiba Mais"
                    onClick={()=> router.push('/sobre')}
                />
            )}

            {currentIndex === 1 && (
                <Banner
                    src="/caramelo.jpg"
                    alt="ONGs, Cadastrem os Animais Aqui!"
                    title="ONGs, Cadastrem os Animais Aqui!"
                    description="Deixe seus animais visíveis para milhares de futuros adotantes"
                    button="Cadastrar Agora"
                    onClick={() => router.push('/cadastro')}
                />
            )}

            {currentIndex === 2 && (
                <Banner
                    src="/gato2.jpg"
                    alt="Adote um Amigo para Toda a Vida"
                    title="Adote um Amigo para Toda a Vida"
                    description="Cada animal merece um lar amoroso e seguro. Que tal preencher com mais amor o seu?"
                    button="Ver Animais Disponíveis"
                    onClick={() => router.push('/adocoes')}
                />
            )}
        </div>
    );
};
