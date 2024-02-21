import PropTypes from "prop-types";
import {motion} from 'framer-motion'

export const Header = ({text}) => {
    return (
        <div className={" py-20 flex justify-center before:bg-secondary2 bg-grey"}>
            <motion.h1 className={"relative w-fit text-center before:left-[30%] text-dark font-bold text-4xl before:absolute before:bg-secondary before:w-[72px] before:h-1 before:-bottom-3   "}
                initial={{
                    y: 200,
                }}
                       animate={{
                           y: 0
                       }}
                       transition={{
                           duration: 0.7
                       }}
            >
                {text}
            </motion.h1>
        </div>
    )
}


Header.propTypes = {
    text: PropTypes.string
}