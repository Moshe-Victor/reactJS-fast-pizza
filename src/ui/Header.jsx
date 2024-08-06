import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";
function Header(){
    return (
        <header  className="flex items-center justify-between bg-yellow-400 px-4 py-3 uppercase border-b-8 border-stone-200 sm:px-6">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
            <SearchOrder></SearchOrder>
            <Username/>
        </header>
    )
}

export default Header;