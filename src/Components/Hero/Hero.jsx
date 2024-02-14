import HeroImage from '/hero.png';

export const Hero = () => {
    return (
        <>
            <div className={"w-full overflow-hidden py-5 gap-3 md:flex justify-between items-center bg-primary h-fit md:h-[80vh] text-white"}>
                <div className={"ps-28 w-[700px]"}>
                    <h2 className={"font-bold text-4xl md:text-[30px] leading-8"}>
                        We Help You Find and Hire the right professionals
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                    </p>
                </div>
                <div className={"flex items-center justify-end"}>
                    <img src={HeroImage} className={"h-fit"} alt={"Hero Image"} />
                </div>
            </div>
        </>
    )
}
