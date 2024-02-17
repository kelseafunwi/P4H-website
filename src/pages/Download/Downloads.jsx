import downloadHero from '/downloadHero.png';
import {AppStoreButton, PlayStoreButton} from "../../Components/GetButtons.jsx";

export const Downloads = () => {
    return (
        <div className={"w-[95%] "}>
            <div className={"grid grid-cols-1 md:grid-cols-2 justify-between items-stretch"}>

                <div className={"order-2 md:order-1 mt-5 md:mt-0 items-stretch gap-y-4"}>
                    <div className={"bg-grey"}>
                        <div className={"max-w-[600px] gap-y-3 flex justify-center flex-col items-center py-12"}>
                            <h3 className={"text-center text-primary2 font-bold text-[28px]"}>
                                Pro<span className={"text-secondary"}>4</span>Home<span
                                className={"text-black"}> for Android</span>
                            </h3>
                            <p className={'text-center'}>
                                By downloading Pro4Home, you accept our <a href={'/terms-of-service'}>
                                <br />
                                <span className={"text-primary2"}>terms of service</span></a> and <a
                                href={"/privacy-policy"}><span className={"text-primary2"}>privacy policy</span></a>
                            </p>
                            <PlayStoreButton />
                        </div>
                    </div>
                    <div className={"bg-secondary2"}>
                        <div className={"max-w-[600px] flex gap-y-3 justify-center flex-col items-center  py-12"}>
                            <h3 className={"text-center text-primary2 font-bold text-[28px]"}>
                                Pro<span className={"text-secondary"}>4</span>Home<span
                                className={"text-black"}> for iOS</span>
                            </h3>
                            <p className={'text-center'}>
                                By downloading Pro4Home, you accept our <a href={'/terms-of-service'}>
                                <br />
                                <span className={"text-primary2"}>terms of service</span></a> and <a
                                href={"/privacy-policy"}><span className={"text-primary2"}>privacy policy</span></a>
                            </p>
                            <AppStoreButton />
                        </div>
                    </div>

                </div>

                <div className={"order-1 md:order-2 flex mt-7 md:mt-0 items-center justify-center"}>
                    <img src={downloadHero} alt={"Download Hero"} className={"w-full"}/>
                </div>
            </div>
        </div>
    )
}
