import {dummyIcons} from "../../constants/constant.js";

export default function JoinUs() {
    return (
        <div className={"flex items-center py-8  justify-center bg-grey"}>
            <div className={"w-[90%]"}>
                <div>
                    <h2 className={"text-dark font-bold text-center text-4xl"}>
                        Join over 20+ companies <br /> working with us
                    </h2>
                </div>
                <div className={"grid grid-cols-3 gap-y-5 sm:grid-cols-5 mt-4 pb-5  items-center gap-x-9"}>
                    {
                        dummyIcons.map((dummyIcon, index) => (
                            <img key={index} loading={"lazy"} className={"w-[150px] h-auto"} src={dummyIcon}
                                 alt={"First Logo Item"}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
