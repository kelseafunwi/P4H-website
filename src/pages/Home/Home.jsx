import { Suspense, lazy} from "react";
const Hero = lazy(() => import('./Hero.jsx'));
const Search = lazy(() => import('./Search.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks.jsx'));
const CustomerSaying =  lazy(() => import('./CustomerSaying.jsx'));
const Getting =  lazy(() => import('./Getting.jsx'));
import {Loader} from "../../Components/Loader.jsx";

export default function Home () {
    return (
        <Suspense fallback={<Loader />}>
            <Hero />
            <Search />
            <HowItWorks />
            <CustomerSaying />
            <Getting />
        </Suspense>
    )
}
