import featurePortfolioIcon from '/featurePortfolioIcon.svg';
import featuresUserIcon from '/featuresUserIcon.svg'
import serviceIcon from '/serviceIcon.svg';
import fandAndhireIcon from '/fandAndHireProfessionalsicon.svg';
import sentIcon from '/sentIcon.svg';
import keepTrackIcon from '/keepTrackIcon.svg';
import manageNotificationIcon from '/manageNotificationIcon.svg';

export default function CardsSection(){

    const cardList = [
        {
            icon: featurePortfolioIcon,
            title: "Display a portfolio of your past work",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac."
        },
        {
            icon: serviceIcon,
            title: "Add a list of services you offer",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac."
        },
        {
            icon: fandAndhireIcon,
            title: "Add a list of services you offer",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac."
        },
        {
            icon: sentIcon,
            title: "Add a list of services you offer",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac."
        },
        {
            icon: keepTrackIcon,
            title: "Keep track of all your customers",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac."
        },
        {
            icon: manageNotificationIcon,
            title: "Manage Notifications , Get the Latest Activity Updates",
            body: "Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac."
        }
    ]

    return (
        <div className={"flex  bg-grey py-24 items-center justify-center"}>
            <div
                className={"md:w-[90%]  lg:w-[80%] grid sm:px-5  even:border-secondary  gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4"}>
                {
                    cardList.map((card, index) => (
                        <div key={index} className={`bg-white z-10  rounded-xl  shadow-md border-b-4 ${index === 0 || (index % 2 === 0) ? 'border-primary2' : 'border-secondary'}   px-6 py-10  relative`}>
                            <div
                                className={"p-4 absolute z-20 shadow-lg  flex items-center justify-center w-[80px] h-[80px] bg-white rounded-[50%] -top-[40px] left-[calc(43%)]"}>
                                <img src={card.icon} alt={"image"}/>
                            </div>
                            <h1 className={"font-bold text-xl text-dark"}>
                                {card.title}
                            </h1>
                            <p className={"text-center pt-2 text-dark "}>
                                {card.body}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
