"use client"

import { Data } from "@/components/ui/data";
import { ListagemRacas } from "@/components/animal/listagem-racas";
import { CheckBox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputGrande } from "@/components/ui/inputGrande";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import { api } from "@/conection/api";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { Animal } from "@/types/animal";

export const AtualizarAnimal = () => {
    const router = useRouter();

    const [animal, setAnimal] = useState<Animal>();

    const params = useParams();

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

    useEffect(() => {
        const fetchAnimalData = async () => {
            const storedOngId = sessionStorage.getItem("ongId");
            console.log("PARAMS: ", params.id);

            if (storedOngId) {
                if (params.id) {
                    try {
                        const response = await api.get(`/animais/${params.id}/?include=raca`);
                        console.log(response.data);
                        setAnimal(response.data);

                        if (response.data?.ong_id !== storedOngId) {
                            console.log("AnimalONG: ", response.data?.ong_id);
                            console.log("ONG salva ", storedOngId);
                            alert("Você não possui permissão para alterar esse animal");
                            router.push('/');
                            return;
                        }
                        setEspecie(response.data.raca.especie_id === "6706d01f4893faa8e07ba537" ? "Gato" : "Cachorro");
                        setPorte(response.data.porte);
                        setSexo(response.data.sexo);
                    } catch (error) {
                        console.error("Erro ao buscar os dados do animal:", error);
                        alert("Erro ao carregar os dados do animal.");
                    }
                }
            } else {
                alert("É necessário estar logado para acessar esta página.");
                router.push("/login");
            }
        };

        fetchAnimalData();
    }, [router, params.id]);


    const HandleAtualizarAnimal = async () => {
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
                descricao: descricao
            };

            try {
                const response = await api.put(`/animais/${animal?.id}`, cadastro);

                if (response && imagens.length > 0 && animal?.id) {
                    await HandleCadastrarImagens(animal.id);
                }
                alert("Animal atualizado com sucesso!")
                if(animal?.id) router.push(`/animal/${animal.id}`)

            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error("Erro ao cadastrar animal:", error.response?.data || error.message);
                    alert("Erro ao cadastrar o animal. Tente novamente.");
                } else {
                    console.error("Erro inesperado:", error);
                    alert("Ocorreu um erro inesperado. Tente novamente.");
                }
            }
        } else {
            alert("CADASTRO FALTANDO INFORMAÇÕES");
        }
    };


    const HandleCadastrarImagens = async (idAnimalCriado: string) => {
        try {
            for (let i = 0; i < imagens.length; i++) {
                const formData = new FormData();
                formData.append("file", imagens[i]);


                const response = await api.post(`/imagensanimal/${idAnimalCriado}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
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
        <div className="w-full h-full flex flex-col items-center p-8 gap-2 text-sand-1500 font-semibold text-lg lg:w-11/12 justify-center xl:w-10/12 2xl:w-9/12">
            <h2 className="text-deep-blue font-semibold text-3xl">Atualizar Animal</h2>
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col 
                                md:grid md:gap-4 md:grid-cols-2
                                xl:grid-cols-[1fr_2fr]">
                    <form className="flex flex-col w-full gap-1">
                        <label>Fotos do Animal</label>
                        <ImageUpload onImagesChange={setImagens} />
                    </form>
                    <div className="flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Nome</label>
                            <Input placeholder="Digite o nome do animal" defaultValue={animal?.nome} onChange={(e) => setNome(e)} />
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
                            <div className="flex flex-row justify-between gap-1 lg:gap-10 lg:justify-normal">
                                <CheckBox checked={porte === "Pequeno" ? true : false} option={"Pequeno"} onClick={() => setPorte("Pequeno")} />
                                <CheckBox checked={porte === "Médio" ? true : false} option={"Médio"} onClick={() => setPorte("Médio")} />
                                <CheckBox checked={porte === "Grande" ? true : false} option={"Grande"} onClick={() => setPorte("Grande")} />
                            </div>
                        </div>




                        <div className="flex flex-col w-full gap-1">
                            <label>Qual o sexo do animal?</label>
                            <div className="flex flex-row gap-10">
                                <CheckBox checked={sexo === "M" ? true : false} option={"Macho"} onClick={() => setSexo("M")} />
                                <CheckBox checked={sexo === "F" ? true : false} option={"Fêmea"} onClick={() => setSexo("F")} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-8">

                    <ListagemRacas especieSelecionada={especie || ""} valorPadrao={animal?.raca.nome} onChange={(r: string) => setRaca(r)} />

                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-semibold text-lg">Data de Nascimento</label>
                        {
                            animal?.data_nascimento &&
                            <Data onDateChange={(date) => setDataNascimento(date)} defaultValue={animal?.data_nascimento.toString()} />
                        }
                        {
                            !animal?.data_nascimento &&
                            <Data onDateChange={(date) => setDataNascimento(date)} />
                        }

                    </div>
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Quais vacinas ele já tomou?</label>
                    <InputGrande placeholder="Vacinas" defaultValue={animal?.vacinas} onChange={(e: string) => setVacinas(e)} />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Descreva o animal</label>
                    <InputGrande placeholder="Descrição" defaultValue={animal?.descricao} onChange={(e: string) => setDescricao(e)} />
                </div>


                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Qual o comportamento do animal?</label>
                    <InputGrande placeholder="Comportamento" defaultValue={animal?.comportamento} onChange={(e: string) => setComportamento(e)} />
                </div>
                <Button size={1} onClick={HandleAtualizarAnimal} label="Atualizar" />
            </div>
        </div>
    )
}