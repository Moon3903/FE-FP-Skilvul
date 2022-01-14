import React from "react";
import { Share } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

export default function ({ id, img, title, page }) {
  return (
    <div className="card shadow-sm">
      <img src={img} className="card-img-top" alt="test" />
      <div className="card-body">
        <h5 className="card-title">
          <Link
            className="text-black text-decoration-none"
            to={`/${page}/${id}`}
          >
            {title}
          </Link>
        </h5>
        {/* <p className="card-text text-start">{content.slice(3, 100) + "..."}</p> */}
      </div>
      <div className="card-body" style={{ borderTop: "1px solid #eee" }}>
        <a href="/" className="card-link">
          <Share />
        </a>
      </div>
    </div>
  );
}
