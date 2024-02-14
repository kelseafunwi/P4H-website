import {Globe} from "lucide-react";

export const navbarLinks = [
    {
        label: "For Workers",
        link: "/",
        active: true,
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
            'Us',
            'Worker',
            'Another thing'
        ]
    },
    {
        label: "FAQs",
        link: "/faqs",
    },
    {
        label: "Contact",
        link: "/contact",
    },
    {
        eng: true,
        label: "ENG",
        link: "/eng",
        dropdownMenu: [
            "English",
            "French"
        ]
    }
]