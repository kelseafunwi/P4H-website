import aboutImage from '/images/about/about.png';
import Header from "./Header.jsx";
import {motion} from 'framer-motion'
import {ArrowRight} from "lucide-react";

export default function Us () {
    return (
        <>
            <div>
                <Header text={"About Us"}/>

                <div className={"md:py-10 md:px-16 w-full md:flex justify-center"}>
                    <div className={"grid md:grid-rows-2 lg:w-[40%] md:border-r-2 border-r-dark"}>
                        <motion.div
                            initial={{
                                y: -100,
                            }}
                            animate={{
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            className={"md:flex md:flex-col-reverse"}>
                            <h2 className={"text-dark px-3 py-3 "}>Our Story</h2>
                        </motion.div>

                        <div className={"hidden md:block border-t-2 border-t-dark"}>
                        </div>
                    </div>
                    <motion.div

                        initial={{
                            x: 400,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4
                        }}
                        className={"md:py-9 px-4 md:px-16 md:w-[70%] flex flex-col gap-y-"}>
                        <h2 className={"text-primary3"}>We connect businesses and customers</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Venenatis eget fames eros facilisis nisl platea.
                            Vel sed morbi dignissim enim pulvinar adipiscing tellus. Laoreet elit ultrices quis sed
                            adipiscing aliquet enim cursus feugiat. Suscipit nulla aenean dui risus.
                            Nulla massa sed cursus ipsum lorem cum mauris sagittis convallis. Sagittis id eget morbi
                            enim suspendisse id amet. Pretium dolor adipiscing duis suspendisse quam lorem lectus
                            rhoncus ut. In malesuada enim venenatis eu. Vulputate leo ut eget facilisis ultrices ac
                            nibh iaculis cras. Amet pellentesque tincidunt enim dolor congue nibh at porttitor.
                            Risus etiam aliquet lectus id aliquet. Vel iaculis ac amet rhoncus id. Eleifend viverra
                            turpis libero integer. Interdum commodo vestibulum aenean consectetur at lorem egestas
                            cursus. Pretium purus orci id justo nunc lacus. Nam lacus tincidunt tellus nec. Euismod
                            senectus sit adipiscing enim nunc. Luctus adipiscing pretium rhoncus tellus ipsum varius
                            bibendum sed.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className={"flex my-3 items-center py-10 justify-center"}>
                <div className={"md:px-14 w-full md:flex justify-center"}>
                    <motion.div
                        initial={{
                            x: -200,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        className={"flex py-3 flex-col gap-y-5 items-center px-5"}>
                        <div
                            className={`bg-white z-10  rounded-xl  about-us-card-shadow border-b-4 border-primary2 px-6 py-10  relative`}>
                            <h4 className={"font-bold text-xl text-center text-dark"}>
                                Our Mission
                            </h4>
                            <p className={"text-center pt-2 text-dark "}>
                                Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                                dignissim nisl turpis laoreet neque quis.
                            </p>
                        </div>

                        <div
                            className={`bg-white z-10  rounded-xl  about-us-card-shadow border-b-4 border-secondary px-6 py-10  relative`}>
                            <h4 className={"font-bold text-center text-xl text-dark"}>
                                Our Vision
                            </h4>
                            <p className={"text-center pt-2 text-dark "}>
                                Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                                dignissim nisl turpis laoreet neque quis.
                            </p>
                        </div>

                        <div
                            className={`bg-white z-10  rounded-xl  about-us-card-shadow border-b-4 border-dark px-6 py-10  relative`}>
                            <h4 className={"font-bold text-center text-xl text-dark"}>
                                Our Values
                            </h4>
                            <p className={"text-center pt-2 text-dark "}>
                                Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                                dignissim nisl turpis laoreet neque quis.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        whileInView={{
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <img loading={"lazy"} alt={"The about image."} src={aboutImage}/>
                    </motion.div>
                </div>
            </div>

            <div className={"px-2 md:px-16 grid sm:grid-cols-2 gap-y-3 md:grid-cols-3 gap-x-4 py-10"}>
                <div
                    className={"bg-cover bg-left relative dark-background-color rounded-xl hover:scale-105 bg-no-repeat bg-[url(/images/about/us-blog.jpeg)]"}>
                    <div className={"ps-8 relative text-white py-8"}>
                        <h4 className={"text-white "}>Blog</h4>
                        <a href={"#"} className={"font-bold pt-4 flex items-center gap-x-10"}>Visit Our Blog <ArrowRight
                            size={30}/></a>
                    </div>
                </div>

                <div
                    className={"bg-cover bg-left relative dark-background-color rounded-xl hover:scale-105 bg-no-repeat bg-[url(/images/about/us-contact.jpeg)]"}>
                    <div className={"ps-8 relative text-white py-8"}>
                        <h4 className={"text-white "}>Contact</h4>
                        <a href={"#"} className={"font-bold pt-4 flex items-center gap-x-10"}>Get in Touch with Us <ArrowRight
                            size={30}/></a>
                    </div>
                </div>

                <div
                    className={"bg-cover bg-left relative dark-background-color rounded-xl hover:scale-105 bg-no-repeat bg-[url(/images/about/us-team.jpeg)]"}>
                    <div className={"ps-8 relative text-white py-8"}>
                        <h4 className={"text-white "}>The Team</h4>
                        <a href={"#"} className={"font-bold pt-4 flex items-center gap-x-10"}>Meet the Experts <ArrowRight
                            size={30}/></a>
                    </div>
                </div>
            </div>


        </>
    )
}
