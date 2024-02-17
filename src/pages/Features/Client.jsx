import featureWorkerImage from '/img-features-workers.png'
import minusIcon from '/minusIcon.svg';
import plusIcon from '/plusIcon.svg';

export const Client = () => {
    return (
        <div className={"grid px-5 grid-cols-1 md:grid-cols-2 bg-lightGray gap-x-4"}>

            <div className={"flex flex-col py-8 items-center justify-center gap-y-5"}>
                <div className={"md:max-w-[400px]"}>
                    <span className={"ps-7 font-bold text-primary2 "}>Workers</span>
                    <h1 className={"mt-0 mb-3 text-[30px] md:text-[40px] font-bold text-dark md:leading-[48px]"}>Clients Find You on
                        Pro4Home
                    </h1>

                    <div className={"flex flex-col gap-y-[5px] bg-white  py-6 shadow-sm rounded-xl"}>
                        <div className={"gap-x-5 flex items-center"}>
                            <img src={minusIcon} alt={"minus icon"}/>
                            <span className={"text-dark font-bold text-[20px]"}>Some Heading Here</span>
                        </div>
                        <p className={"px-3 text-dark text-[16px]"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                            curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>
                    </div>

                    <div className={"mt-5"}>
                        <div className={"gap-x-5 flex items-center"}>
                            <img src={plusIcon} alt={"minus icon"}/>
                            <span className={"text-dark font-bold text-20px]"}>Some Heading Here</span>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <img className={"w-full"} src={featureWorkerImage} alt={"Feature Worker"}/>
            </div>

        </div>
    )
}
