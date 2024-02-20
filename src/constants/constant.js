import {Globe} from "lucide-react";
import installIcon from '/downloadIcon.svg';
import contactIcon from '/contactIcon.svg';
import getHiredIcon from '/getHiredIcon.svg';
import setupProfileIcon from '/setupProfileIcon.svg';
import searchProfessionalIcon from '/searchProfileicon.svg';
import chooseHireIcon from '/chooseHireIcon.svg';

export const navbarLinks = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "For Workers",
        link: "/worker",
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
            {
                label: "About Pro4Home",
                link: "/about/us"
            },
            {
                label: "Team",
                link: "/about/team"
            },
            {
                label: "Our Blog",
                link: "/about/blog"
            },

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

export const workerRegistrationSteps = [
    {
        icon: installIcon,
        number: 1,
        title: 'Install Pro4Home',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: contactIcon,
        number: 2,
        title: 'Create Your Account',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: setupProfileIcon,
        number: 3,
        title: 'Set Up Your Profile',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: setupProfileIcon,
        number: 3,
        title: 'Advertise Your Services',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: getHiredIcon,
        number: 4,
        title: 'Get Hired, Get Paid',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    }
]

export const clientRegistrationSteps = [
    {
        icon: installIcon,
        number: 1,
        title: 'Install Pro4Home',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: contactIcon,
        number: 2,
        title: 'Create Your Account',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: searchProfessionalIcon,
        number: 3,
        title: 'Search Professionals',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: chooseHireIcon,
        number: 4,
        title: 'Choose and Hire !',
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
]