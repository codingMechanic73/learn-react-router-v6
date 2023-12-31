import { Outlet, NavLink } from "react-router-dom";

export function loader() {
    console.log("hello")
    return "hlloe";
}

const HostLayout = () => {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div>
            <nav className="host-nav">
                <NavLink to="." end style={({ isActive }) => isActive ? activeStyle : null}>Dashboard</NavLink>
                <NavLink to="vans" end style={({ isActive }) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="income" style={({ isActive }) => isActive ? activeStyle : null}>Income</NavLink>
                <NavLink to="reviews" style={({ isActive }) => isActive ? activeStyle : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HostLayout;