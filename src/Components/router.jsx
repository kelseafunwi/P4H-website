import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout.jsx";
import {Worker} from "../pages/Worker/Worker.jsx";
import {Features} from "../pages/Features.jsx";
import {Faqs} from "../pages/Faqs.jsx";
import {Download} from "../pages/Download.jsx";
import {About} from "../pages/About.jsx";
import {Contact} from "../pages/Contact.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Worker />} />
                <Route path="/about" element={<About />} />
                <Route path="/download" element={<Download />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/features" element={<Features />} />
                <Route path="/worker" element={<Worker />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Route>
    )
)

export default router