import React from "react";
import "../assets/css/style.css";
import { FaSearch } from "react-icons/fa";
import logo from "./../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";

function NavbarForDashboard() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
            Hidden brand
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" tabIndex="-1">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavbarForPublic() {
  return (
    <>
      <header>
        <nav className="navbar-expand-lg container-navbar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12 col-xl-3">
                <div className="logo">
                  <a href="/" title="logo">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="mob-menu">
                  <span>
                    <i className="fa fa-bars"></i>
                  </span>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-12 col-xl-9">
                <div className="main-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link active menu-blod"
                        aria-current="page"
                        to="/"
                      >
                        Beranda
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link menu-blod"
                        to="/event"
                        aria-disabled="true"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link menu-blod"
                        to="/leaderboard"
                        aria-disabled="true"
                      >
                        Leaderboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link menu-blod"
                        to="/blog"
                        aria-disabled="true"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <ul className="right-nav">
                    <li className="active">
                      <button className="btn btn-style-search" type="submit">
                        <FaSearch />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default function Navbar() {
  const location = useLocation();
  return location.pathname.startsWith("/dashboard") &&
    !location.pathname.startsWith("/dashboard/login") ? (
    <NavbarForDashboard />
  ) : (
    <NavbarForPublic />
  );
}
