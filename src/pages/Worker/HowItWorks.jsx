import {useState} from "react";

export const HowItWorks = () => {
    const WORKER = 'worker';
    const CLIENT = 'client';

    const [tabState, setTabState] = useState(WORKER);

    return (
        <div className={"flex items-center justify-center"}>
            <div className={"w-full md:w-[90%] bg-white gap-y-5 mb-5 mt-2 flex flex-col items-center"}>
                <h1 className={"how-it-works w-fit text-3xl relative text-dark font-bold before:absolute before:bg-secondary before:left-[30%] before:w-[72px] before:h-1 before:-bottom-2"}>
                    How it Works
                </h1>

                <p className={"text-center text-[16px] max-w-[480px] text-lightGray"}>
                    Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl
                    turpis laoreet neque quis.
                </p>

                <div className={"flex justify-center items-center gap-x-4"}>
                    <button  onClick={() => setTabState(WORKER)} className={`${tabState === WORKER ? 'bg-primary text-white ' : 'text-[#909090] bg-[#F6F6F6]'} text-[16px] text-center px-6 w-[150px] hover:opacity-90 py-2 rounded-tl-2xl rounded-tr-2xl font-bold`}>
                        For workers
                    </button>
                    <button onClick={() => setTabState(CLIENT)} className={`${tabState === CLIENT ? 'bg-primary text-white ' : 'text-[#909090] bg-[#F6F6F6]'}  text-[16px] text-center px-5 py-2 w-[150px] hover:opacity-90 rounded-tl-2xl rounded-tr-2xl font-bold`}>
                        For Clients
                    </button>
                </div>
                <div className={"w-full mt-0 ms-4 flex justify-center gap-x-3 items-center"}>
                    {
                        tabState === WORKER &&
                        <div>
                            I am a worker
                        </div>
                    }

                    {
                        tabState === CLIENT &&
                        <div>
                            I am a Client
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
