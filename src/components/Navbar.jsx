import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className=" text-3xl font-extrabold">
        Ionikdev
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          is
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-white"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
