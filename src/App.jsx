import './App.css'
import {RouterProvider} from "react-router-dom";
import router from './Components/router.jsx'

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
