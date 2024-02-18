import PropTypes from "prop-types";
import {useState} from "react";
import {motion} from 'framer-motion';
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
            <span className={`ms-3 rounded-3xl font-bold text-primary2 px-2 bg-grey`}>{title}</span>
            <h1 className={`mt-0 mb-3 text-[30px] md:text-[40px] font-bold ${styling === 'light' ? 'text-white' : 'text-dark'} md:leading-[48px]`}>{header} {
                appendHeader && appendHeader
            }</h1>

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
                                    <span className={`${styling === 'light' ? 'text-white' : 'text-dark'} font-bold text-[18px] `}>{item.title}</span>
                                </div>
                                {
                                    index === listActiveIndex &&
                                    <motion.p
                                        initial={{ height: 0, opacity: 0}}
                                        animate={{ height: 'fit-content', opacity: 1}}
                                        className={`${styling === 'light' ? 'text-white' : 'text-dark'} text-[16px] overflow-hidden`}>
                                        {item.body}
                                    </motion.p>
                                }
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
    styling: 'dark' | 'light',
    appendHeader: PropTypes.node
}