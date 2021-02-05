import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Link to="/ideas"> Employees Ideas</Link>
    <Link to="favorites">Favorites</Link>
    <Link to="profiles">Employees profiles</Link>
  </div>
);

export default Navbar;
