import logoImage from '/logo.png';
import { useState} from "react";
import {AlignJustify, ChevronDown, Globe} from "lucide-react";
import {MobileMenu} from "./MobileMenu.jsx";
import { navbarLinks } from "../../constants/constant.js";
import { NavLink} from "react-router-dom";
import {motion} from 'framer-motion'


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuState = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header className={"border-b-[1px] border-[#E4E4E4] md:flex items-center h-fit z-50 bg-white justify-center fixed left-0 right-0 top-0"}>
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
                                        className={"flex items-center justify-center pe-4 lg:hidden"}>
                                    <AlignJustify size={32} color={'#026BCF'}/>
                                </button>
                            }
                        </div>
                        <div className={"hidden lg:flex items-center"}>
                            <ul className={"flex items-center justify-between gap-x-2"}>
                                {
                                    navbarLinks.map((item, index) => (
                                        <li key={index} className={"relative link-item px-2"}>
                                            <NavLink to={item.link}
                                               className={`relative whitespace-nowrap flex items-center font-semibold hover:text-secondary duration-75 font-barlow p-0 text-[16px] leading-7 text-dark`}>
                                                {item.eng && <Globe size={24} className={"pe-1"} />}
                                                {item.label}
                                                {
                                                    item.dropdownMenu &&
                                                    <ChevronDown size={35}  className={"px-2 text-black"}/>
                                                }
                                            </NavLink>
                                            {
                                                item.dropdownMenu &&
                                                <motion.div className={`dropdown  ${item.fromRight ? 'right-0' : 'left-0'} absolute  px-4 top-[100%] bg-white py-4 w-[200px] z-[200] shadow-md overflow-hidden`}
                                                            initial={{
                                                                height: 0,
                                                            }}
                                                            animate={{
                                                                height: 'fit-content'
                                                            }}
                                                >
                                                    {
                                                        item.dropdownMenu &&
                                                        item.dropdownMenu.map((item, index) => (
                                                            <NavLink to={item.link} key={index} className={"flex py-2 last-of-type:border-none text-sm px-2 border-b-2 border-b-dark text-dark hover:text-secondary"}>
                                                                {item.label}
                                                            </NavLink>
                                                        ))
                                                    }
                                                </motion.div>
                                            }
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