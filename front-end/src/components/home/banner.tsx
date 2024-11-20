import { Button } from "../ui/button";

type Props = {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    button?: string;
    onClick?: () => void;
};

export const Banner = ({ src, alt, title, description, button, onClick }: Props) => {
    return (
        <div className="w-full h-[400px] bg-red-400 rounded-2xl relative overflow-hidden">
            {/* Texto e Botão do Banner, centralizados verticalmente e alinhados à esquerda */}
            <div className="absolute inset-y-0 left-6 flex flex-col justify-center gap-1 text-white space-y-2 z-10 w-9/12 md:w-1/2">
                <div className="flex flex-col gap-2">
                    {title && <h2 className="text-xl font-bold break-words text-shadow-md">{title}</h2>}
                    {description && <p className="text-sm break-words text-shadow-md lg:w-2/3">{description}</p>}
                </div>
                {button && (
                    <div className="">
                        <Button onClick={onClick} size={2} label={button} />
                    </div>
                )}
            </div>

            {/* Imagem de Fundo */}
            <img className="absolute inset-0 w-full h-full object-cover" src={src} alt={alt} />
        </div>
    );
};
