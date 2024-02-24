import {motion} from "framer-motion";
import setAccountIcon from '/icons/set-account.svg';
import verifiedAccountIcon from '/icons/verified-account.svg';
import commercialIcon from '/icons/commercial.svg';

export default function GetStarted () {
    return (
        <div className={"flex items-center py-8 bg-white justify-center"}>
            <div className={"w-[95%]"}>
                <div className={"w-[400px]"}>
                    <h1 className={"font-bold text-dark text-[40px] leading-[48px]" }>
                        How to Get Started
                    </h1>
                    <p className={"pt-4 text-[16px] text-lightGray"}>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis
                    </p>
                </div>

                <div className={"grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4"}>
                    <div className={"flex border-[1px] border-primary flex-col justify-center py-2 shadow-md rounded-xl"}>
                        <motion.div
                            className={"w-fit mx-auto  px-3 mt-1 sm:mt-0 bg-white py-3 rounded-2xl"}
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
                            <img loading={"lazy"} src={setAccountIcon} alt={"install icon"}/>
                            <h5 className={"font-bold md:text-xl pt-4 text-primary2"}>Set up your account</h5>
                            <p className={"text-sm pt-4 text-lightGray max-w-[340px]"}>Lorem ipsum dolor sit amet
                                consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet
                                neque quis. </p>
                        </motion.div>
                    </div>

                    <div className={"flex border-[1px] border-primary flex-col justify-center py-2 shadow-md rounded-xl"}>
                        <motion.div
                            className={"w-fit mx-auto  px-3 mt-1 sm:mt-0 bg-white py-3 rounded-2xl"}
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
                            <img loading={"lazy"} src={verifiedAccountIcon} alt={"install icon"}/>
                            <h5 className={"font-bold pt-4 md:text-xl text-dark"}>Get Verified</h5>
                            <p className={"text-sm pt-4 text-lightGray max-w-[340px]"}>Lorem ipsum dolor sit amet
                                consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet
                                neque quis. </p>
                        </motion.div>
                    </div>

                    <div className={"flex border-[1px] border-primary flex-col justify-center py-2 shadow-md rounded-xl"}>
                        <motion.div
                            className={"w-fit mx-auto  px-3  mt-1 sm:mt-0 bg-white py-3 rounded-2xl"}
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
                            <img loading={"lazy"} src={commercialIcon} alt={"install icon"}/>

                            <h5 className={"font-bold md:text-xl text-primary2 "}>Advertise your Service</h5>
                            <p className={"text-sm pt-4 text-lightGray  max-w-[340px]"}>Lorem ipsum dolor sit amet
                                consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet
                                neque quis. </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
