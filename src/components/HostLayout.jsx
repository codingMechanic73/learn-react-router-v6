import { Outlet, Link } from "react-router-dom";

const HostLayout = () => {
    return (
        <div>
            <nav>
                <Link to="income">Income</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default HostLayout;