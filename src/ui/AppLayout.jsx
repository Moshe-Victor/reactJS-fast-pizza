import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout() {
    const navigation = useNavigation();
    console.log(navigation);
    const isLoading = navigation.state === "loading";


    return (<div className="grid h-screen grid-rows-[auto_1fr_auto]">
        {isLoading && <Loader/>}

        <Header></Header>
        <div className="overflow-scroll">
            <main className="mx-auto max-w-3xl">
                <Outlet></Outlet>
            </main>
        </div>

        <CartOverview></CartOverview>
    </div>)
}

export default AppLayout;


