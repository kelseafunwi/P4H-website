import homeTestimonial from '/homeTestimonial.png';
import uniformImage from '/uniformImage.png'
import quoteIcon from '/quoteIcon.png'

export default function CustomerSaying () {
    return (
        <div className={" md:flex mb-5 text-white "}>
            <img src={homeTestimonial} alt={"Testimonial image"} className={"w-[80%] md:w-[40%] z-10"}/>
            <div className={"flex flex-col items-center justify-center z-40 -ml-12 "}
                 style={{
                    backgroundImage: "url('/uniformImage.png')",
                     backgroundSize: 'cover',
                }}
            >
                <div className={"w-[80%] md:w-[60%] ps-4 md:ps-0 py-10 md:py-6"}>
                    <h1 className={"font-bold text-4xl text-start relative before:absolute before:bg-secondary before:left-[0] before:w-[72px] before:h-1 before:-bottom-3"}>What
                        Our Customers Saying
                    </h1>
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
                            <h3>Amanda Breitenberg</h3>
                            <h5 className={"text-secondary text-lg  font-semibold"}>Hermann - Ratke</h5>
                        </div>
                        <div>
                            <img src={quoteIcon} alt={"Quote Icon"} width={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
