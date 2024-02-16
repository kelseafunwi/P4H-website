import {useState} from "react";
import installIcon from '/downloadIcon.svg';
import {motion} from 'framer-motion';
import {workerRegistrationSteps, clientRegistrationSteps} from "../../constants/constant.js";

export const HowItWorks = () => {
    const WORKER = 'worker';
    const CLIENT = 'client';

    const [tabState, setTabState] = useState(WORKER);

    return (
        <div className={"flex items-center justify-center"}>
            <div className={"w-full justify-center md:w-[97%] bg-white  mb-5 mt-2 flex flex-col items-center"}>
                <h1 className={"w-fit text-3xl relative text-dark font-bold before:absolute before:bg-secondary before:left-[30%] before:w-[72px] before:h-1 before:-bottom-2"}>
                    How it Works
                </h1>

                <p className={"text-center mt-6 text-[16px] max-w-[480px] text-lightGray"}>
                    Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl
                    turpis laoreet neque quis.
                </p>

                <div className={"flex mt-5 justify-center items-center gap-x-4"}>
                    <button onClick={() => setTabState(WORKER)}
                            className={`${tabState === WORKER ? 'bg-primary text-white ' : 'text-[#909090] bg-[#F6F6F6]'} text-[16px] text-center px-6 w-[150px] hover:opacity-90 py-2 rounded-tl-2xl rounded-tr-2xl font-bold`}>
                        For workers
                    </button>
                    <button onClick={() => setTabState(CLIENT)}
                            className={`${tabState === CLIENT ? 'bg-primary text-white ' : 'text-[#909090] bg-[#F6F6F6]'}  text-[16px] text-center px-5 py-2 w-[150px] hover:opacity-90 rounded-tl-2xl rounded-tr-2xl font-bold`}>
                        For Clients
                    </button>
                </div>
                <div className={"w-full py-10 mt-0 px-4 flex justify-center gap-x-3 items-center mb-5"}
                    style={{
                        backgroundImage: "url('/img-home.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className={"w-full min-h-52 lg:w-9/12"}>
                        {
                            tabState === WORKER &&
                            <div className={"gap-x-5 w-full gap-y-6 grid grid-cols-1 sm:grid-cols-2"}>
                                {
                                    workerRegistrationSteps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            className={"w-fit mx-auto mt-1 sm:mt-0 bg-white px-6 py-6 rounded-2xl"}
                                            initial={{
                                                scale: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 0.5
                                            }}
                                            viewport={{
                                                once: true
                                            }}
                                        >
                                            <img src={installIcon} alt={"install icon"}/>
                                            <h5 className={"font-bold text-dark  mt-2"}>Step {step.number}</h5>
                                            <h5 className={"font-bold mt-3 md:text-xl text-dark"}>{step.title}</h5>
                                            <p className={"text-sm pt-4 text-lightGray max-w-sm"}>{step.paragraph}</p>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        }
                        {
                            tabState === CLIENT &&
                            <div className={"gap-x-5 w-full gap-y-6 grid grid-cols-1 sm:grid-cols-2"}>
                                {
                                    clientRegistrationSteps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            className={"w-fit mx-auto mt-1 sm:mt-0 bg-white px-6 py-6 rounded-2xl"}
                                            initial={{
                                                scale: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 0.5
                                            }}
                                            viewport={{
                                                once: true
                                            }}
                                        >
                                            <img src={installIcon} alt={"install icon"}/>
                                            <h5 className={"font-bold text-dark  mt-2"}>Step {step.number}</h5>
                                            <h5 className={"font-bold mt-3 md:text-xl text-dark"}>{step.title}</h5>
                                            <p className={"text-sm pt-4 text-lightGray max-w-sm"}>{step.paragraph}</p>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
