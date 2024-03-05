import PropTypes from "prop-types";
import {motion} from 'framer-motion'

export default function Header ({text}) {
    return (
        <div className={" py-20 flex justify-center before:bg-secondary2 bg-grey"}>
            <motion.h2 className={"header-text relative w-fit text-center text-dark before:absolute before:bg-secondary before:w-[72px] before:h-1 before:-bottom-3   "}
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
            </motion.h2>
        </div>
    )
}


Header.propTypes = {
    text: PropTypes.string
}