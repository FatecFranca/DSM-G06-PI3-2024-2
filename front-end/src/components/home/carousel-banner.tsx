import { useState, useEffect } from "react";
import { Banner } from "./banner";

export const CarouselBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const totalBanners = 3; // Total de banners no carrossel
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBanners);
        }, 5000); // Altere o tempo se quiser mais ou menos de 5 segundo

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="flex items-center justify-center w-full lg:w-4/5">
            {currentIndex === 0 && (
                <Banner
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXE5bA1Xogyiok6EVIAkMNUnyRh7teLY0_1g&s"
                    alt="Onça Pintada"
                    title="Adote a sua onça Pintada"
                    description="Gatinhos pequenos e dóceis para a sua casa"
                    button="Adotar"
                />
            )}

            {currentIndex === 1 && (
                <Banner
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1glF44iOsh1ZKV19m9ze0xu1xpXGiCt2-g&s"
                    alt="BANNER 2"
                    title="Banner 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget dui consectetur, viverra ligula et, dignissim dolor. Vivamus quis sapien sit amet dolor pharetra interdum quis in tortor. Nulla dignissim placerat lorem, sed consectetur nisl venenatis in."
                    button="BANNER 2"
                />
            )}

            {currentIndex === 2 && (
                <Banner
                    src="https://certifiedhumanebrasil.org/wp-content/uploads/2017/01/CERTIFIED-HUMANE_Post-blog.png"
                    alt="BANNER 3"
                    title="BANNER 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    button="BOTAO DO BANNER 3"
                />
            )}
        </div>
    );
};
