import React from "react";

export default function ({ img, title }) {
  return (
    <div className="card border-light">
      <img src={img} className="card-img-top" alt="test" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}
