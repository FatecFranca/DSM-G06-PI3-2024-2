import { Ong } from '@/types/ong'
import { Imagem } from '@/types/imagem';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { api } from "@/conection/api"
import Link from 'next/link';
import { formatarTelefone } from '@/utils/formatarTelefone';


type Props = {
    ong: Ong;
}

export const CardOng = ({ ong }: Props) => {
    const [imagens, setImagens] = useState<Imagem[]>([]);

    useEffect(() => {


        api.get(`/imagensong/ong/${ong.id}`).then((response) => {
            console.log("IMAGEM: ", response.data);
            setImagens(response.data);
        });

    }, []);

    return (
        <div className="flex flex-col gap-4 text-deep-blue">
            <div className='hidden lg:flex flex-row items-center gap-4 justify-normal'>
                {imagens.length > 0 &&
                    <img
                        src={imagens[0].src}
                        width={140}
                        height={140}
                        alt={ong.nome_fantasia ? ong.nome_fantasia : 'ONG'}
                    />}


                <div className='flex flex-col items-center justify-center md:gap-1'>
                    <h3 className='uppercase font-semibold text-base md:text-2xl xl:text-3xl'>{ong.nome_fantasia}</h3>
                    <p className='font-light text-xs md:text-lg'>+{ong.quantidade_adocoes} animais adotados</p>
                    <Link href={`https://wa.me/${ong.whatsapp}`} target='_blank'>
                        <div className='mt-1'><Button size={2} label='Entrar em contato' /></div>
                    </Link>
                </div>
            </div>

            <div className='flex lg:hidden flex-col items-center justify-center gap-4 md:justify-normal'>
                {imagens.length > 0 &&
                    <img
                        src={imagens[0].src}
                        width={140}
                        height={140}
                        alt={ong.nome_fantasia ? ong.nome_fantasia : 'ONG'}
                    />}


                <div className='flex flex-col items-center justify-center md:gap-1'>
                    <h3 className='font-semibold uppercase text-2xl'>{ong.nome_fantasia}</h3>
                    <p className='font-light text-base'>+{ong.quantidade_adocoes} animais adotados</p>

                    <Link href={`https://wa.me/${ong.whatsapp}`} target='_blank'>
                        <div className='mt-1'><Button size={2} label='Entrar em contato' /></div>
                    </Link>
                </div>
            </div>
            <div className='flex xl:gap-5 gap-3 flex-col 
                            text-xl
                            md:text-2xl
                            xl:text-3xl
                            2xl:text-4xl
                            font-semibold'>
                <div className='flex flex-col gap-1'>
                    <p>Telefone</p>
                    <p className='font-light text-base xl:text-xl'>{formatarTelefone(ong.whatsapp)}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p>Horário de Funcionamento</p>
                    <p className='font-light text-base xl:text-xl'>{ong.horario_funcionamento}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p>Endereço</p>
                    <p className='font-light text-base xl:text-xl'>{ong.logradouro}, {ong.numero}, {ong.bairro}, {ong.cidade}-{ong.estado}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p>Documentos para adoção</p>
                    <p className='font-light text-base xl:text-xl'>{ong.documentos_necessarios}</p>
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faHeart} className='text-2xl' />
                        <p>Ajude esta ONG com uma doação</p>
                    </div>
                    <p className='font-light text-base xl:text-xl'>Chave PIX: {ong.chave_pix}</p>
                </div>
            </div>
        </div>
    )
}