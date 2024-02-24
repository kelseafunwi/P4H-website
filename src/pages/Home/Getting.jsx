import { AppStoreButton, PlayStoreButton} from "../../Components/GetButtons.jsx";

export default function Getting () {
    return (
        <div className={"py-6 my-7 flex items-center justify-center"}>
            <div className={"w-[90%] py-20 text-dark text-center shadow-lg bg-lightGray"}>
                <h1 className={"font-bold text-4xl"}>
                    Get <span className={"text-primary2"}>Pro</span><span className={"text-secondary"}>4</span><span className={"text-primary2"}>Home</span> App Now
                </h1>
                <p className={"text-xs  mt-2"}>
                    And start Finding the right professionals or advertise your services
                </p>

                <div className={"flex justify-center items-center mt-6"}>
                    <div className={"flex items-center gap-x-5 mb-3"}>
                        <PlayStoreButton/>
                        <AppStoreButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
