export const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMiliseconds = date.getTime() - now.getTime();

    type Unit = {
        unit: Intl.RelativeTimeFormatUnit;
        milliseconds: number;
    };

    const units: Unit[] = [
        { unit: "year", milliseconds: 1000 * 60 * 60 * 24 * 30 * 12 },
        { unit: "month", milliseconds: 1000 * 60 * 60 * 24 * 30 },
        { unit: "day", milliseconds: 1000 * 60 * 60 * 24 },
        { unit: "hour", milliseconds: 1000 * 60 * 60 },
        { unit: "minute", milliseconds: 1000 * 60 },
        { unit: "second", milliseconds: 1000 },
    ];

    for (const { unit, milliseconds } of units) {
        const difference = diffInMiliseconds / milliseconds;
        if (Math.abs(difference) >= 1) {
            const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
            // Removendo "há" do retorno
            return rtf.format(Math.round(difference), unit).replace(/^há\s/i, '');
        }
    }

    return 'agora';
};
