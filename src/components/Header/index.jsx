import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-wrapper flex">
      <Link className={"header-logo"} to={"/"}>
        <h1>MyHotelDomain</h1>
      </Link>
      <nav className="navigation flex">
        <NavLink to={"about"}>
          About us
          <div className="underscore"></div>
        </NavLink>
        <NavLink to={"contact"}>
          Contact us
          <div className="underscore"></div>
        </NavLink>
        <NavLink to={"poolbar"}>
          Pool Bar
          <div className="underscore"></div>
        </NavLink>
      </nav>
    </div>
  );
};
