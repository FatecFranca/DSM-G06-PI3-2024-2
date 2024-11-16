"use client"

import { Data } from "@/components/ui/data";
import { ListagemRacas } from "@/components/animal/listagem-racas";
import { CheckBox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputGrande } from "@/components/ui/inputGrande";

import { useState } from "react";
import { Button } from "../../ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import { api } from "@/conection/api";
import { AxiosError } from "axios";
import { Animal } from "@/types/animal";

export const CadastroAnimalCelular = () => {
    const [nome, setNome] = useState<string>();
    const [especie, setEspecie] = useState<string>();
    const [porte, setPorte] = useState<string>();
    const [sexo, setSexo] = useState<string>();
    const [dataNascimento, setDataNascimento] = useState<string>();
    const [vacinas, setVacinas] = useState<string>();
    const [imagens, setImagens] = useState<File[]>([]);

    const [raca, setRaca] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [comportamento, setComportamento] = useState<string>();


    const HandleCadastrarAnimal = async () => {
  
        let idAnimalCriado;

        if (nome && especie && porte && sexo && dataNascimento && raca && descricao && comportamento && vacinas) {
            const cadastro = {
                nome: nome,
                raca_id: raca,
                sexo: sexo,
                porte: porte,
                data_nascimento: new Date(dataNascimento),
                vacinas: vacinas,
                adotado: false,
                comportamento: comportamento,
                descricao: descricao,
                ong_id: "670815ea4a2d0bdb6d562eda"
            };

            try {
         
                const response = await api.post<Animal>('/animais/', cadastro);
                idAnimalCriado = response.data.id;
                console.log("Animal cadastrado com sucesso:", idAnimalCriado);
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error("Erro ao cadastrar animal:", error.response?.data || error.message);
                    alert("Erro ao cadastrar o animal. Tente novamente.");
                } else {
                    console.error("Erro inesperado:", error);
                    alert("Ocorreu um erro inesperado. Tente novamente.");
                }
            }
            if(idAnimalCriado && imagens) HandleCadastrarImagens(idAnimalCriado);
        } else {
            alert("CADASTRO FALTANDO INFORMAÇÕES");
        }
    };

    const HandleCadastrarImagens = async (idAnimalCriado: string) => {
        try {
            for (let i = 0; i < imagens.length; i++) {
                const formData = new FormData();
                formData.append("file", imagens[i]); // A chave "imagem" pode ser adaptada para o nome esperado no backend

                // Enviar imagem individualmente associada ao ID do animal
                const response = await api.post(`/imagensanimal/${idAnimalCriado}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data", // Indica que estamos enviando um arquivo
                    },
                });
                console.log(`Imagem ${i + 1} cadastrada com sucesso:`, response.data);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error("Erro ao cadastrar imagens:", error.response?.data || error.message);
                alert("Erro ao cadastrar as imagnes. Tente novamente.");
            } else {
                console.error("Erro inesperado: ", error);
                alert("Ocorreu um erro inesperado ao cadastrar as imagens. Tente novamente.");
            }
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center p-8 gap-2 text-sand-1500 font-semibold text-lg">
            <h2 className="text-deep-blue font-semibold text-3xl">Cadastro do Animal</h2>
            <div className="flex flex-col gap-8 w-full">
                <form className="flex flex-col w-full gap-1">
                    <label>Fotos do Animal</label>
                    <ImageUpload onImagesChange={setImagens} />
                </form>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Nome</label>
                    <Input placeholder="Digite o nome do animal" onChange={(e) => setNome(e)} />
                </div>

                <div className="flex flex-col w-full">
                    <label>O animal é um:</label>
                    <div className="flex flex-row gap-10">
                        <CheckBox checked={especie === "Gato" ? true : false} option={"Gato"} onClick={() => setEspecie("Gato")} />
                        <CheckBox checked={especie === "Cachorro" ? true : false} option={"Cachorro"} onClick={() => setEspecie("Cachorro")} />
                    </div>
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label>Qual o porte do animal?</label>
                    <div className="flex flex-row justify-between gap-1">
                        <CheckBox checked={porte === "Pequeno" ? true : false} option={"Pequeno"} onClick={() => setPorte("Pequeno")} />
                        <CheckBox checked={porte === "Médio" ? true : false} option={"Médio"} onClick={() => setPorte("Médio")} />
                        <CheckBox checked={porte === "Grande" ? true : false} option={"Grande"} onClick={() => setPorte("Grande")} />
                    </div>
                </div>

                <ListagemRacas especieSelecionada={especie || ""} onChange={(r: string) => setRaca(r)} />


                <div className="flex flex-col w-full gap-1">
                    <label>Qual o sexo do animal?</label>
                    <div className="flex flex-row gap-10">
                        <CheckBox checked={sexo === "M" ? true : false} option={"Macho"} onClick={() => setSexo("M")} />
                        <CheckBox checked={sexo === "F" ? true : false} option={"Fêmea"} onClick={() => setSexo("F")} />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-semibold text-lg">Data de Nascimento</label>
                    <Data onDateChange={(date) => setDataNascimento(date)} />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Quais vacinas ele já tomou?</label>
                    <InputGrande placeholder="Vacinas" onChange={(e: string) => setVacinas(e)} />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Descreva o animal</label>
                    <InputGrande placeholder="Descrição" onChange={(e: string) => setDescricao(e)} />
                </div>


                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Qual o comportamento do animal?</label>
                    <InputGrande placeholder="Comportamento" onChange={(e: string) => setComportamento(e)} />
                </div>
                <Button size={0} onClick={HandleCadastrarAnimal} label="Cadastrar" />
            </div>
        </div>
    )
}