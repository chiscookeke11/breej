import { Outlet } from "react-router-dom";
import Footer from "../components/landing_page_components/Footer";
import Navbar from "../components/landing_page_components/Navbar";




export default function LandingLayout() {
    return (
        < div className="relative" >
            <Navbar />

            <main>
                <Outlet />
            </main>


            <Footer />
        </div>
    )
}