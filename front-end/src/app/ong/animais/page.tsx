"use client";

import { CardAnimalSkeleton } from "@/components/animal/card-animal";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { useState, useEffect } from "react";
import { Animal } from "@/types/animal";
import { api } from "@/conection/api";
import { useRouter } from "next/navigation";
import { PageName } from "@/components/ui/PageName";
import { CardAnimalOng } from "@/components/animal/card-animal-ong";

export default function Home() {
  const [animaisBanco, setAnimaisBanco] = useState<Animal[]>([]);
  const [nomeOng, setNomeOng] = useState<string>("")
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();

  useEffect(() => {
    const ongId = sessionStorage.getItem("ongId");
    const nome = sessionStorage.getItem("nomeOng");
    setNomeOng(nome || "")
    console.log(ongId)
    if (ongId) {
      api.get(`/animais/ong/${ongId}?include=raca,imagens`).then((response) => {
        if (response.data.length === 0) {
          alert("Nenhum animal encontrado para esta ONG.");
          router.push("/ong/home");
        } else {
          setAnimaisBanco(response.data);
        }
      }).catch((error) => {
        console.error("Erro ao buscar os animais:", error);
        alert("Ocorreu um erro ao buscar os animais.");
      });
    } else {
      alert("É necessário estar logado para acessar essa página");
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header />
        <PageName label={`Seus animais disponíveis, ${nomeOng}`}/>
        <div className="p-6 flex flex-col items-center justify-center gap-6 overflow-x-hidden">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:w-5/6 2xl:grid-cols-4 max-w-screen mx-auto justify-items-center">
            {animaisBanco.length === 0 &&
              skeleton.map((card) => <CardAnimalSkeleton key={card} />)}
            {animaisBanco.length > 0 &&
              animaisBanco.map((animalRender) => (
                <CardAnimalOng key={animalRender.id} animal={animalRender}></CardAnimalOng>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
