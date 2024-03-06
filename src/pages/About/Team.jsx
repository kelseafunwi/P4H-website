import Header from "./Header.jsx";
import {team} from '../../constants/constant.js'

import {motion} from 'framer-motion';

export default function Team() {
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
                                        <motion.img  loading={"lazy"} initial={{scale: 0}}  whileInView={{scale: 1}} transition={{duration: 0.8}} viewport={{once: true}} src={member.image} className={"py-5"} alt={"About Team 1"}/>
                                    </div>

                                    <h6  className={"text-dark text-nowrap font-bold text-lg"}>{member.name}</h6>

                                    <p className={"text-primary3 py-2 text-[16px]"}>{member.position}</p>
                                </motion.div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
