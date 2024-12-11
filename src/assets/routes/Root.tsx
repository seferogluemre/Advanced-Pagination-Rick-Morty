import { Outlet } from "react-router-dom";
import NavbarComp from "../components/Navbar/Navbar";
const Root = () => {

    return (
        <>
            <NavbarComp />
            <Outlet />
        </>
    )

}

export default Root;