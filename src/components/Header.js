import React from "react";
import "./Header.css";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src="/LogoKC.png" alt="logo" />
      </a>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};
