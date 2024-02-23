import imgFeatureWorker2 from '/img-feature-worker-2.png';
import {FunctionalCard} from "../../Components/FunctionalCard.jsx";
import {motion} from 'framer-motion';
export const Customize = () => {

    const cardList =  [
        {
            title: "Some Heading Here",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.",
        },
        {
            title: "Some Heading Here",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.",
        },
        {
            title: "Some Heading Here",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.",
        },
    ]

    return (
        <div className={"flex bg-primary2 lg:bg-white bg-[url('/customizeBackground.png')]  items-center justify-center py-14"}>
            <div className={"grid grid-cols-1 lg:grid-cols-2 items-center justify-center"}>
                <motion.div
                    initial={{
                        x: -300,
                    }}
                    whileInView={{
                        x: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    viewport={{
                        once: true,
                    }}
                    className={"mx-auto md:max-w-[70%] lg:max-w-[100%]"}>
                    <img src={imgFeatureWorker2} alt={"Worker Details"}/>
                </motion.div>
                <div className={"flex flex-col py-8 items-center justify-center gap-y-5"}>
                    <div className={"lg:max-w-[420px]"}>
                        <FunctionalCard
                            title={"Workers"}
                            header={"Create and Customize your Business Profile"}
                            list={cardList}
                            styling={'light'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
