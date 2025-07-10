import React from "react";
import "./Header.css";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <a href="/">
          <img className="logo" src="/logoKC.png" alt="logo" />
        </a>
        <nav>
          <HamburgerMenu />
        </nav>
      </div>
    </header>
  );
};
