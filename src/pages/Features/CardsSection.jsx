import featurePortfolioIcon from '/featurePortfolioIcon.svg';
import featuresUserIcon from '/featuresUserIcon.svg'

export default function CardsSection () {
    return (
        <div className={"flex  bg-grey py-16 items-center justify-center"}>
            <div className={"md:w-[90%] lg:w-[75%] grid sm:px-5 grid-cols-1  gap-y-10 sm:grid-cols-2 gap-x-4"}>
                <div className={"bg-white z-10 rounded-xl  shadow-md border-b-4 border-primary2   px-6 py-10  relative"}>
                    <div
                        className={"p-4 absolute z-20 shadow-lg  flex items-center justify-center w-[80px] h-[80px] bg-white rounded-[50%] -top-[40px] left-[calc(43%)]"}>
                        <img loading={"lazy"} src={featurePortfolioIcon} alt={"image"}/>
                    </div>
                    <h1 className={"font-bold text-3xl"}>
                        Display a portfolio of your past work and <span
                        className={"text-primary2"}>Win More Customers</span>
                    </h1>
                    <p className={"text-center pt-2 text-dark "}>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim
                        nisl
                        turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus
                        nisl.
                        Dis libero sagittis quam ut mattis rutrum auctor hac.
                    </p>
                </div>

                <div className={"bg-white z-10 rounded-xl  shadow-md border-b-4 border-secondary      px-6 py-10  relative"}>
                    <div
                        className={"p-5 absolute z-20 shadow-lg  flex items-center justify-center w-[80px] h-[80px] bg-white rounded-[50%] -top-[40px] left-[calc(42%)]"}>
                        <img loading={"lazy"} src={featuresUserIcon} alt={"image"}/>
                    </div>
                    <h1 className={"font-bold text-3xl"}>
                        Outsource some of your tasks to other professionals
                    </h1>
                    <p className={"text-center pt-2 text-dark "}>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim
                        nisl
                        turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus
                        nisl.
                        Dis libero sagittis quam ut mattis rutrum auctor hac.
                    </p>
                </div>
            </div>
        </div>
    )
}
