"use client"

import { Input } from "@/components/ui/input";
import { InputGrande } from "@/components/ui/inputGrande";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import { api } from "@/conection/api";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";


export const CadastroONG = () => { 

    const email = sessionStorage.getItem("email");
    const senha = sessionStorage.getItem("senha");

    const router = useRouter();

    const [nome, setNome] = useState<string>();
    const [razaoSocial, setRazaoSocial] = useState<string>();
    const [cep, setCep] = useState<string>();
    const [cnpj, setCnpj] = useState<string>();
    const [whatsApp, setWhatsApp] = useState<string>();
    const [logradouro, setLogradouro] = useState<string>();
    const [numero, setNumero] = useState<string>();
    const [telefone, setTelefone] = useState<string>();
    const [horario, setHorario] = useState<string>();
    const [pix, setPix] = useState<string>();
    const [bairro, setBairro] = useState<string>();
    const [estado, setEstado] = useState<string>();
    const [complemento, setComplemento] = useState<string>();
    const [cidade, setCidade] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [procedimento, setProcedimento] = useState<string>();
    const [documentos, setDocumentos] = useState<string>();
    const [adocoes, setAdocoes] = useState<string>();
    const [imagens, setImagens] = useState<File[]>([]);

    
    const HandleCadastrarOng = async () => {
        let idOngCadastrada;
        console.log(nome)

        if (nome && razaoSocial && bairro && cep && estado && cidade && logradouro && descricao &&
                        procedimento && documentos && adocoes && whatsApp && cnpj && pix && horario) {

            const cadastro = {
                nome_fantasia: nome,
                razao_social: razaoSocial,
                email: email,
                senha: senha,
                cnpj: cnpj,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                cep: cep,
                descricao: descricao,
                whatsapp: whatsApp,
                horario_funcionamento: horario,
                telefone: telefone || whatsApp,
                chave_pix: pix,
                quantidade_adocoes: Number(adocoes),
                documentos_necessarios: documentos,
                procedimento: procedimento
            };

            try {
                const response = await api.post('/ongs/', cadastro);
                idOngCadastrada = response.data.id;
                console.log("ONG cadastrado com sucesso:", idOngCadastrada); // Verifique o ID aqui

                // Após o cadastro, envia as imagens
                if (idOngCadastrada && imagens.length > 0) {
                    await HandleCadastrarImagens(idOngCadastrada);
                }
                alert("Cadastro realizado com sucesso!")
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error("Erro ao cadastrar a ONG:", error.response?.data || error.message);
                    alert("Erro ao cadastrar a ONG. Tente novamente.");
                } else {
                    console.error("Erro inesperado:", error);
                    alert("Ocorreu um erro inesperado. Tente novamente.");
                }
            }
        } else {
            alert("CADASTRO FALTANDO INFORMAÇÕES");
        }
    };


    const HandleCadastrarImagens = async (idOngCadastrada: string) => {
        try {
            for (let i = 0; i < imagens.length; i++) {
                const formData = new FormData();
                formData.append("file", imagens[i]); // A chave "imagem" pode ser adaptada para o nome esperado no backend

                // Enviar imagem individualmente associada ao ID do animal
                const response = await api.post(`/imagensong/${idOngCadastrada}`, formData, {
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

        <div className="w-full h-full flex flex-col items-center p-8 gap-2 text-sand-1500 font-semibold text-lg lg:w-11/12 justify-center xl:w-10/12 2xl:w-9/12">
            <h2 className="text-deep-blue font-semibold text-3xl">Cadastro da ONG</h2>
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col 
                                md:grid md:gap-4 md:grid-cols-[5fr_7fr]
                                lg:grid-cols-[3fr_5fr]
                                2xl:grid-cols-[2fr_5fr]">
                    <form className="flex flex-col w-full gap-1">
                        <label>Ícone da ONG</label>
                        <ImageUpload onImagesChange={setImagens} />
                    </form>

                    <div className="flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Razão Social</label>
                            <Input placeholder="Digite a razão social do animal" onChange={(e) => setRazaoSocial(e)} />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Nome da ONG</label>
                            <Input placeholder="Digite o nome da ONG" onChange={(e) => setNome(e)} />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">CNPJ</label>
                            <Input placeholder="Digite o CNPJ da ONG" onChange={(e) => setCnpj(e)} type="cnpj" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">WhatsApp</label>
                        <Input placeholder="Digite o número do WhatsApp da ONG" onChange={(e) => setWhatsApp(e)} type="phone" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Telefone</label>
                        <Input placeholder="Digite o número do telefone da ONG" onChange={(e) => setTelefone(e)} type="phone" />
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-[2fr_1fr]">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Chave PIX</label>
                        <Input placeholder="Digite a chave PIX da ONG para doações" onChange={(e) => setPix(e)} />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Quantidade de adoções</label>
                        <Input placeholder="Quantidade de animais adotados" onChange={(e) => setAdocoes(e)} />
                    </div>
                </div>



                <div className="flex flex-col gap-8 md:grid lg:grid-cols-[1fr_3fr]">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">CEP</label>
                        <Input placeholder="CEP da ONG" onChange={(e) => setCep(e)} type="cep" />
                    </div>
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-[2fr_1fr]">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Logradouro</label>
                            <Input placeholder="Digite o logradouro (rua/avenida) da ONG" onChange={(e) => setLogradouro(e)} />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Número</label>
                            <Input placeholder="Digite o número do endereço" onChange={(e) => setNumero(e)} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Bairro</label>
                        <Input placeholder="Digite o bairro da ONG" onChange={(e) => setBairro(e)} />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Complemento</label>
                        <Input placeholder="Digite o complemento do endereço" onChange={(e) => setComplemento(e)} />
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Cidade</label>
                        <Input placeholder="Digite a cidade" onChange={(e) => setCidade(e)} />
                    </div>


                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Estado</label>
                        <Input placeholder="Digite o estado" onChange={(e) => setEstado(e)} />
                    </div>
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Horário de funcionamento</label>
                    <InputGrande placeholder="Digite o horário de funcionamento da sua ONG (ex: Das 8h às 18h de Segunda a Sexta-Feira)"
                        onChange={(e: string) => setHorario(e)} />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Descrição</label>
                    <InputGrande placeholder="Faça uma descrição sobre a sua ONG" onChange={(e: string) => setDescricao(e)} />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Documentos necessários</label>
                    <InputGrande placeholder="Descreva os documentos necessários para a adoção em sua ONG" onChange={(e: string) => setDocumentos(e)} />
                </div>


                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Procedimento de adoção</label>
                    <InputGrande placeholder="Descreva como é o procedimento de adoção através da sua ONG" onChange={(e: string) => setProcedimento(e)} />
                </div>


                <Button size={1} onClick={HandleCadastrarOng} label="Cadastrar" />
            </div>
        </div>
    )
}