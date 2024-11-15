import { Animal } from "./animal";
import { Imagem } from "./imagem";

export type Ong = {
    id: string;
    email: string;
    senha: string;
    cnpj: string;
    nome_fantasia?: string;
    razao_social: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    descricao: string;
    whatsapp: string;
    horario_funcionamento: string;
    telefone?: string;
    chave_pix?: string;
    quantidade_adocoes?: number;
    documentos_necessarios: string;
    procedimento: string;
    animais: Animal[];
    imagens: Imagem[];
}