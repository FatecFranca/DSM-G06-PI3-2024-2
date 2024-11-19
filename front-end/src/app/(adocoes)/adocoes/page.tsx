"use client"

import { CardAnimal, CardAnimalSkeleton } from "@/components/animal/card-animal";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { CarouselBanner } from "@/components/home/carousel-banner";
import { useState, useEffect } from "react";
import { Animal } from "@/types/animal";
import { api } from '@/conection/api'


export default function Page() {
  const [animais, setAnimais] = useState([]);
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    api.get("/animais/?include=raca,imagens").then((response) => {
     
      console.log(response.data);
      setAnimais(response.data); // Certifique-se de que response.data é um array
    });
  }, []); // Use Effect faz com que apenas chame essas funções quando a aplicação iniciar

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header />
        <div className="p-6 flex flex-col items-center justify-center gap-6 overflow-x-hidden">
          <CarouselBanner />
          <h2 className="text-deep-blue font-semibold text-4xl text-center">Animais disponíveis para adoção</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:w-5/6 2xl:grid-cols-4 max-w-screen mx-auto justify-items-center ">
            {animais.length === 0 && (
              
                skeleton.map((card) => (
                  <CardAnimalSkeleton key={card} />
                ))
            )}
            {animais.length > 1 &&
              animais.map((animalRender: Animal) => (
                <CardAnimal key={animalRender.id} animal={animalRender}></CardAnimal>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
