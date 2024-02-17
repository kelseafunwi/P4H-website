import {Footer} from "../../Components/Footer.jsx";
import {Getting} from "../Home/Getting.jsx";
import {Hero} from './Hero.jsx';
import {Client} from "./Client.jsx";
import {Customize} from "./Customize.jsx";

export const Features = () => {
    return (
        <div className={"bg-lightGray"}>
            <Hero />
            <Client />
            <Customize />
            <Getting />
            <Footer />
        </div>
    )
}
