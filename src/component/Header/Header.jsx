import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/breeds">breeds</Link>
        
      </nav>
      
    </header>
  );
};

export default Header;
