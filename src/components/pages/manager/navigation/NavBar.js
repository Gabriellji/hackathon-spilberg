import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Link to="/manager"> Employees Ideas</Link>
    <Link to="/manager/favorites">Favorites</Link>
    <Link to="/manager/profiles">Employees profiles</Link>
  </div>
);

export default Navbar;
