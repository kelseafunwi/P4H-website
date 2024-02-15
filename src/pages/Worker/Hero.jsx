import HeroImage from '/hero.png';
import {motion} from "framer-motion";
import playStoreIcon from '/Google_Play-Icon-Logo.wine.svg'

export const Hero = () => {
    return (
        <>
            <div className={"w-full  bg-primary flex justify-center h-fit text-white py-6"}>
                <div className={"md:flex max-w-7xl overflow-hidden justify-between items-center py-5 gap-3"}>
                    <div className={"ps-5 md:ps-2 pt-4 max-w-[500px] pe-1 gap-y-4 flex flex-col justify-between"}>
                        <h2 className={"font-bold text-4xl md:text-4xl leading-10"}>
                            We Help You Find and Hire the right professionals
                        </h2>
                        <p className={"text-sm"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                            curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>
                        <div className={"flex items-center gap-x-5 mb-3"}>
                            <button
                                className={"bg-dark hover:opacity-65 flex items-center gap-x-2 columns-2 rounded-xl px-2 md:px-5 py-1"}>
                            <span>
                                <svg width="24" height="29" viewBox="0 0 24 29" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.083 9.8915C22.954 9.9725 19.8825 11.677 19.8825 15.4565C20.0275 19.767 23.7585 21.2785 23.8225 21.2785C23.7585 21.3595 23.259 23.338 21.78 25.412C20.6065 27.199 19.3035 29 17.325 29C15.443 29 14.7675 27.8095 12.596 27.8095C10.264 27.8095 9.60404 29 7.81854 29C5.84004 29 4.44054 27.1025 3.20254 25.3325C1.59454 23.016 0.227537 19.381 0.179037 15.891C0.146537 14.0415 0.501037 12.2235 1.40104 10.6795C2.67154 8.5235 4.93954 7.0605 7.41654 7.012C9.31404 6.948 11.003 8.315 12.1615 8.315C13.2715 8.315 15.3465 7.012 17.694 7.012C18.7075 7.013 21.41 7.318 23.083 9.8915ZM12.001 6.6425C11.663 4.9535 12.596 3.2645 13.4645 2.187C14.5745 0.8845 16.3275 0 17.839 0C17.9355 1.689 17.324 3.3455 16.231 4.552C15.25 5.855 13.561 6.8355 12.001 6.6425Z"
                                        fill="#F7F7F7"/>
                                </svg>
                            </span>
                                <div className={"font-normal text-nowrap py-3 text-start"}>
                                    <p className={"uppercase text-[8px]"}>Download on the</p>
                                    <p className={"font-bold text-white leading-3"}>App Store</p>
                                </div>
                            </button>

                            <button
                                className={"bg-dark hover:opacity-65 flex items-center gap-x-2 columns-2 rounded-xl px-2 md:px-5 py-1"}>
                            <span>

                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.99205 2.67466C7.19605 1.672 5.07005 2.51866 4.30005 4.21533L16.084 16L22.0934 9.99066L8.99205 2.67466Z"
                                        fill="url(#paint0_linear_261_21466)"/>
                                    <path
                                        d="M22.0934 22.0093L16.084 16L4.30005 27.7847C5.07072 29.482 7.19672 30.328 8.99205 29.326L22.0934 22.0093Z"
                                        fill="url(#paint1_linear_261_21466)"/>
                                    <path
                                        d="M27.6127 18.9287C28.7593 18.2887 29.3327 17.1447 29.3333 16C29.3327 14.8553 28.7593 13.7107 27.6127 13.0713L22.0933 9.99066L16.084 16L22.0933 22.0093L27.6127 18.9287Z"
                                        fill="url(#paint2_linear_261_21466)"/>
                                    <path
                                        d="M4.3 4.21533C4.112 4.632 4 5.10133 4 5.60533V26.3913C4 26.8987 4.10933 27.3667 4.3 27.7847L16.0827 15.998L4.3 4.21533Z"
                                        fill="url(#paint3_linear_261_21466)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_261_21466" x1="12.068" y1="2.16266" x2="16.8647"
                                                    y2="23.16"
                                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#35AB4A"/>
                                    <stop offset="0.297" stopColor="#31A145"/>
                                    <stop offset="0.798" stopColor="#288739"/>
                                    <stop offset="1" stopColor="#237A33"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_261_21466" x1="12.772" y1="15.908" x2="14.1294"
                                                    y2="44.6207"
                                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F14E5D"/>
                                    <stop offset="0.499" stopColor="#EA3D4F"/>
                                    <stop offset="1" stopColor="#E12138"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_261_21466" x1="21.962" y1="9.93266" x2="24.3607"
                                                    y2="29.0747"
                                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD844"/>
                                    <stop offset="0.519" stopColor="#FFC63F"/>
                                    <stop offset="1" stopColor="#FFB03A"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_261_21466" x1="9.23533" y1="3.934" x2="10.3813"
                                                    y2="28.5407"
                                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0.003" stopColor="#0090E6"/>
                                    <stop offset="1" stopColor="#0065A0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                                <div className={"font-normal text-nowrap py-3 text-start"}>
                                    <p className={"uppercase text-[8px]"}>Download on the</p>
                                    <p className={"font-bold text-white leading-3"}>App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className={"flex items-center justify-end"}>
                        <img src={HeroImage} className={"max-w-[550px]"} alt={"Hero Image"}/>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
