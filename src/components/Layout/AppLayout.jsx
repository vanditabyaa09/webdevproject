import {Footers} from '../UI/Footers';
import {Headers} from '../UI/Headers.jsx';
import {Outlet} from "react-router-dom";

export const AppLayout = () => {
    return <>
        <Headers />
        <Outlet />
        <Footers />
    </>
}