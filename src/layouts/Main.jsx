import { Outlet } from "react-router-dom";
import Navabar from "../shared/Navabar";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div>
            <Navabar></Navabar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;