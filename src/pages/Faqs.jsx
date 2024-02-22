import {Footer} from "../Components/Footer.jsx";
import {Header} from "./About/Header.jsx";
import rightIcon from '/rightIcon.png'
import {useState} from "react";
import {categories, questionsAndAnswers} from "../constants/constant.js";
import {ChevronUp} from "lucide-react";


export const Faqs = () => {
    const [activeTitleIndex  , setActiveTitleIndex ] = useState(0);
    const [activeElements, setActiveElements ] = useState([0]);

    const toggleElementPresence = (index) => {
        if (activeElements.includes(index)) {
            const newElements = activeElements.filter((item) => item !== index);
            setActiveElements(newElements);
        } else {
            setActiveElements([...activeElements, index])
        }
    }

    return (
        <>
            <Header text={"Frequently Asked Questions"}/>

            <div className={"flex items-center justify-center py-10"}>
                <div className={"md:flex gap-x-5 lg:px-20 w-full"}> {/* Container Element */}

                    <div className={"w-full  md:w-4/12 flex flex-col gap-y-5 "}> {/* Left Section */}

                        <div
                            className={"rounded-xl bg-cover bg-left-bottom bg-[url('/faqsBackground.jpg')] px-10 py-10"}>
                            {
                                categories.map((category, index) => (
                                    <div key={index}
                                         onClick={() => setActiveTitleIndex(index)}
                                        className={"px-3 md:w-full cursor-pointer flex items-center md:text-[16px] border-b-[1px] border-dark3 py-6 text-white font-bold"}>
                                        {
                                            activeTitleIndex === index &&
                                            <img src={rightIcon} className={"pe-5"} alt={"right icon"}/>
                                        }
                                        {category.title}
                                    </div>
                                ))
                            }
                        </div>

                        <div className={"w-full rounded-xl bg-cover bg-left-bottom bg-[url('/faqBackground2.jpg')]"}>
                            <div className={"bg-white w-fit mx-2 md:mx-10 my-10 py-10 px-4"}>
                                <h1 className={"font-bold text-dark text-3xl"}>Do you have More Questions?</h1>

                                <p className={"py-4"}>
                                    Lorem ipsum dolor sit amet consectetur. Felis gravida id sodales vitae volutpat non eu egestas. Ac faucibus et adipiscing quis enim tempor scelerisque.
                                </p>

                                <button className={"text-white text-center font-bold text-lg bg-secondary hover:opacity-40 w-full rounded-md py-4"}>
                                    Button
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className={"w-full md:w-8/12"}>

                        <div className={"px-4"}>
                            {
                                questionsAndAnswers.map((item, index) => (
                                    <div key={index}
                                         onClick={() => {toggleElementPresence(index)}}
                                         className={"gap-y-1 cursor-pointer flex flex-col"}>
                                        <div className={`flex items-center rounded-t-md   shadow-lg justify-between px-4 py-4 ${activeElements.includes(index) ?'bg-primary2 text-white' : 'text-dark bg-white'}` }>
                                            <div
                                                className={` w-full  font-bold text-[16px]`}>
                                                {item.question}
                                            </div>

                                            <div>
                                                <ChevronUp size={30} color={"white"}/>
                                            </div>
                                        </div>
                                        {
                                            activeElements.includes(index) &&
                                            <p className={"px-5 py-5 text-lightGray text-[16px]"}>
                                                {item.answer}
                                            </p>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
