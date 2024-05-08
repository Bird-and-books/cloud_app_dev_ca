
import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
    <div>
      <nav className="navbar-main">
        <NavLink to="/">List of Articles</NavLink> 
        <NavLink to="/articles/new">New Article</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

