import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const { pathname } = useLocation();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme={props.mode}
      >
        <div className="container-fluid d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand" to="/">
                Textcraft
              </Link>
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch me-2">
              <input
                style={{ cursor: "pointer" }}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Light" : "Dark"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
