import { faXmark, faHouse, faCircleUser, faCat, faDog, faBook, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "../nav/nav-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="lg:hidden fixed inset-0 py-4 px-6 bg-deep-blue z-20">
            <div className="flex justify-between items-center ">
                <div className="flex items-center justify-center gap-3">
                    <Logo size={50} colorido />
                    <h1 className="text-2xl font-semibold">PawsSafety</h1>
                </div>
                <div
                    onClick={closeAction}
                    className="cursor-pointer flex justify-center items-center">
                    <FontAwesomeIcon icon={faXmark} className="size-6" />
                </div>
            </div>
            <div className=" my-4 border-t-4 border-deep-blue-900 pb-2">  </div>
            <div className=" flex gap-8 flex-col w-full h-screen items-start">
                <NavItem href="/" icon={faHouse} label="Página Inicial" />
                <NavItem href="/gatos" icon={faCat} label="Gatos" />
                <NavItem href="/cachorros" icon={faDog} label="Cachorros" />
                <NavItem href="/sobre" icon={faBook} label="Sobre" />
                <NavItem href="/duvidas" icon={faCircleQuestion} label="Dúvidas" />
                <NavItem href="/login" icon={faCircleUser} label="Meu perfil" />
            </div>

        </div>
    );
}