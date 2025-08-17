import React from "react";
import "./Header.css";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <a href="/">
          <img className="logo" src="/logoKC.png" alt="logo" />
        </a>

        <nav>
          <ul className="nav_links">
            <li className="nav_element">
              <a href="#about" className="nav_link">
                O nás
              </a>
            </li>
            <li className="nav_element">
              <a href="#services" className="nav_link">
                Služby
              </a>
            </li>
            <li className="nav_element">
              <a href="#forLease" className="nav_link">
                Proč u nás
              </a>
            </li>
            <li className="nav_element">
              <a href="#form" className="nav_link">
                Kontakt
              </a>
            </li>
            <li className="nav_element">
              <a href="#map" className="nav_link">
                Kde nás najdete
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav_hamburger">
          <HamburgerMenu />
        </nav>
      </div>
    </header>
  );
};
