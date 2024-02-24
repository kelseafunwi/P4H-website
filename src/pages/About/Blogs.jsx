import Header from "./Header.jsx";
import blogHeroImage from '/images/about/blog-hero.png';
import searchIcon from '/icons/search.png'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";
import {articles} from "../../constants/constant.js";

export default function Blogs (){
    return (
        <>
            <Header text={"Our Blogs"} />

            <div className={"flex flex-col items-center justify-center my-6"}>

                <div className={"lg:w-[83%]"}>
                    <div className={"md:flex"}>
                        <motion.div
                            initial={{
                                scale: 0.5,
                            }}
                            animate={{
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5
                            }}
                            className={"w-full items-start"}>
                            <img loading={"lazy"} src={blogHeroImage} className={"md:h-full"} alt={"Blogs Image"}/>
                        </motion.div>

                        <div className={"flex items-center py-5"}>
                            <motion.div
                                initial={{
                                    x: 200,
                                }}
                                animate={{
                                    x: 0
                                }}
                                className={"px-5 flex flex-col gap-y-2 max-w-4xl"}>
                                <div className={"w-fit px-3 font-bold text-primary rounded-3xl bg-grey"}>
                                    category
                                </div>

                                <h1 className={"text-lightGray text-[30px] leading-[40px] font-bold"}>
                                    Lorem ipsum dolor sit amet consectetur. A sem blandit mi pellentesque neque
                                </h1>

                                <p className={"text-lightGray text-[16px]"}>
                                    auris pharetra eget viverra feugiat eu quisque vestibulum. Vehicula euismod at amet
                                    varius euismod quis dignissim. Tortor eget aliquet massa mi nulla ut. Sodales morbi
                                    platea dignissim tellus molestie
                                </p>

                                <div className={"flex gap-x-3"}>
                                    <div className={"h-2 rounded-2xl bg-primary2 w-[65px]"}></div>
                                    <div
                                        className={"h-[8px] w-[8px] border-dark border-[1px] bg-dark1 rounded-2xl"}></div>
                                    <div
                                        className={"h-[8px] w-[8px] border-dark border-[1px] bg-dark1 rounded-2xl"}></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className={"w-full my-16"}>
                        <div className={"flex items-center justify-between"}>
                            <h1 className={"w-fit text-dark font-bold text-[33px]"}>All Articles</h1>

                            <div className={"pe-2 flex items-center border-dark border-[1px] "}>
                                <input type={"text"} className={"py-2 px-3 font-bold text-lightGray text-[14px] focus-visible:outline-0  "} placeholder={"Search articles here......"}/>
                                <img loading={"lazy"} src={searchIcon} alt={"Search Icon"} />
                            </div>
                        </div>

                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6"}>
                            {
                                articles.map((article, index) => (
                                    <motion.div
                                        initial={{
                                            y: 200,
                                        }}
                                        whileInView={{
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: index * 0.1
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        key={index}>
                                        <Link to={`/about/blog/${index}`}>
                                            <img loading={"lazy"} className={"scale-95  hover:scale-100 duration-200"}
                                                 src={article.image} alt={"Article Image"}/>
                                            <div className={"px-5 py-4 flex flex-col gap-y-2"}>
                                                <h1 className={"font-bold text-xl text-lightGray"}>
                                                    {article.title}
                                                </h1>

                                                <div>
                                                    <span className={"text-lightGray text-[16px] pe-4"}>
                                                        {article.date}
                                                        <span className={"ps-2"}>
                                                              |
                                                        </span>
                                                    </span> By:
                                                        <span className={'ps-1 text-primary2'}>
                                                        {article.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"my-16 flex justify-center items-center"}>
                        <button
                            className={"text-white bg-primary2 hover:bg-primary3 rounded-md py-4 px-5 font-bold text-[16px]"}>
                            Load More Articles
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
