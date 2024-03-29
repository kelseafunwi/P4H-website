import Header from "./About/Header.jsx";

export default function TermsOfService () {
    return (
        <>
            <Header text={"Terms Of Service"} />

            <div className={"flex  items-center justify-center w-full py-10"}>
                <div className={"w-[95%] flex flex-col lg:flex-row gap-x-5"}>
                    <div className={"min-w-[350px] px-4 py-3"}>
                        <div className={"text-primary2 bold-lg font-bold cursor-pointer my-2 border-b-[1px] border-y-dark px-2 py-4 w-full"}>
                            Your Agreement
                        </div>

                        <div className={"text-black cursor-pointer my-2 border-b-[1px] border-y-dark text-[16px] px-2 py-4 w-full"}>
                            Change of Terms of Use
                        </div>

                        <div className={"text-black my-2 cursor-pointer border-b-[1px] border-y-dark text-[16px] px-2 py-4 w-full"}>
                            Access and Use of the Services
                        </div>
                    </div>

                    <div className={"text-lightGray"}>
                        <div className={"px-3 py-2"}>
                            <h6 className={"text-lightGray font-bold"}>
                                1. Your Agreement
                            </h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>

                        <div className={"px-3 py-2"}>
                            <h6 className={"text-lightGray font-bold"}>
                                2. Change of Terms of Use
                            </h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>

                        <div className={"px-3 py-2"}>
                            <h6 className={"text-lightGray font-bold"}>
                                3. Access and Use of the Services
                            </h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
