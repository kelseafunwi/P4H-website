import {X} from "lucide-react";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {navbarLinks} from "../../constants/constant.js";
import {NavLink} from "react-router-dom";

export const MobileMenu = ({toggleMenuState}) => {
    return (
        <motion.div
            initial={{
                width: 0,
                rotate: '20deg'
            }}
            animate={{
                width: 300,
                rotate: '0deg'
            }}
            exit={{
                width: 0,
                rotate: '20deg',
            }}
            className={"fixed top-0 bottom-0 text-white right-0 z-50 shadow-sm border-l-2 bg-primary w-[300px]"}>
            <div className={"absolute top-10 right-0"}>
                <button onClick={toggleMenuState}
                        className={" flex items-center justify-center pe-4 md:hidden"}>
                    <X size={32} color={'#E4E4E4'}/>
                </button>
            </div>

            <div className={"px-4 pt-24 w-full"}>
                {
                    navbarLinks.map((item, index) => (
                        <NavLink key={index} className={`block py-2 text-lg ps-3 text-dark`} to={item.link}>
                                {item.label}
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
