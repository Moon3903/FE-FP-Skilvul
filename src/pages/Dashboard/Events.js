import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./Sidebar";

export default function DashboardEvents() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <DashboardSidebar />
        </div>
        <div className="col-8">
          <h1>Events CRUD</h1>
        </div>
      </div>
    </div>
  );
}
