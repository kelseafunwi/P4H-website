import PropTypes from "prop-types";
import {useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';
import {MinusIcon, PlusIcon} from 'lucide-react'

export const FunctionalCard = ({title, header, list, styling, appendHeader}) => {

    const [listActiveIndex, _setListActiveIndex] = useState(0);

    const setListActiveIndex = (value) => {
        if (listActiveIndex === value) {
            _setListActiveIndex(-1);
        } else {
            _setListActiveIndex(value);
        }
    }

    return (
        <div className={"px-5 lg:px-0 md:min-h-[400px] lg:max-w-[430px]"}>
            <div className={`w-fit ms-3 rounded-3xl bold-sm font-bold text-primary2 px-2 py-[5px] ${styling === 'light' ? 'bg-white' : ' bg-grey'}`}>{title}</div>

            <h2 className={`mt-0 mb-3 ${styling === 'light' ? 'text-white' : 'text-dark'}`}>{header} {
                appendHeader && appendHeader
            }</h2>

            {
                list.map((item, index) => (
                    <div key={index} className={`flex my-3 px-4 flex-col gap-y-[4px]  ${styling === 'light' ? 'bg-primary' : 'bg-white'}   py-3 shadow-md rounded-xl`}>
                        <div className={"cursor-pointer"} onClick={() => setListActiveIndex(index)}>
                            <div className={"gap-y-1 flex flex-col"}>
                                <div className={"flex gap-x-5"}>
                                    {
                                        index === listActiveIndex ?
                                            (<div className={"flex  items-center "}>
                                                <MinusIcon size={20} color={styling === 'light' ? 'white' : 'black'} />
                                            </div>):

                                            (
                                                <div className={"flex items-center"}>
                                                    <PlusIcon size={20} color={styling === 'light' ? 'white' : 'black'}  />
                                                </div>
                                            )

                                    }
                                    <h6 className={`${styling === 'light' ? 'text-white' : 'text-dark'}`}>{item.title}</h6>
                                </div>
                               <AnimatePresence>
                                   {
                                       index === listActiveIndex &&
                                       <motion.p
                                           initial={{ height: 0, opacity: 0}}
                                           animate={{ height: 'fit-content', opacity: 1}}
                                           exit={{ height: 0, opacity: 0}}
                                           className={`${styling === 'light' ? 'text-white' : 'text-dark'} overflow-hidden`}>
                                           {item.body}
                                       </motion.p>
                                   }
                               </AnimatePresence>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

FunctionalCard.propTypes = {
    title: PropTypes.string,
    header: PropTypes.string,
    list: PropTypes.array,
    styling: PropTypes.string,
    appendHeader: PropTypes.node
}