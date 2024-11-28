import React, { useEffect, useState } from "react";

function Carousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Realiza la petición al API
    fetch("http://localhost:3001/properties")
      .then((response) => response.json())
      .then((data) => {
        // Extrae solo las URLs de las imágenes
        const extractedImages = data.map((item) => ({
          url: item.product_galery_1_grand,
          alt: item.title, // Puedes usar el título como texto alternativo
        }));
        setImages(extractedImages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`} // La primera imagen debe ser "active"
          >
            <img src={image.url} className="d-block w-100" alt={image.alt} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
