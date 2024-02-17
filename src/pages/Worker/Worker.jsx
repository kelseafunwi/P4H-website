import {Hero} from './Hero.jsx';
import {Footer} from "../../Components/Footer.jsx";
import {GetStarted} from "./GetStarted.jsx";
import {JoinUs} from "./JoinUs.jsx";
import {WorkWithUs} from "./WorkWithUs.jsx";

export const Worker = () => {
    return (
        <>
            <Hero />
            <GetStarted />
            <JoinUs />
            <WorkWithUs />
            <Footer />
        </>
    )
}
