import workWithUsImage from '/images/worker/why-work-with-us.png';
import thumbsUpIcon from '/icons/thumbs-up.svg'
import sellIcon from '/icons/sell.svg';
import sell1Icon from '/icons/sell1.png';
import hireScreenImage from '/images/features/hireScreen.png';
import {motion} from 'framer-motion';

export default function WorkWithUs () {
    const whyWorkWithUsArray = [
        {
            icon: thumbsUpIcon,
            title: "Quality Service",
            paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis."
        },
        {
            icon: sellIcon,
            title: "Sell your business",
            paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis."
        },
        {
            icon: sell1Icon,
            title: "Endless profits",
            paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis."
        },
    ]

    return (
        <div className={"flex items-center py-8 pb-16 justify-center"}>
            <div className={"py-5 sm:w-[90%]"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20 justify-between "}>
                    <div className={"relative "}>
                        <img loading={"lazy"} src={workWithUsImage} className={"max-h-[780px]"} alt={"Work with us image"}/>
                        <div className={"absolute -left-[18%] -bottom-[20%] md:-bottom-[15%]"}>
                            <img loading={"lazy"} className={"w-[51%]"} src={hireScreenImage} alt={"Worker Phone Icon"} />
                        </div>
                    </div>

                    <div className={"px-5 mt-12 md:mt-0 flex flex-col gap-y-3"}>
                        <h2 className={"text-dark"}>Why Work With Us?</h2>
                        <p className={"text-lightGray"}>Lorem ipsum dolor sit amet consectetur. A et ut viverra eget
                            erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis</p>

                        <div className={"flex flex-col justify-between gap-y-6"}>
                            {
                                whyWorkWithUsArray.map((item, index) => (
                                    <motion.div
                                        initial={{
                                            x: 200,
                                        }}
                                        whileInView={{
                                            x: 0
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            transition: 0.5,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        key={index}
                                        className={"flex items-center py-6 px-1 gap-x-7 why-work-with-us-shadow rounded-2xl"}>
                                        <div
                                            style={{
                                                boxShadow: '0px 4px 60px 0px rgba(4, 134, 220, 0.1)',
                                            }}
                                            className={"flex rounded-[50%]"}>
                                            <img className={"w-[80px]"} loading={"lazy"} src={item.icon}
                                                 alt={item.alt}/>
                                        </div>
                                        <div className={"max-w-[360px]"}>
                                            <h5 className={"font-bold text-dark"}>{item.title}</h5>
                                            <p className={"text-lightGray"}>{item.paragraph}</p>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>

                        <button
                            className={"w-full flex items-center bg-primary2 rounded-md my-3 py-2 hover:opacity-65 justify-center text-center text-white font-bold"}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
