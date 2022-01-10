import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./Sidebar";

export default function DashboardIndex() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <DashboardSidebar />
        </div>
        <div className="col-8">
          <h1>Hello, Admin!</h1>
        </div>
      </div>
    </div>
  );
}
