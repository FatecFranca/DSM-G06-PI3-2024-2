"use client"

import Link from "next/link"
import { Logo } from "../ui/logo"
import { faBars, faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavItem } from "../nav/nav-item"

import { useState } from "react"
import { HomeMenu } from "./home-menu"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="bg-deep-blue w-full flex justify-center items-center gap-4 text-white text-lg font-medium px-6 py-4 ">
            <div className="lg:gap-20 flex items-center h-full md:justify-center md:gap-12 w-full justify-between ">
                <div className="flex items-center gap-3">
                    <Logo size={50} colorido/>
                    <Link href='/'>
                        <h1 className="text-2xl font-semibold text-shadow-md">PawsSefety</h1>
                    </Link>
                </div>
                <div className="hidden md:flex gap-6">
                    <NavItem label="Home"/>
                    <NavItem label="Sobre"/>
                    <NavItem label="Menu"/>
                    <NavItem label="Doações"/>
                    <NavItem label="Home"/>
                </div>
                <Link className='hidden md:flex' href={'/'}>
                    <FontAwesomeIcon className="size-8" icon={faCircleUser} />
                </Link>

                <div className="cursor-pointer md:hidden" onClick={() => { setShowMenu(true) }}>
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