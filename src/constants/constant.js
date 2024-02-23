import {Globe} from "lucide-react";
import installIcon from '/downloadIcon.svg';
import contactIcon from '/contactIcon.svg';
import getHiredIcon from '/getHiredIcon.svg';
import setupProfileIcon from '/setupProfileIcon.svg';
import searchProfessionalIcon from '/searchProfileicon.svg';
import chooseHireIcon from '/chooseHireIcon.svg';
import team1 from '/Team/1.png';
import team2 from '/Team/2.png';
import team3 from '/Team/3.png';
import team4 from '/Team/4.png';
import team5 from '/Team/5.png';
import team6 from '/Team/6.png';
import team7 from '/Team/7.png';
import team8 from '/Team/8.png';

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
                label: "Our Blogs",
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
            {
                label: "English",
                link: '/eng'
            },
            {
                label: "French",
                link: 'fre'
            }
        ],
        fromRight: true,
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

export const team = [
    {
        image: team1,
        name: "Chelsea Larson-Howe",
        position: "Direct Web Coordinator",
    },
    {
        image: team2,
        name: "Direct Web Coordinator",
        position: "Direct Web Coordinator",
    },
    {
        image: team3,
        name: "Jay Schumm",
        position: "Internal Brand Planner",
    },
    {
        image: team4,
        name: "Internal Brand Planner",
        position: "Internal Brand Planner",
    },
    {
        image: team5,
        name: "David Franey",
        position: "Principal Response Technician",
    },
    {
        image: team6,
        name: "Jean Baumbach",
        position: "Lead Data Supervisor",
    },
    {
        image: team7,
        name: "Al Pfannerstill",
        position: "Dynamic Identity Technician",
    },
    {
        image: team8,
        name: "Alison Johnson",
        position: "Human Solutions Specialist",
    },

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

export const categories = [
    {
        title: "All Questions",
    },
    {
        title: "For Workers",
        identifier: 'worker',
    },
    {
        title: "Managing your Account",
        identifier: 'account'
    },
    {
        title: "Payments",
        identifier: "payment",
    }
]

export const questionsAndAnswers = [
    {
        key: 0,
        identifier: 'account',
        question: "What is pro4home?",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    {
        key: 1,
        question: "What kind of support does Pro4Home provide? ",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    {
        key: 2,
        question: "How do you find different criteria in your process?",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    {
        key: 3,
        question: "Do you recommend pro4home ?",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    {
        key: 4,
        identifier: 'payment',
        question: "How do I get help from your team?",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    // For worker section
    {
        key: 5,
        identifier: "worker",
        question: "How to create my pro4home workers/professionals account",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    {
        key: 6,
        identifier: "worker",
        question: "What documents do i need to register?",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },
    {
        key: 7,
        identifier: "worker",
        question: "How to  add my services",
        answer: "Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque. Integer aliquet egestas malesuada velit est ullamcorper. Tincidunt proin amet sem nisl. Sit aliquam dictum egestas consectetur. Quis ultrices augue sollicitudin velit amet sed. Nunc egestas id sit vitae. Rhoncus cras sollicitudin volutpat feugiat vulputate. Faucibus nisi ultrices lorem a aliquet consectetur sed orci eget. Et ac pharetra eu mauris orci sed purus dignissim neque. Duis pretium cursus at a elit lectus eu aliquet tempus. Odio pellentesque ut maecenas facilisis. Scelerisque in morbi sed vitae nisi integer egestas arcu malesuada."
    },

]