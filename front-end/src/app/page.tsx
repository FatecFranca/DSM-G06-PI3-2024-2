"use client"

import { CardAnimal, CardAnimalSkeleton } from "@/components/animal/card-animal";
import { faAnchor, faCamera, faSign } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@/components/ui/Icon";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { CarouselBanner } from "@/components/home/carousel-banner";
import { useState, useEffect } from "react";

import { Animal } from "@/types/animal";

import { api } from '@/conection/api'

export default function Home() {
  const [animaisBanco, setAnimaisBanco] = useState([]);
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    api.get("/animais/?include=raca,imagens").then((response) => {
      console.log(response.data);
      setAnimaisBanco(response.data); // Certifique-se de que response.data é um array
    });
  }, []); // Use Effect faz com que apenas chame essas funções quando a aplicação iniciar

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header />
        <div className="p-6 flex flex-col items-center justify-center gap-6 overflow-x-hidden">
          <CarouselBanner />
          <div className="flex gap-6 w-screen flex-wrap justify-center">
            <Icon size={1} icon={faCamera} />
            <Icon size={1} icon={faSign} />
            <Icon size={1} icon={faAnchor} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 w-full lg:w-4/5">
            {animaisBanco.length === 0 && (
              <div className="flex gap-3 flex-wrap justify-center items-center">
                {skeleton.map((card) => (
                  <CardAnimalSkeleton key={card} />
                ))}
              </div>
            )}
            {animaisBanco.length > 1 &&
              animaisBanco.map((animalRender: Animal) => (
                <CardAnimal key={animalRender.id} animal={animalRender}></CardAnimal>
              ))}
          </div>
        </div>
      </main>

      {/* Footer sempre ao final */}
      <Footer />
    </div>
  );
}
