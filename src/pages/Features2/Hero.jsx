import professionImage from '/professionalImage.png';
import hero2Image from '/img-features-hero-2.png';

export default function Hero () {
    return (
        <>
            <div
                className={"gap-x-16 md:px-16 md:pt-5 flex flex-col lg:flex-row justify-center bg-cover bg-top md:bg-bottom bg-[url('/public/feature2Background.png')]"}>
                <div className={"flex justify-between text-white items-start lg:py-20 px-5"}>
                    <div className={"ps-2 lg:ps-[13%] py-6 gap-y-7 flex flex-col  md:max-w-[800px] justify-center"}>
                        <h2 className={"font-bold text-4xl md:text-4xl leading-10"}>
                        <span className={"md:text-nowrap"}>
                            The Best Hiring Platform
                        </span> for Professionals
                        </h2>

                        <p className={"text-sm"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim
                            nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet
                            purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>

                        <a href={"/download"}
                           className={"bg-primary2 text-white font-bold w-fit align-middle p-4 rounded-md hover:opacity-70"}>
                            Download Pro4Home App
                        </a>
                    </div>
                </div>

                <div>
                    <img className={"w-full"} src={professionImage} alt={"Hero Image"}/>
                </div>
            </div>
            <div className={"lg:w-[50%] lg:-mt-[250px]" }>
                <img src={hero2Image} className={"w-full"}  alt={"Hero Image."}/>
            </div>
        </>
    )
}
