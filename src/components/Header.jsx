import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to=".">
        #VanLife
      </Link>
      <nav className="host-nav">
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "active-style" : null)}
        >
          Hosts
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-style" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active-style" : null)}
        >
          Vans
        </NavLink>
        <a onClick={() => localStorage.clear()}>Logout</a>
      </nav>
    </header>
  );
};

export default Header;
