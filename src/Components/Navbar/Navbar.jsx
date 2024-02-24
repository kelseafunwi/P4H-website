import logoImage from '/logo.png';
import {useEffect, useState} from "react";
import {AlignJustify, ChevronDown, Globe} from "lucide-react";
import {MobileMenu} from "./MobileMenu.jsx";
import { navbarLinks } from "../../constants/constant.js";
import { NavLink} from "react-router-dom";
import {motion} from 'framer-motion'
import checkmarkIcon from '/icons/check-mark.png';


export default function Navbar() {

    const ENGLISH = 'eng';
    const FRENCH = 'fre';

    const [menuOpen, setMenuOpen] = useState(false);
    const [languageActive, setLanguageActive] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(ENGLISH);

    const toggleMenuState = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        console.log("the language just changed");
    }, [currentLanguage]);


    return (
        <>
            <header className={"border-b-[1px] border-[#E4E4E4] md:flex items-center h-fit z-50 bg-white justify-center fixed left-0 right-0 top-0"}>
                <div className={"max-w-6xl w-full"}>
                    {
                        languageActive &&
                        <motion.div
                            initial={{
                                height: 0,
                            }}
                            animate={{
                                height: 350,
                            }}
                            exit={{
                                height: 0,
                            }}
                            className={"fixed right-0 left-0 top-[90px] h-[350px] bg-primary2 overflow-hidden flex items-center justify-center"}>
                            <div className={"w-fit "}>
                                <div onClick={() => setLanguageActive(false)} className={"absolute bg-white rounded-[50%] w-[30px] h-[30px] flex items-center justify-center font-semibold cursor-pointer top-10 right-10"}>
                                    X
                                </div>

                                <h1 className={"text-white py-3 text-center text-4xl font-bold"}>
                                    Select your preferred language
                                </h1>

                                <div className={"grid my-5 grid-cols-2 gap-x-5"}>
                                    <button onClick={() => setCurrentLanguage(ENGLISH)} className={"flex items-center bg-white py-3 px-2 gap-x-2 hover:opacity-80 text-primary2 font-bold"}>
                                        <img src={checkmarkIcon} alt={"check mark icon"}/>
                                        English
                                    </button>

                                    <button onClick={() => setCurrentLanguage(FRENCH)} className={"flex items-center py-3 px-4 gap-x-2 hover:opacity-80 font-bold bg-primary5 text-white"}>
                                        Francais
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    }
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
                                        <li key={index} className={"relative link-item  px-2"}>
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
                                                <motion.div className={`dropdown left-0 absolute  px-4 top-[100%] bg-white py-4 w-[200px] z-[200] shadow-md overflow-hidden`}
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
                                <li  className={"relative link-item  px-2"}>
                                    <button onClick={() => setLanguageActive(!languageActive)}
                                             className={`relative whitespace-nowrap flex items-center font-semibold hover:text-secondary duration-75 font-barlow p-0 text-[16px] leading-7 text-dark`}>
                                        <Globe size={24} className={"pe-1"} />
                                        Eng
                                        <ChevronDown size={35}  className={"px-2 text-black"}/>
                                    </button>
                                </li>
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