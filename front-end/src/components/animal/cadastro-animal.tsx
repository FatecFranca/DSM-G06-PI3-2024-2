"use client"

import { Data } from "@/components/ui/data";
import { ListagemRacas } from "@/components/animal/listagem-racas";
import { CheckBox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputGrande } from "@/components/ui/inputGrande";

import { useState } from "react";
import { Button } from "../ui/button";

export const CadastroAnimal= () => {
    return (
        <div className="w-full h-full flex flex-col items-center p-6 gap-2 text-sand-1500 font-semibold text-lg">
            <h2 className="text-deep-blue font-semibold text-3xl">Cadastro do Animal</h2>
            <div className="flex flex-col gap-8 w-full">
                <div className="aspect-square bg-gray-200 w-full rounded-2xl flex items-center justify-center">
                    <p className="text-deep-blue text-3xl font-bold">UPLOAD DA IMAGEM</p>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="input" className="text-sand-1500 font-semibold text-lg">Nome</label>
                    <Input placeholder="Digite o nome do animal"></Input>
                </div>

                <div className="flex flex-col w-full">
                    <label>O animal é um:</label>
                    <div className="flex flex-row gap-10">
                        <CheckBox checked={false} option={"Gato"} />
                        <CheckBox checked={false} option={"Cachorro"} />
                    </div>
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label>Qual o porte do animal?</label>
                    <div className="flex flex-row justify-between gap-1">
                        <CheckBox checked={false} option={"Pequeno"} />
                        <CheckBox checked={false} option={"Médio"} />
                        <CheckBox checked={false} option={"Grande"} />
                    </div>
                </div>

                <ListagemRacas especieSelecionada="Cachorro" />

                <div className="flex flex-col w-full gap-1">
                    <label>Qual o sexo do animal?</label>
                    <div className="flex flex-row gap-10">
                        <CheckBox checked={false} option={"Macho"} />
                        <CheckBox checked={false} option={"Fêmea"} />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-semibold text-lg">Data de Nascimento</label>
                    <Data />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Quais vacinas ele já tomou?</label>
                    <InputGrande placeholder="place" />
                </div>

                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Descreva o animal</label>
                    <InputGrande placeholder="place" />
                </div>


                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="">Qual o comportamento do animal?</label>
                    <InputGrande  placeholder="place"/>
                </div>
                <Button size={0} label="Cadastrar" />
            </div>
        </div>
    ) 
}