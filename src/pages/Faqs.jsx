import Header from "./About/Header.jsx";
import rightIcon from '/icons/right.png'
import { useState} from "react";
import {categories, questionsAndAnswers} from "../constants/constant.js";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from "prop-types";

const QADisplay = ({item}) => {
    const [active, setActive] = useState(false);

    return (
        <div className={"gap-y-1 cursor-pointer flex flex-col"}
             onClick={() => {
                setActive(!active)
             }}>
            <div className={`flex items-center  question-shadow rounded-t-md  justify-between px-4  ${active ? 'bg-primary2 text-white' : 'text-lightGray bg-white my-3'}`}>
                <div className={`py-4 my-2 w-full  font-bold text-[16px]`}>
                    {item.question}
                </div>

                <div>
                    {
                        active ?
                            <ChevronUp size={30} color={"white"}/> :
                            <ChevronDown size={30} color={"black"}/>
                    }
                </div>
            </div>
            <AnimatePresence>
                {
                    active &&
                    <motion.p
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: 'fit-content',
                        }}
                        exit={{
                            height: 0,
                        }}
                        className={"px-5 py-5 text-lightGray text-[16px] overflow-hidden"}>
                        {item.answer}
                    </motion.p>
                }
            </AnimatePresence>
        </div>
    )
}

QADisplay.propTypes = {
    item: PropTypes.object,
}

const FilterCategory = ({categoryString}) => {
    return (
        questionsAndAnswers.filter((item) => {
            return item.identifier === categoryString;
        })
        .map((item) => (
            <QADisplay key={item.key} item={item}/>
        ))
    )
}

export default function Faqs () {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    return (
        <>
            <Header text={"Frequently Asked Questions"}/>

            <div className={"flex items-center justify-center py-10"}>
                <div className={"md:flex gap-x-5 lg:px-20 w-full"}> {/* Container Element */}
                    <div className={"w-full  md:w-4/12 flex flex-col gap-y-5 "}> {/* Left Section */}
                        <div
                            className={"order-2 md:order-1 rounded-xl bg-cover bg-left-bottom bg-[url('/images/faqs/faqsBackground.jpg')] px-10 py-10"}>
                            {
                                categories.map((category, index) => (
                                    <div key={index}
                                         onClick={() => setActiveCategoryIndex(index)}
                                         className={"px-3 md:w-full cursor-pointer flex items-center md:text-[16px] border-b-[1px] border-dark3 py-6 text-white font-bold"}>
                                        {
                                        activeCategoryIndex === index &&
                                            <img src={rightIcon} className={"pe-5"} alt={"right icon"}/>
                                        }
                                        {category.title}
                                    </div>
                                ))
                            }
                        </div>
                        <div className={"order-1 md:order-2 w-full rounded-xl bg-cover bg-left-bottom bg-[url('/images/faqs/faqBackground2.jpg')]"}>
                            <div className={"bg-white w-fit mx-2 md:mx-10 my-10 py-10 px-4"}>
                                <h1 className={"font-bold text-dark text-3xl"}>Do you have More Questions?</h1>

                                <p className={"py-4"}>
                                    Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque.
                                </p>

                                <a href={"/contact"} className={"block  text-white text-center font-bold text-lg bg-secondary hover:opacity-40 w-full rounded-md py-4"}>
                                    Button
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full py-3 md:w-8/12"}>
                        <div className={"px-4"}>
                            {
                                activeCategoryIndex === 0 &&
                                categories.map((category, index) => (
                                    <div key={index}>
                                        {
                                            index !== 0 &&
                                            <h1 className={"text-3xl py-3 text-black font-bold "}>
                                                {category.title}
                                            </h1>
                                        }
                                        <FilterCategory categoryString={categories[activeCategoryIndex].identifier} />
                                    </div>
                                ))
                            }
                            {
                                activeCategoryIndex !== 0 &&
                                <FilterCategory categoryString={categories[activeCategoryIndex].identifier} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
