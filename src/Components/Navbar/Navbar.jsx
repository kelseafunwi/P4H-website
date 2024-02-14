import logoImage from '/logo.png';
import { useState} from "react";
import {AlignJustify, ChevronDown, Globe} from "lucide-react";
import {MobileMenu} from "./MobileMenu.jsx";
import { navbarLinks } from "../../constants/constant.js";
import { NavLink} from "react-router-dom";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuState = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header className={"border-b-[1px] md:flex items-center h-fit justify-center fixed left-0 right-0 top-0"}>
                <div className={"max-w-6xl w-full"}>
                    <nav className={"flex w-full justify-between items-center"}>
                        <div>
                            <a href={"/"} className={"flex items-center"}>
                                {logoImage && <img
                                    alt={"Logo image"} src={logoImage}
                                    className={"md:h-[93px] h-[85px]"}
                                />}
                            </a>
                        </div>
                        <div className={"flex items-center"}>
                            {
                                !menuOpen &&
                                <button onClick={toggleMenuState}
                                        className={"flex items-center justify-center pe-4 md:hidden"}>
                                    <AlignJustify size={32} color={'#026BCF'}/>
                                </button>
                            }
                        </div>
                        <div className={"hidden md:flex items-center"}>
                            <ul className={"flex items-center justify-between gap-x-2"}>
                                {
                                    navbarLinks.map((item, index) => (
                                        <li key={index} className={"px-2"}>
                                            <NavLink to={item.link}
                                               className={`relative whitespace-nowrap flex items-center font-semibold hover:text-secondary duration-75 font-barlow p-0 text-[16px] leading-7 text-dark`}>
                                                {item.eng && <Globe size={24} className={"pe-1"} />}
                                                {item.label}
                                                {
                                                    item.dropdownMenu &&
                                                    <ChevronDown size={35} className={"px-2 text-black"}/>
                                                }
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {
                menuOpen &&
                <MobileMenu toggleMenuState={toggleMenuState} />
            }
        </>
    );
}