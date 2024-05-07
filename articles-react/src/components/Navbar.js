
import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
    <div>
      <nav className="navbar-main">
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/Blog">Journal</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

