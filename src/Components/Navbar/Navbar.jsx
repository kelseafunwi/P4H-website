import logoImage from '/logo.png';
import {useEffect, useState} from "react";
import {AlignJustify, ChevronDown, ChevronUp, Globe, XIcon} from "lucide-react";
import {MobileMenu} from "./MobileMenu.jsx";
import { navbarLinks } from "../../constants/constant.js";
import { NavLink} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'
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
        <div>
            <header className={"border-b-[1px] border-[#E4E4E4] bg-white flex z-50 fixed left-0 right-0 top-0"}>
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
                        className={"fixed right-0 left-0 top-[93px] h-[350px] bg-primary2 flex items-center justify-center"}>
                        <div className={"w-fit "}>
                            <div onClick={() => setLanguageActive(false)} className={"absolute bg-white rounded-[50%] w-[30px] h-[30px] flex items-center justify-center font-semibold cursor-pointer top-10 right-10"}>
                                <XIcon size={32} color={'#026BCF'}/>
                            </div>

                            <h1 className={"text-white py-3 text-center text-4xl font-bold"}>
                                Select your preferred language
                            </h1>

                            <div className={"grid my-5 grid-cols-2 gap-x-5"}>
                                <button onClick={() => setCurrentLanguage(ENGLISH)} className={`flex items-center  ${currentLanguage === ENGLISH ? 'bg-white text-primary2' : 'bg-primary5 text-white' } py-3 px-2 gap-x-2 hover:opacity-80 font-bold`}>
                                    {currentLanguage === ENGLISH && <img src={checkmarkIcon} alt={"check mark icon"}/>}
                                    English
                                </button>

                                <button onClick={() => setCurrentLanguage(FRENCH)} className={`flex items-center py-3 px-4 gap-x-2 hover:opacity-80 font-bold ${currentLanguage === FRENCH ? 'bg-white text-primary2' : 'bg-primary5 text-white' }`}>
                                    {currentLanguage === FRENCH && <img src={checkmarkIcon} alt={"check mark icon"}/>}
                                    Francais
                                </button>
                            </div>
                        </div>
                    </motion.div>
                }
                <nav className={"max-w-7xl md:px-5 lg:px-10 flex w-full justify-between"}>
                    <div>
                        <a href={"/"}>
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
                        <ul className={"flex items-center justify-between gap-x-4"}>
                            {
                                navbarLinks.map((item, index) => (
                                    <motion.li
                                        initial={{
                                            y: 30,
                                            opacity: 0.5
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            delay: 0.2 * index,
                                        }}
                                        key={index} className={"relative items-stretch link-item px-[6px] py-[4px]"}>
                                        <NavLink to={item.link}
                                           className={`relative  whitespace-nowrap flex items-center font-bold hover:text-secondary duration-75 bold-lg `}>
                                            {item.eng && <Globe size={24} />}
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
                                    </motion.li>
                                ))
                            }
                            <li  className={"relative link-item  px-2"}>
                                <button onClick={() => setLanguageActive(!languageActive)}
                                         className={`relative whitespace-nowrap flex items-center font-semibold hover:text-secondary duration-75 font-barlow p-0 text-[16px] leading-7 text-dark`}>
                                    <Globe size={24} className={"pe-1"} />
                                    Eng
                                    {
                                        languageActive ?
                                            <ChevronUp size={35}  className={"ps-2 text-black"}/> :
                                            <ChevronDown size={35}  className={"ps-2 text-black"}/>
                                    }
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <AnimatePresence>
                {
                    menuOpen &&
                    <MobileMenu toggleMenuState={toggleMenuState} />
                }
            </AnimatePresence>
        </div>
    );
}