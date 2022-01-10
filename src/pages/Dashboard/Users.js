import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./Sidebar";

export default function DashboardUsers() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <DashboardSidebar />
        </div>
        <div className="col-8">
          <h1>Users CRUD</h1>
        </div>
      </div>
    </div>
  );
}
