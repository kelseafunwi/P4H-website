import {Suspense ,lazy} from "react";
import {Loader} from "../../Components/Loader.jsx";
import {AnimatePresence} from "framer-motion";

const Getting =  lazy(() => import('../Home/Getting.jsx'));
const Hero =  lazy(() => import('./Hero.jsx'));
const Client =  lazy(() => import('./Client.jsx'));
const Customize =  lazy(() => import('./Customize.jsx'));
const Promote =  lazy(() => import('./Promote.jsx'));
const CardsSection =  lazy(() => import('./CardsSection.jsx'));

export default function Features (){
    return (
        <div className={"bg-lightGray"}>
            <AnimatePresence>
                <Suspense fallback={<Loader />}>
                    <Hero />
                    <Client />
                    <Customize />
                    <Promote />
                    <CardsSection />
                    <Getting />
                </Suspense>
            </AnimatePresence>
        </div>
    )
}
