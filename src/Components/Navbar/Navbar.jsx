import logoImage from '/logo.png';
import { Link } from 'react-router-dom';
import {useState} from "react";

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

    const toggleMenuState = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <header className={"border-b-[1px] flex items-center justify-center"}>
            <div className={"max-w-6xl w-full h-20"}>
                <nav className={"block md:flex w-full justify-between items-center"}>
                    <div className={"logo"}>
                       <a href={"/"} className={"flex items-center"}>
                           {logoImage && <img
                               alt={"Logo image"} src={logoImage}
                               className={"md:h-[93px] h-[85px]"}
                           />}
                       </a>
                    </div>
                    <div className={"flex items-center"}>
                        <ul className={"hidden md:flex items-center justify-between gap-x-2"}>
                            {
                                navbarLinks.map((item, index) => (
                                    <li key={index} className={"px-4"}>
                                        <a href={item.link} className={"font-bold font-barlow p-0 text-[16px] leading-7"}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={"flex items-center"}>
                            <button className={"flex items-center justify-center md:hidden"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}