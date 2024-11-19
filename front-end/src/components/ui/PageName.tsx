type Props = {
    label: string;
}

export const PageName = ({label} : Props) => {
    return (
        <div className="bg-deep-blue w-full rounded-b-3xl p-6 flex itesm-center justify-center">
            <h2 className="text-2xl text-sand-100 font-semibold">{label}</h2>
        </div>
    )
}