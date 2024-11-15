import { faXmark, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "../nav/nav-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="lg:hidden fixed inset-0 py-4 px-6 bg-deep-blue z-20">
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-center gap-3">
                    <Logo size={50} />
                    <h1 className="text-2xl font-semibold">PawsSefety</h1>
                </div>
                <div
                    onClick={closeAction}
                    className="cursor-pointer flex justify-center items-center">
                    <FontAwesomeIcon icon={faXmark} className="size-6" />
                </div>
            </div>
             <div className="my-6">  </div>
            <div className="flex gap-4 flex-col">
                <NavItem href="/home" icon={faHouse} label="Página Inicial" />
                <NavItem href="/profile" icon={faUser} label="Meu perfil" />
            </div>
            
        </div>
    );
}