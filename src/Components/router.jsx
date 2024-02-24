import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Features from "../pages/Features/Features.jsx";
import Features2 from '../pages/Features2/Features.jsx';
import Faqs from "../pages/Faqs.jsx";
import Download from "../pages/Download/Download.jsx";
import Us from "../pages/About/Us.jsx";
import Contact from "../pages/Contact.jsx";
import Worker from "../pages/Worker/Worker.jsx";
import Blogs from "../pages/About/Blogs.jsx";
import Team from "../pages/About/Team.jsx";
import BlogPost from "../pages/About/BlogPost.jsx";
import NotFound from "../pages/NotFound.jsx";
import TermsOfService from "../pages/TermsOfService.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/worker" element={<Worker />} />
            <Route path={'/about'} element={<Us />} />
            <Route path={'/about/us'} element={<Us />} />
            <Route path={'/about/team'} element={<Team />} />
            <Route path={'/about/blog'} element={<Blogs />} />
            <Route path={'/about/blog/:id'} element={<BlogPost />} />
            <Route path="/download" element={<Download />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features2" element={<Features2 />} />
            <Route path="/worker" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService/>} />
            <Route path="/*" element={<NotFound />} />
        </Route>
    )
)
export default router