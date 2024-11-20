import { Ong } from '@/types/ong'
import { Imagem } from '@/types/imagem';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { api } from "@/conection/api"
import Link from 'next/link';


type Props = {
    ong: Ong;
}

export const CardOngCelular = ({ ong }: Props) => {
    const [imagens, setImagens] = useState<Imagem[]>([]);

    useEffect(() => {

        api.get(`/imagensong/ong/${ong.id}`).then((response) => {

            setImagens(response.data);
        });

    }, []); 

    return (
        <div className="flex flex-col gap-4 text-deep-blue">
            <div className='flex flex-col items-center justify-center gap-4 md:justify-normal'>
                {imagens.length > 0 &&
                    <img
                        src={imagens[0].src}
                        width={140}
                        height={140}
                        alt={ong.nome_fantasia ? ong.nome_fantasia : 'ONG'}
                    />}


                <div className='flex flex-col items-center justify-center md:gap-1'>
                    <h3 className='uppercase font-semibold text-xl'>{ong.nome_fantasia}</h3>
                    <p className='font-light text-sm'>+{ong.quantidade_adocoes} animais adotados</p>

                    <Link href={`https://wa.me/${ong.whatsapp}`} target='_blank'>
                        <div className='mt-1'><Button size={2} label='Entrar em contato' /></div>
                    </Link>
                </div>
            </div>
            <div className='flex gap-3 text-xl font-semibold flex-col'>
                <div>
                    <p>Telefone</p>
                    <p className='text-base font-light'>{ong.whatsapp}</p>
                </div>
                <div>
                    <p>Horário de Funcionamento</p>
                    <p className='text-base font-light'>{ong.horario_funcionamento}</p>
                </div>

                <div>
                    <p>Endereço</p>
                    <p className='text-base font-light'>{ong.logradouro}, {ong.numero}, {ong.bairro}, {ong.cidade}-{ong.estado}</p>
                </div>
                <div>
                    <p>Documentos para adoção</p>
                    <p className='text-base font-light'>{ong.documentos_necessarios}</p>
                </div>

                <div>
                    <div className='flex items-center gap-2'>  <FontAwesomeIcon icon={faHeart} className='text-2xl' />
                        <p className='md:text-xl text-lg font-semibold'>Ajude esta ONG com uma doação</p></div>
                    <p className='text-base font-light'>Chave PIX: {ong.chave_pix}</p>
                </div>
            </div>
        </div>
    )
}