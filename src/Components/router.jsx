import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout.jsx";
import {Home} from "../pages/Home/Home.jsx";
import {Features} from "../pages/Features/Features.jsx";
import {Features as Features2} from "../pages/Features2/Features.jsx";
import {Faqs} from "../pages/Faqs.jsx";
import {Download} from "../pages/Download/Download.jsx";
import {About} from "../pages/About/About.jsx";
import {Contact} from "../pages/Contact.jsx";
import {Worker} from "../pages/Worker/Worker.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/worker" element={<Worker />} />
                <Route path="/about" element={<About />} />
                <Route path="/download" element={<Download />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features2" element={<Features2 />} />
                <Route path="/worker" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Route>
    )
)

export default router