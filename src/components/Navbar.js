import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { FaSearch } from "react-icons/fa";
import logo from "./../assets/img/logo.svg";

export default function Navbar() {
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
