import testimonialImage from '/images/home/testimonial.png';
import quoteIcon from '/icons/quote.png'

export default function CustomerSaying () {
    return (
        <div className={" md:flex mb-5 text-white "}>
            <img src={testimonialImage} loading={"lazy"} alt={"Testimonial image"} className={"w-full sm:w-[80%] md:w-[40%] z-10"}/>
            <div className={"flex flex-col items-center  justify-center z-40 -ml-12 "}
                 style={{
                     backgroundPosition: 'top',
                    backgroundImage: "url('/images/home/uniform-background.png')",
                     backgroundSize: 'cover',
                }}
            >
                <div className={"w-[80%] md:w-[60%] ps-4 md:ps-0 py-10 md:py-6"}>
                    <h2 className={"text-start text-white relative before:absolute before:bg-secondary before:left-[0] before:w-[72px] before:h-1 before:-bottom-3"}>What
                        Our Customers Saying
                    </h2>
                    <p className={"pt-7 font-normal text-[22ox] text-white italic"}>
                        Pulvinar faucibus augue nibh in purus tempus et volutpat blandit. Enim diam risus praesent
                        placerat et urna volutpat. Tortor tempor mus ut bibendum neque ultricies a netus tellus.
                        Dignissim porttitor orci ultrices at amet. In sed dolor eget in amet imperdiet duis nunc
                        neque.
                        Pharetra mi amet nisl feugiat. Cursus integer donec lorem malesuada sollicitudin amet. Ipsum
                        suspendisse aliquam eu feugiat nec. Viverra nunc amet euismod vel at sit. Metus est viverra
                        est
                        ultricies integer ornare sed. Proin quam in adipiscing feugiat turpis consequat sed.
                        Dignissim
                        fames volutpat neque gravida tincidunt euismod ac nam.
                    </p>

                    <div className={"pt-5 flex justify-between items-center gap-x-5"}>
                        <div>
                            <p className={"text-white"}>Amanda Breitenberg</p>
                            <div className={"text-secondary bold-md  font-semibold"}>Hermann - Ratke</div>
                        </div>
                        <div>
                            <img loading={"lazy"} src={quoteIcon} alt={"Quote Icon"} width={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
