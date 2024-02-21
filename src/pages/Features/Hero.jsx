import heroImage from '/img-features-hero.png';

export const Hero = () => {
    return (
        <div className={"md:px-16 py-5 flex flex-col md:flex-row items-center justify-center bg-cover bg-top lg:bg-bottom bg-[url('/featureHeroBg.svg')]"}>
            <div className={"w-[70%] order-2 md:order-1"}>
                <img src={heroImage} className={"w-full"} alt={"Hero Image"}/>
            </div>
            <div className={"flex order-1 md:order-2 text-white items-center px-5"}>
                <div className={"ps-2 sm:ps-[13%] py-6 gap-y-4 flex flex-col max-w-[750px] justify-center"}>
                    <h2 className={"font-bold text-4xl md:text-4xl leading-10"}>
                        The Best Hiring Platform for Professionals
                    </h2>
                    <p className={"text-sm"}>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                    </p>
                </div>
            </div>
        </div>
    )
}
