import { useState } from "react";
import "./header.css";

const Header = ({ updateData }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div onClick={() => updateData("breeds")}>breeds</div>
        <div onClick={() => updateData("categories")}>categories</div>
        <div onClick={() => updateData("votes")}>votes</div>
        <div onClick={() => updateData("favourites")}>favourites</div>
        <div onClick={() => updateData("images")}>images</div>
        <div onClick={() => updateData("Models")}>Models</div>
      </nav>
    </header>
  );
};

export default Header;
