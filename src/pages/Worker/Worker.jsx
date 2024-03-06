import {lazy, Suspense} from "react";
import {Loader} from "../../Components/Loader.jsx";

const Hero = lazy(() => import('./Hero.jsx'));
const GetStarted = lazy(() => import('./GetStarted.jsx'));
const JoinUs = lazy(() => import('./JoinUs.jsx'));
const WorkWithUs = lazy(() => import('./WorkWithUs.jsx'));

export default function Worker ()  {
    return (
        <Suspense fallback={<Loader />}>
            <Hero />
            <GetStarted />
            <JoinUs />
            <WorkWithUs />
        </Suspense>
    )
}
