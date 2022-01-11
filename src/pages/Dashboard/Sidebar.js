import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/style.css";

export default function DashboardSidebar() {
  return (
    <>
      {/* <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <div className="brand">Network Status</div>
            <NavLink to="/dashboard" className="sidebar-brand">
              Home
            </NavLink>
            <NavLink to="/dashboard/users"></NavLink>
            <NavLink to="/dashboard/events"></NavLink>
            <NavLink to="/dashboard/blog"></NavLink>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1>Simple Sidebar</h1>
                <a
                  href="#menu-toggle"
                  className="btn btn-default"
                  id="menu-toggle"
                >
                  Toggle Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="sidebar-container">
        <div className="sidebar-logo">Logo</div>
        <ul className="sidebar-navigation">
          <li className="header">Dashboard</li>
          <li>
            <a href="#">
              <i className="fa fa-home" aria-hidden="true"></i> Homepage
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-tachometer" aria-hidden="true"></i> Event
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-tachometer" aria-hidden="true"></i> Users
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-users" aria-hidden="true"></i> Blogs
            </a>
          </li>
        </ul>
      </div>

      <div className="content-container">
        <div className="container-fluid"></div>
      </div>
    </>
  );
}
