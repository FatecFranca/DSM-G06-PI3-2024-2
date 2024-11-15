import Link from "next/link";
import Image from "next/image";

type Props = {
    size: number;
    colorido?: boolean;
}

export const Logo = ({ size, colorido }: Props) => {
    return (
        <Link href="/">
            {
                colorido &&
                <Image
                    className=""
                    src={'/logo_colorido.svg'}
                    alt="Paws Sefety"
                    width={size}
                    height={size}
                    quality={100}
                />
            }

            {
                !colorido &&
                <Image
                    src={'/logo_branco.svg'}
                    alt="Paws Sefety"
                    width={size}
                    height={size}
                    quality={100}
                />
            }
        </Link>
    );
}