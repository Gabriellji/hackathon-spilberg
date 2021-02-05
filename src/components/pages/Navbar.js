import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <button><Link to="/employee">Employee</Link></button>
    <button><Link to="/manager">Manager</Link></button>
  </nav>
);

export default Navbar;
