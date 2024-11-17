import { Icon } from "@/components/ui/Icon";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
    return (
        <div className="w-full items-center flex gap-2 justify-center min-h-screen">
            <Icon icon={faPaw} size={1}/>
            <Icon icon={faPaw} size={2}/>
            <Icon icon={faPaw} size={3}/>
            <Icon icon={faPaw} size={4}/>
            <Icon icon={faPaw} size={5}/>
        </div> 
    )
}
