"use client"

import Link from "next/link"
import { Logo } from "../ui/logo"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavItem } from "../nav/nav-item"

import { useEffect, useState } from "react"
import { HomeMenu } from "./home-menu"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [ongConectado, setOngConectada] = useState(false);

    useEffect(() => {
        // Verifica se o ID da ONG já está armazenado no navegador
        const storedOngId = sessionStorage.getItem("ongId");

        if(storedOngId) {
            setOngConectada(true);
        }
    });


    return (
        <header className="bg-deep-blue w-full flex justify-center items-center gap-4 text-white text-lg font-medium px-6 py-4 ">
            <div className="lg:gap-20 flex items-center h-full lg:justify-center md:gap-12 w-full justify-between ">
                <div className="flex items-center gap-3">
                    <Logo size={50} colorido/>
                    <Link href='/'>
                        <h1 className="text-2xl font-semibold text-shadow-md">PawsSafety</h1>
                    </Link>
                </div>
                <div className="hidden lg:flex gap-6">
                    <NavItem href="/" label="Home"/>
                    <NavItem href="/adocoes" label="Adoções"/>
                    <NavItem href="/gatos" label="Gatos"/>
                    <NavItem href="/cachorros" label="Cachorros"/>
                    <NavItem href="/sobre" label="Sobre"/>

                </div>
                <Link className='hidden lg:flex' href={ongConectado ? '/ong/home' : '/login'}>
                    <FontAwesomeIcon className="size-8" icon={faCircleUser} />
                </Link>

                <div className="cursor-pointer lg:hidden" onClick={() => { setShowMenu(true) }}>
                    <FontAwesomeIcon icon={faBars}
                        className="size-5" />
                </div>
                {showMenu &&
                    <HomeMenu
                        closeAction={() => { setShowMenu(false) }}
                    />
                }
            </div>
        </header>
    )
}