import React from "react";

export default function CardImageGallery({ img }) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={img} className="card-img-top" alt="test" />
      </div>
    </div>
  );
}
