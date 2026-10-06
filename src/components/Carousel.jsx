import { useEffect, useState } from 'react';
import './estilos/styles.css';

const defaultImages = [
  './imagenes/carrusel/carruselEstadio.jpg',
  './imagenes/carrusel/carruselMindo.jpg',
  './imagenes/carrusel/carruselPeques.jpg',
  './imagenes/carrusel/carruselPremios.jpg',
  './imagenes/carrusel/carruselPortoviejo.jpg',
];

export default function Carousel({ images = defaultImages, intervalMs = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images.length, intervalMs]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => setCurrentIndex((i) => (i + 1) % images.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const openFullscreen = (index = currentIndex) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

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
              <img
                src={src}
                alt={`Foto del carrusel ${index + 1}`}
                loading="lazy"
                onClick={() => openFullscreen(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openFullscreen(index);
                  }
                }}
              />
              <button
                type="button"
                className="carousel-fullscreen-button"
                onClick={() => openFullscreen(index)}
                aria-label={`Abrir foto ${index + 1} en pantalla completa`}
              >
                <span aria-hidden="true">⤢</span>
                Pantalla completa
              </button>
            </div>
          ))}
        </div>
        <button className="carousel-button carousel-button--right" onClick={handleNext} aria-label="Siguiente">
          ›
        </button>
      </div>

      {isFullscreen && (
        <div
          className="carousel-fullscreen"
          role="dialog"
          aria-modal="true"
          aria-label="Vista de imagen en pantalla completa"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsFullscreen(false);
            }
          }}
        >
          <button
            type="button"
            className="carousel-fullscreen-minimize"
            onClick={() => setIsFullscreen(false)}
            aria-label="Minimizar vista en pantalla completa"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5M8 10.8h5.6" />
            </svg>
          </button>

          <div
            className="carousel-fullscreen-stage"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsFullscreen(false);
              }
            }}
          >
            <img src={images[currentIndex]} alt={`Foto del carrusel ${currentIndex + 1}`} />
            <div className="carousel-fullscreen-controls">
              <button type="button" onClick={handlePrev} aria-label="Foto anterior">
                ‹
              </button>
              <button type="button" onClick={handleNext} aria-label="Foto siguiente">
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
