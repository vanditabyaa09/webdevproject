import {Footer} from '../UI/Footer.jsx';
import {Headers} from '../UI/Headers.jsx';
import {Outlet} from "react-router-dom";

export const AppLayout = () => {
    return <>
        <Headers />
        <Outlet />
        <Footer />
    </>
}