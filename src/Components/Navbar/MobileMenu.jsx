import {ChevronDown, Globe, X} from "lucide-react";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {navbarLinks} from "../../constants/constant.js";
import {NavLink} from "react-router-dom";

export const MobileMenu = ({toggleMenuState}) => {
    return (
        <motion.div
            initial={{
                width: 0,
            }}
            animate={{
                width: 320,
            }}
            exit={{
                width: 0
            }}
            className={" fixed lg:hidden top-0 bottom-0 text-white right-0 z-50 shadow-sm border-l-2 bg-primary"}>
            <div className={"absolute top-10 right-0"}>
                <button onClick={toggleMenuState}
                        className={" flex items-center justify-center pe-4 lg:hidden"}>
                    <X size={32} color={'#E4E4E4'}/>
                </button>
            </div>

            <div className={"px-4 pt-24 w-full"}>
                {
                    navbarLinks.map((item, index) => (
                        <NavLink key={index} className={`flex items-center hover:bg-white rounded-[20px] hover:text-secondary py-2 text-lg ps-5 text-dark`} to={item.link}>
                            {item.eng && <Globe size={24} className={"pe-2"} />}
                            {item.label}
                            {
                                item.dropdownMenu &&
                                <ChevronDown size={35} className={"px-2 text-black"}/>
                            }
                        </NavLink>
                    ))
                }
            </div>
        </motion.div>
    )
}

MobileMenu.propTypes = {
    toggleMenuState: PropTypes.func,
};
