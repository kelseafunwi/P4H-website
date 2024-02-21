import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import blogMainImage from '/Blog/blog-detail-mainImg.png';
import blog1 from "/Blog/img-about-blog-1.png";
import blog2 from "/Blog/img-about-blog-2.png";
import blog3 from "/Blog/img-about-blog-3.png";
import {Footer} from "../../Components/Footer.jsx";
import {useEffect, useRef} from "react";
import {Comment} from '../../Components/Comment.jsx';
import axios  from 'axios'

const articles = [
    {
        image: blog1,
        title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
        date: "Jan 20, 2023",
        name: "Bessie Cooper",
    },
    {
        image: blog2,
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
        date: "Jan 20, 2023",
        name: "Bessie Cooper",
    },
    {
        image: blog3,
        title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
        date: "Jan 20, 2023",
        name: "Bessie Cooper",
    },
]

export const BlogPost = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const bodyRef = useRef(null);


    const {id} = useParams();


    const submitComment = (e) => {
        e.preventDefault();
        console.log("name ", nameRef.current.value)

        axios.post(`/blog/${id}`, {
            name: nameRef.current.value,
            email: emailRef.current.value,
            body: bodyRef.current.value
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log("Error occured in sending the data");
        })

    }

    useEffect(() => {
        console.log(id);
    }, [id]);


    return (
        <>
            <div className={"flex flex-col items-center justify-center my-6"}>

                <div className={"lg:w-[84%]"}>
                    <div className={"lg:flex"}>
                        <div className={" md:flex items-center py-5"}>
                            <motion.div
                                initial={{
                                    x: -200,
                                }}
                                animate={{
                                    x: 0
                                }}
                                className={"px-5 flex text-center flex-col gap-y-2 max-w-lg"}>

                                <h1 className={"text-lightGray  text-[30px] leading-[40px] font-bold"}>
                                    Lorem ipsum dolor sit amet consectetur. A sem blandit mi pellentesque neque
                                </h1>

                                <div>
                                    <span className={"text-lightGray text-[16px] pe-4"}>
                                        Jan 20, 2023
                                        <span className={"ps-2"}>
                                              |
                                        </span>
                                    </span> By:
                                    <span className={'ps-1 text-primary2'}>
                                       Bessie Cooper
                                    </span>
                                </div>
                            </motion.div>

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
                                className={"w-full py-4 md:py-0 items-start"}>
                                <img src={blogMainImage} className={"md:h-full"} alt={"Blogs Image"}/>
                            </motion.div>
                        </div>
                    </div>


                    <div className={"mx-5 flex flex-col gap-y-7"}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Suspendisse lectus libero elit cursus turpis. Dignissim consectetur nibh commodo auctor lectus. Nullam at vulputate leo egestas ultrices ut. Adipiscing nulla sit mattis enim. Varius in aliquam felis pulvinar fermentum sollicitudin leo egestas urna. Eget quam ut consectetur nibh diam cras aliquam quis. Amet nam risus tristique iaculis lacus nisl quis quam.
                                Quam sit justo sed et. Viverra luctus sed tincidunt nisl nibh. Eget enim aenean auctor auctor integer in erat ut vivamus. In pellentesque luctus sit duis dictumst mi nisl pellentesque non. Interdum augue blandit molestie posuere lectus leo sodales blandit. Quam cursus dui maecenas elementum cursus tortor sed hac. Nec arcu commodo ipsum id malesuada nunc praesent. At blandit pretium feugiat senectus enim elit. Sociis elementum fusce pharetra elit sodales cras sem velit eget. Commodo consequat pulvinar amet in netus malesuada scelerisque elit vitae. Purus donec massa consectetur quisque dictumst ac eleifend. Mi metus tincidunt magna facilisis ultrices vestibulum quis pharetra id. Sit a praesent in cursus vulputate metus interdum.
                                Vivamus enim amet aliquet elementum sed vel morbi aliquet cursus. Hac risus nulla nulla ante. Iaculis nisi libero lectus turpis viverra morbi. Sapien pretium bibendum dictum lectus consectetur proin egestas. Facilisi ullamcorper urna nunc arcu elementum pellentesque elit. Viverra a lobortis feugiat cras netus in est egestas. Lorem leo enim porttitor purus.
                                Sapien adipiscing tincidunt est integer. Et tristique diam urna ante dictumst mollis. Ultricies in eget sed malesuada enim elementum consectetur. Penatibus in semper egestas eget odio in tincidunt feugiat dictumst. Tempor varius donec urna ligula purus non vitae. Sed risus elementum nisl suspendisse id consequat accumsan adipiscing.
                                Urna sagittis ut gravida vel molestie amet viverra cursus. Sit mauris rutrum ipsum diam pulvinar varius tristique odio cras. Eu imperdiet faucibus et hendrerit turpis laoreet eu. Egestas tempus risus tincidunt dignissim pretium. Dui aliquam enim ut aliquam.
                            </p>
                        </div>

                        <div className={"bg-grey px-16 py-10"}>
                            <h1 className={"italic text-black2 text-2xl font-bold"}>
                                Lorem ipsum dolor sit amet consectetur. Porttitor aliquam tempor tellus sit volutpat.
                            </h1>

                            <h5 className={"text-primary font-bold text-[16px] pt-3"}>by Asha Gray</h5>
                        </div>

                        <div className={"py-7"}>
                            <h1 className={"font-bold text-black2 text-2xl"}>
                                Comments (15)
                            </h1>

                            <div className={"flex py-10 flex-col gap-y-6"}>  {/* contains all of the comments  */}

                                <Comment name={"Edward Stiedemann"} last_seen={"1 hour ago"}
                                         body={"Lorem ipsum dolor sit amet consectetur. Eu nascetur aliquam feugiat mattis\n" +
                                             "                    ullamcorper diam turpis tempus hac. Enim porta lectus integer aliquam\n" +
                                             "                    sollicitudin. Duis pulvinar aliquam sed mi a leo ut. Sollicitudin sed\n" +
                                             "                    vestibulum nibh nunc. Quisque eu faucibus aliquam habitasse posuere cursus suspendisse eget. Nunc\n" +
                                             "                    commodo viverra id aliquet urna nibh quis nibh. Id faucibus feugiat a vestibulum montes lacinia\n" +
                                             "                    ultrices nunc. Eros nullam sit proin volutpat."}/>

                                <Comment mine={true} name={"Edward Stiedemann"} last_seen={"1 hour ago"}
                                         body={"Lorem ipsum dolor sit amet consectetur. Eu nascetur aliquam feugiat mattis\n" +
                                             "                    ullamcorper diam turpis tempus hac. Enim porta lectus integer aliquam\n" +
                                             "                    sollicitudin. Duis pulvinar aliquam sed mi a leo ut. Sollicitudin sed\n" +
                                             "                    vestibulum nibh nunc. Quisque eu faucibus aliquam habitasse posuere cursus suspendisse eget. Nunc\n" +
                                             "                    commodo viverra id aliquet urna nibh quis nibh. Id faucibus feugiat a vestibulum montes lacinia\n" +
                                             "                    ultrices nunc. Eros nullam sit proin volutpat."}/>

                                <Comment name={"Edward Stiedemann"} last_seen={"1 hour ago"}
                                         body={"Lorem ipsum dolor sit amet consectetur. Eu nascetur aliquam feugiat mattis\n" +
                                             "                    ullamcorper diam turpis tempus hac. Enim porta lectus integer aliquam\n" +
                                             "                    sollicitudin. Duis pulvinar aliquam sed mi a leo ut. Sollicitudin sed\n" +
                                             "                    vestibulum nibh nunc. Quisque eu faucibus aliquam habitasse posuere cursus suspendisse eget. Nunc\n" +
                                             "                    commodo viverra id aliquet urna nibh quis nibh. Id faucibus feugiat a vestibulum montes lacinia\n" +
                                             "                    ultrices nunc. Eros nullam sit proin volutpat."}/>


                            </div>


                            <div className={"my-2 flex  items-center"}>
                                <button
                                    className={"text-white bg-primary2 hover:bg-primary3 rounded-md py-3 px-5 font-bold text-[16px]"}>
                                    Load 12 More Comments
                                </button>
                            </div>

                            <form onSubmit={(e) => submitComment(e)}>
                                <div
                                    className={"md:px-16 my-16 py-10 flex flex-col gap-y-3 border-t-[1px] border-dark"}> {/* Form box begins here */}
                                    <h1 className={"text-dark font-[900] text-[28px]"}>Leave a Comment</h1>

                                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-3"}>
                                        <div className={"flex flex-col"}>
                                            <h4 className={"font-bold text-[16px] text-dark"}>
                                                Name
                                            </h4>
                                            <div>
                                                <input
                                                    ref={nameRef}
                                                    type={"text"}
                                                    className={"border-[1px] focus-visible:outline-0 border-dark rounded-md w-full py-2 px-3"}/>
                                            </div>
                                        </div>

                                        <div className={"flex flex-col"}>
                                            <h4 className={"font-bold text-[16px] text-dark"}>
                                                Email
                                            </h4>
                                            <div>
                                                <input
                                                    ref={emailRef}
                                                    type={"email"}
                                                    className={"border-[1px] focus-visible:outline-0 border-dark rounded-md w-full py-2 px-3"}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"flex flex-col"}>
                                        <h4 className={"font-bold text-[16px] text-dark"}>
                                            Comment
                                        </h4>
                                        <div>
                                        <textarea
                                            ref={bodyRef}
                                            className={"border-[1px] focus-visible:outline-0 border-dark rounded-md w-full py-2 px-3"}/>
                                        </div>
                                    </div>

                                    <div className={"flex items-center"}>
                                        <button
                                            type={'submit'}
                                            className={"text-white text-center  bg-primary2 hover:bg-primary3 rounded-md py-2 px-2 font-bold text-sm"}>
                                            Post Comment
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className={"w-full my-16"}>
                                <div className={"flex items-center justify-between"}>
                                    <h1 className={"w-fit text-dark font-bold text-[33px]"}>All Articles</h1>

                                    <div className={"pe-2 flex items-center"}>
                                        <a className={"text-primary2 font-bold text-end text-[16px]"} href={"#"}>See
                                            More Articles</a>
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
                                                <a href={`/about/blog/${index}`}>
                                                    <img className={"scale-95  hover:scale-100 duration-200"}
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
                                                </a>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
