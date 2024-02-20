import {Footer} from "../../Components/Footer.jsx";
import {Hero} from './Hero.jsx';
import {CardsSection} from "./CardsSection.jsx";

export const Features = () => {
    return (
        <div className={"bg-lightGray"}>
            <Hero />
            <CardsSection />
            <Footer />
        </div>
    )
}
