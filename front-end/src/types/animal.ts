import { Imagem } from "./imagem";
import { Ong } from "./ong";

export type Animal = {
    id?: string;
    nome: string;
    raca?: {
        id: string;
        nome: string;
    };
    peso: number;
    sexo: string;
    porte: string;
    data_nascimento?: Date;
    idade_anos?: number;
    idade_meses?: number;
    vacinas?: string;
    adotado?: boolean;
    comportamento: string;
    descricao: string;
    ong_id: string;
    imagens: Imagem[];
    ong?: Ong;
};
