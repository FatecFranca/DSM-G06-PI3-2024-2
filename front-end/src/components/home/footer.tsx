import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return (
        <footer className="bg-deep-blue w-full flex justify-center items-center text-white p-6 text-lg gap-2 font-light">
            <FontAwesomeIcon className="size-5" icon={faCopyright}/>
            <p>Todos os direitos reservados a PawsSafety</p>
        </footer>
    )
}