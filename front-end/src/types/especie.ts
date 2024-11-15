import { Raca } from "./raca";

export type Especie = {
    id: string;
    nome: string;
    raca?: Raca[];
}