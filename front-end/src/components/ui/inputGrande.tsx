"use client";

type Props = {
    placeholder: string;
    onChange?: (newValue: string) => void;
};

export const InputGrande = ({ onChange, placeholder }: Props) => {

    // Função para lidar com a mudança no conteúdo do div (contentEditable)
    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        const text = e.currentTarget.textContent || ""; // Obtém o texto do contentEditable
        if (onChange) {
            onChange(text); // Passa o valor para o pai via onChange
        }
    };

    return (
        <div className="w-full flex gap-6 px-6 py-6 bg-sand-300 rounded-lg">
            <div className="flex-1 w-full">
                <div
                    className="w-full text-sm min-h-14 outline-none font-semibold text-sand-150 empty:before:text-sand-900
                            empty:before:content-[attr(data-placeholder)] break-words whitespace-normal overflow-hidden"
                    contentEditable
                    role="textbox"
                    data-placeholder={placeholder}
                    onInput={handleInput} // Usa onInput para capturar o texto à medida que é digitado
                />
            </div>
        </div>
    );
};
