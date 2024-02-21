import {Header} from "./Header.jsx";
import {Footer} from "../../Components/Footer.jsx";
import team1 from '/Team/1.png';
import team2 from '/Team/2.png';
import team3 from '/Team/3.png';
import team4 from '/Team/4.png';
import team5 from '/Team/5.png';
import team6 from '/Team/6.png';
import team7 from '/Team/7.png';
import team8 from '/Team/2.png';

import {motion} from 'framer-motion';

export const Team = () => {

    const team = [
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

    return (
        <div>
            <Header text={"Meet The Team"} />

            <div className={"flex py-16 bg-lightGray items-center justify-center"}>
                <div className={"w-[90%]"}>
                    <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"}>
                        {
                            team.map((member, index) => (
                                <motion.div key={index} className={"flex bg-white flex-col justify-center px-5 py-5"}
                                    initial={{
                                        y: 60
                                    }}
                                    animate={{
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.2 * index,
                                        duration: 0.8
                                    }}
                                >
                                    <div className={"overflow-hidden scale-95 hover:scale-100 duration-500"}>
                                        <motion.img  initial={{scale: 0}}  whileInView={{scale: 1}} transition={{duration: 0.8}} viewport={{once: true}} src={member.image} className={"py-5"} alt={"About Team 1"}/>
                                    </div>

                                    <h1 className={"text-dark text-nowrap font-bold text-lg"}>{member.name}</h1>

                                    <h3 className={"text-primary3 py-2 text-[16px]"}>{member.position}</h3>
                                </motion.div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}
