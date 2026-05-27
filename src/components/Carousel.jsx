import { useEffect, useState } from 'react';
import './estilos/styles.css';

const defaultImages = [
  '/imagenes/carrusel/carruselEstadio.jpg',
  '/imagenes/carrusel/carruselMindo.jpg',
  '/imagenes/carrusel/carruselPeques.jpg',
  '/imagenes/carrusel/carruselPremios.jpg',
  '/imagenes/carrusel/carruselPortoviejo.jpg',
];

export default function Carousel({ images = defaultImages, intervalMs = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images.length, intervalMs]);

  const handleNext = () => setCurrentIndex((i) => (i + 1) % images.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="carousel-root">
      <div className="carousel-wrapper">
        <button className="carousel-button carousel-button--left" onClick={handlePrev} aria-label="Anterior">
          ‹
        </button>
        <div className="carousel-track">
          {images.map((src, index) => (
            <div
              key={src + index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              aria-hidden={index !== currentIndex}
            >
              <img src={src} alt={`Foto del carrusel ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <button className="carousel-button carousel-button--right" onClick={handleNext} aria-label="Siguiente">
          ›
        </button>
      </div>
    </section>
  );
}
