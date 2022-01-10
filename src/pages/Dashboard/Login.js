import React from "react";
import { Link } from "react-router-dom";

export default function DashboardLogin() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="card p-3" style={{ width: "18rem" }}>
        <h1 className="mb-5">Welcome Back!</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
