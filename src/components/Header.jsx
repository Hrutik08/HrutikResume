import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Hrutik Mhatre</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Technologies</HashLink>
        <HashLink to={"/#Projects"}>Projects</HashLink>
        <Link to={"/services"}>Services</Link>
        <Link to={"/Test"}>Test</Link>
      </main>
    </nav>
  );
};

export default Header;