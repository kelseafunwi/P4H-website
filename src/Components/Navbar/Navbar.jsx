import logoImage from '/logo.png';
import {useRef, useState} from "react";
import {AlignJustify, X} from "lucide-react";
import {motion} from "framer-motion";

const navbarLinks = [
    {
        label: "For Workers",
        link: "/for-workers",
    },
    {
        label: "Download",
        link: "/download",
    },
    {
        label: "Features",
        link: "/features",
    },
    {
        label: "About",
        link: "/about",
        dropdownMenu: [
            'first item',
        ]
    },
    {
        label: "FAQs",
        link: "/faqs",
    },
    {
        label: "Contact",
        link: "/contact",
    }
]

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const openButton = useRef(null);
    const closeButton = useRef(null);

    const toggleMenuState = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <header className={"border-b-[1px] flex items-center justify-center"}>
            <div className={"max-w-6xl w-full h-20"}>
                <nav className={"flex w-full justify-between items-center"}>
                    <div className={"logo"}>
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
                            <button onClick={toggleMenuState} ref={openButton}
                                    className={"flex items-center justify-center pe-4 md:hidden"}>
                                <AlignJustify/>
                            </button>
                        }
                        {
                            menuOpen &&
                            <button onClick={toggleMenuState} ref={closeButton}
                                    className={" flex items-center justify-center pe-4 md:hidden"}>
                                <X/>
                            </button>
                        }
                    </div>
                    <div className={"hidden md:flex items-center"}>
                        <ul className={"flex items-center justify-between gap-x-2"}>
                            {
                                navbarLinks.map((item, index) => (
                                    <li key={index} className={"px-4"}>
                                        <a href={item.link}
                                           className={"font-bold font-barlow p-0 text-[16px] leading-7"}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </nav>
                {
                    menuOpen &&
                    <motion.div
                        initial={{
                            height: 0,
                            scale: 0,
                        }}
                        animate={{
                            height: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className={"md:hidden items-center border-1 border-black pb-2 shadow-lg z-50"}>
                        <ul className={"block"}>
                            {
                                navbarLinks.map((item, index) => (
                                    <li key={index} className={"px-4"}>
                                        <a href={item.link}
                                           className={"font-bold font-barlow p-0 text-[16px] leading-7"}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                }
            </div>
        </header>
    );
}