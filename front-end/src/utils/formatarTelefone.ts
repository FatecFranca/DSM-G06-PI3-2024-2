export const formatarTelefone = (telefone: string): string => {
    if (telefone.startsWith("+55")) {
        telefone = telefone.slice(3);
    }

    if (telefone.length === 11) {
        const ddd = telefone.slice(0, 2);
        const prefixo = telefone.slice(2, 7);
        const sufixo = telefone.slice(7);
        return `(${ddd}) ${prefixo}-${sufixo}`;
    } else if (telefone.length === 13) {
        const ddd = telefone.slice(0, 2);
        const prefixo = telefone.slice(2, 7);
        const sufixo = telefone.slice(7);
        return `(${ddd}) ${prefixo}-${sufixo}`;
    } else {
        return telefone
    }
};
