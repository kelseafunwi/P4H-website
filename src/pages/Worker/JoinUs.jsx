import logo1 from '/dummy/logo-dumm1.png';
import logo2 from '/dummy/logo-dummy2.png';
import logo3 from '/dummy/logo-dummy3.png';
import logo4 from '/dummy/logo-dummy4.png';
import logo5 from '/dummy/logo-dummy5.png';

export const JoinUs = () => {
    return (
        <div className={"flex items-center py-8  justify-center bg-grey"}>
            <div className={"w-[90%]"}>
                <div>
                    <h2 className={"text-dark font-bold text-center text-4xl"}>
                        Join over 20+ companies <br /> working with us
                    </h2>
                </div>
                <div className={"grid grid-cols-3 gap-y-5 sm:grid-cols-5 mt-4 pb-5  items-center gap-x-9"}>
                    <img className={"w-[150px] h-auto"} src={logo1} alt={"First Logo Item"} />
                    <img className={"w-[150px] h-auto"} src={logo2} alt={"First Logo Item"} />
                    <img className={"w-[150px] h-auto"} src={logo3} alt={"First Logo Item"} />
                    <img className={"w-[150px] h-auto"} src={logo4} alt={"First Logo Item"} />
                    <img className={"w-[150px] h-auto"} src={logo5} alt={"First Logo Item"} />
                </div>
            </div>
        </div>
    )
}
