import "./header.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import { Breeds } from "../Breeds/breeds";
import HomePage from "../Homepage/HomePage";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/breeds">breeds</Link>
        <Link to="/">Go Home</Link>
      </nav>
      
    </header>
  );
};

export default Header;
