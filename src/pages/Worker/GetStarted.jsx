import {motion} from "framer-motion";
import setAccountIcon from '/icons/set-account.svg';
import verifiedAccountIcon from '/icons/verified-account.svg';
import commercialIcon from '/icons/commercial.svg';

const getStartedStepsArray =  [
    {
        icon: setAccountIcon,
        label: "Set up your account",
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: verifiedAccountIcon,
        label: "Get Verified",
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    },
    {
        icon: commercialIcon,
        label: "Advertise your Service",
        paragraph: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. "
    }
]

export default function GetStarted () {
    return (
        <div className={"flex items-center py-8 bg-white justify-center"}>
            <div className={"px-2 lg:px-20"}>
                <div className={"md:max-w-[400px]"}>
                    <h1 className={"text-dark text-nowrap" }>
                        How to Get Started
                    </h1>
                    <p className={"pt-4 text-lightGray"}>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis
                    </p>
                </div>

                <div className={"grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10"}>

                    {
                       getStartedStepsArray.map((item, index) => (
                           <motion.div key={index} className={"getstarted-shadow mx-auto  px-8  bg-white py-6 rounded-xl"}
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
                               <img loading={"lazy"} src={setAccountIcon} alt={item.label}/>
                               <h5 className={`pt-4 ${index === 0 && 'text-primary2'}`}>{item.label}</h5>
                               <p className={"pt-4 text-lightGray max-w-[340px]"}>{item.paragraph}</p>
                           </motion.div>
                       ))
                    }
                </div>
            </div>
        </div>
    )
}
