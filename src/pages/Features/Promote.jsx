import {FunctionalCard} from "../../Components/FunctionalCard.jsx";
import featureWorker3 from '/img-features-worker-3.png';
import {motion} from 'framer-motion';

export const Promote = () => {

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
        <div className={"grid sm:px-5 grid-cols-1 md:grid-cols-2 bg-lightGray gap-x-4"}>
            <div className={"flex flex-col py-8 items-center justify-center gap-y-5"}>
                <FunctionalCard
                    title={"Workers"}
                    header={"Promote Your Business and Services and "}
                    list={cardList}
                    appendHeader={<span className='text-secondary'>Make more Money</span>}
                />
            </div>

            <motion.div
                initial={{
                    scale: 0,
                }}
                whileInView={{
                    scale: 1,
                }}
                transition={{
                    duration: 0.7
                }}
            >
                <img className={"w-full"} src={featureWorker3} alt={"Feature Worker"}/>
            </motion.div>
        </div>
    )
}
