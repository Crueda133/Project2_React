import React from "react";

function Carousel() {
  const images = [
    {
      url: "https://images2.bovpg.net/fwxl2x/media/1/4/2/6/7/426717.jpg",
      alt: "First Image",
    },
    {
      url: "https://images2.bovpg.net/fwxl2x/media/1/5/0/8/4/508451.jpg",
      alt: "Second Image",
    },
    {
      url: "https://images2.bovpg.net/fwxl2x/media/1/7/7/9/1/779101.jpg",
      alt: "Third Image",
    },
    {
      url: "https://images2.bovpg.net/fwxl2x/media/1/5/8/1/3/581340.jpg",
      alt: "Fourth Image",
    },
    {
      url: "https://images2.bovpg.net/fwxl2x/media/1/5/0/8/4/508461.jpg",
      alt: "Fifth Image",
    },
  ];

  return (
    <div>
      <nav className="custom-navbar">
        <div
          id="carouselAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`} // La primera imagen debe ser "active"
              >
                <img src={image.url} className="d-block" alt={image.alt} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Carousel;
