import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ location }) {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <Link
            className={`nav__link ${
              location.pathname === "/students" ? "nav__link--active" : ""
            }`}
            to="/students"
          >
            Students
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={`nav__link ${
              location.pathname === "/educators" ? "nav__link--active" : ""
            }`}
            to="/educators"
          >
            Educators
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavBar);
