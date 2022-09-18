import React from "react";

export default function Home() {
  return (
    <div>
      <div className="carousel">
        <div className="container">
          <div className="carousel-content slick-ready" id="carousel-content" />
        </div>
      </div>
      <div className="product-feature">
        <div className="container">
          <div className="title">
            <h3 className="text-center">-Product Feature -</h3>
          </div>
          <div className="row" id="productFeatureTbl" />
        </div>
      </div>
    </div>
  );
}
