import featureWorkerImage from '/img-features-workers.png'
import {FunctionalCard} from "../../Components/FunctionalCard.jsx";
import {motion} from 'framer-motion';

export default function Client () {

    const cardList =  [
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
        <div className={"grid px-5 grid-cols-1 md:grid-cols-2 bg-lightGray gap-x-4"}>

            <motion.div
                initial={{
                    y: 200,
                }}
                whileInView={{
                    y: 0,
                }}
                transition={{
                    duration: 0.7
                }}
                className={"flex flex-col py-8 items-center justify-center gap-y-5"}>
               <FunctionalCard
                   title={"Workers"}
                   header={"Clients Find You on Pro4Home"}
                   list={cardList}
                   appendHeader={<span className='text-secondary'>Make more Money</span>}
               />
            </motion.div>

            <motion.div
                initial={{
                    x: 300,
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
            >
                <img loading={"lazy"} className={"w-full"} src={featureWorkerImage} alt={"Feature Worker"}/>
            </motion.div>

        </div>
    )
}
