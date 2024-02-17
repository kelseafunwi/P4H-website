import workWithUsImage from '/img-for-workers-why-work-with-us.png';
import thumbsUpIcon from '/thumbsUpIcon.svg'
import sellIcon from '/public/sellIcon.svg'
import sell1Icon from '/public/sell1Icon.png';
import imgWorkerPhoneIcon from '/img-for-workers-why-work-with-us-phone.png';

export const WorkWithUs = () => {
    return (
        <div className={"flex items-center py-8 pb-16 justify-center"}>
            <div className={"py-5 sm:w-[90%]"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20 justify-between "}>
                    <div className={"relative "}>
                        <img src={workWithUsImage} className={"max-h-[780px]"} alt={"Work with us image"}/>
                        <div className={"absolute -left-[18%] -bottom-[20%] md:-bottom-[15%]"}>
                            <img className={"w-[51%]"} src={imgWorkerPhoneIcon} alt={"Worker Phone Icon"} />
                        </div>
                    </div>

                    <div className={"px-5 mt-12 md:mt-0"}>
                        <div className={"flex flex-col gap-y-3"}>
                            <h1 className={"text-dark font-bold text-[38px] leading-[48px]"}>Why Work With Us?</h1>
                            <p className={"text-lightGray"}>Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis</p>

                            <div className={"flex flex-col gap-y-6"}>
                                <div className={"flex items-center py-6  gap-x-7 shadow-sm rounded-2xl"}>
                                    <div className={"h-[60px] w-[60px] flex rounded-[50%]"}>
                                        <img src={thumbsUpIcon} alt={"thumps Icon"}/>
                                    </div>
                                    <div className={"max-w-[360px]"}>
                                        <h3 className={"font-bold text-dark"}>Quality Service</h3>
                                        <p className={"text-lightGray text-[14px]"}>Lorem ipsum dolor sit amet
                                            consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl
                                            turpis laoreet neque quis. </p>
                                    </div>
                                </div>

                                <div className={"flex items-center py-6  gap-x-7 shadow-sm rounded-2xl"}>
                                    <div className={"h-[60px] w-[60px] flex rounded-[50%]"}>
                                        <img src={sellIcon} alt={"thumps Icon"}/>
                                    </div>
                                    <div className={"max-w-[360px]"}>
                                        <h3 className={"font-bold text-dark"}>Sell your business</h3>
                                        <p className={"text-lightGray text-[14px]"}>Lorem ipsum dolor sit amet
                                            consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl
                                            turpis laoreet neque quis. </p>
                                    </div>
                                </div>

                                <div className={"flex items-center py-6  gap-x-7 shadow-sm rounded-2xl"}>
                                    <div className={"h-[60px] w-[60px] flex rounded-[50%]"}>
                                        <img src={sell1Icon} alt={"thumps Icon"}/>
                                    </div>
                                    <div className={"max-w-[360px]"}>
                                        <h3 className={"font-bold text-dark"}>Endless profits</h3>
                                        <p className={"text-lightGray text-[14px]"}>Lorem ipsum dolor sit amet
                                            consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl
                                            turpis laoreet neque quis. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
