"use client"

import { Input } from "@/components/ui/input";
import { InputGrande } from "@/components/ui/inputGrande";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { api } from "@/conection/api";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { formatarNumero } from "@/utils/formatarTelefone";
import { Ong } from "@/types/ong";


export const AtualizaOng = () => {
    const [ongID, setOngID] = useState<string>();
    const [ong, setOng] = useState<Ong>();

    const router = useRouter();

    useEffect(() => {
        const storedOngId = sessionStorage.getItem("ongId");

        if (storedOngId) {
            setOngID(storedOngId);
            api.get(`/ongs/${storedOngId}`).then((response) => {
                console.log(response.data);
                setOng(response.data);
                setEmail(ong?.email);
                setSenhaOriginal(ong?.senha);
            });
        }
    }, []); // Passa um array vazio como dependência para executar apenas uma vez

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
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [senhaOriginal, setSenhaOriginal] = useState<string>();
    const [documentos, setDocumentos] = useState<string>();
    const [adocoes, setAdocoes] = useState<string>();


    const handleAtualizarONG = async () => {
        let idOngCadastrada;

        if (nome && razaoSocial && bairro && cep && estado && cidade && logradouro && descricao &&
            procedimento && documentos && adocoes && whatsApp && cnpj && pix && horario) {

            if (senha == "") {
                setSenha(senhaOriginal);
            }

            setWhatsApp(formatarNumero(whatsApp))

            if (telefone) { setTelefone(formatarNumero(telefone)) }

            const cadastro = {
                nome_fantasia: nome,
                razao_social: razaoSocial,
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
                procedimento: procedimento,
                email: email,
                senha: senha,
            };

            try {

                const response = await api.put(`/ongs/${ongID}`, cadastro);

                idOngCadastrada = response.data.id;

                alert("Atualização realizada com sucesso!")
                router.push('/ong/home')

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

    return (

        <div className="w-full h-full flex flex-col items-center p-8 gap-2 text-sand-1500 font-semibold text-lg lg:w-11/12 justify-center xl:w-10/12 2xl:w-9/12">
            <h2 className="text-deep-blue font-semibold text-3xl">Atualização de informações</h2>
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col 
                                md:grid gap-8 md:grid-cols-[5fr_7fr]
                                lg:grid-cols-[3fr_5fr]
                                2xl:grid-cols-[2fr_5fr]">

                    <div className="flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Email</label>
                            <Input placeholder="Digite o seu novo email" defaultValue={ong?.email} onChange={(e) => setEmail(e)} />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Senha</label>
                            <Input placeholder="Digite a sua nova senha" password onChange={(e) => setSenha(e)} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Razão Social</label>
                            <Input placeholder="Digite a razão social do animal" defaultValue={ong?.razao_social} onChange={(e) => setRazaoSocial(e)} />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Nome da ONG</label>
                            <Input placeholder="Digite o nome da ONG" defaultValue={ong?.nome_fantasia} onChange={(e) => setNome(e)} />
                        </div>

                    </div>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">CNPJ</label>
                    <Input placeholder="Digite o CNPJ da ONG" defaultValue={ong?.cnpj} onChange={(e) => setCnpj(e)} type="cnpj" />
                </div>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">WhatsApp</label>
                        <Input placeholder="Digite o número do WhatsApp da ONG" defaultValue={ong?.whatsapp} onChange={(e) => setWhatsApp(e)} type="phone" />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Telefone</label>
                        <Input placeholder="Digite o número do telefone da ONG" defaultValue={ong?.telefone} onChange={(e) => setTelefone(e)} type="phone" />
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-[2fr_1fr]">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Chave PIX</label>
                        <Input placeholder="Digite a chave PIX da ONG para doações" defaultValue={ong?.chave_pix} onChange={(e) => setPix(e)} />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Quantidade de adoções</label>
                        <Input placeholder="Quantidade de animais adotados" defaultValue={ong?.quantidade_adocoes?.toString()} onChange={(e) => setAdocoes(e)} />
                    </div>
                </div>



                <div className="flex flex-col gap-8 md:grid lg:grid-cols-[1fr_3fr]">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">CEP</label>
                        <Input placeholder="CEP da ONG" defaultValue={ong?.cep} onChange={(e) => setCep(e)} type="cep" />
                    </div>
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-[2fr_1fr]">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Logradouro</label>
                            <Input placeholder="Digite o logradouro (rua/avenida) da ONG" defaultValue={ong?.logradouro} onChange={(e) => setLogradouro(e)} />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Número</label>
                            <Input placeholder="Digite o número do endereço" defaultValue={ong?.numero} onChange={(e) => setNumero(e)} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Bairro</label>
                        <Input placeholder="Digite o bairro da ONG" defaultValue={ong?.bairro} onChange={(e) => setBairro(e)} />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Complemento</label>
                        <Input placeholder="Digite o complemento do endereço" defaultValue={ong?.complemento} onChange={(e) => setComplemento(e)} />
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Cidade</label>
                        <Input placeholder="Digite a cidade" defaultValue={ong?.cidade} onChange={(e) => setCidade(e)} />
                    </div>


                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Estado</label>
                        <Input placeholder="Digite o estado" defaultValue={ong?.estado} onChange={(e) => setEstado(e)} />
                    </div>
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Horário de funcionamento</label>
                    <InputGrande placeholder="Digite o horário de funcionamento da sua ONG (ex: Das 8h às 18h de Segunda a Sexta-Feira)"
                        onChange={(e: string) => setHorario(e)}
                        defaultValue={ong?.horario_funcionamento}
                    />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Descrição</label>
                    <InputGrande placeholder="Faça uma descrição sobre a sua ONG" defaultValue={ong?.descricao} onChange={(e: string) => setDescricao(e)} />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Documentos necessários</label>
                    <InputGrande placeholder="Descreva os documentos necessários para a adoção em sua ONG" defaultValue={ong?.documentos_necessarios} onChange={(e: string) => setDocumentos(e)} />
                </div>


                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Procedimento de adoção</label>
                    <InputGrande placeholder="Descreva como é o procedimento de adoção através da sua ONG" defaultValue={ong?.procedimento} onChange={(e: string) => setProcedimento(e)} />
                </div>


                <Button size={1} onClick={handleAtualizarONG} label="Atualizar" />
            </div>
        </div>
    )
}