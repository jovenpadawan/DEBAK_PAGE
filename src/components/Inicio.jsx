import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function Inicio({ showIntroVideo, onIntroVideoDismiss }) {
  const introVideoRef = useRef(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    if (!showIntroVideo || !introVideoRef.current) {
      return;
    }

    introVideoRef.current.play().then(() => {
      setAutoplayBlocked(false);
    }).catch(() => {
      setAutoplayBlocked(true);
    });
  }, [showIntroVideo]);

  const iniciarVideo = () => {
    if (!introVideoRef.current) {
      return;
    }

    introVideoRef.current.play().then(() => {
      setAutoplayBlocked(false);
    }).catch(() => {
      setAutoplayBlocked(true);
    });
  };

  return (
    <>
      <SeoOptimization title="Inicio" description="DEBAK TKD, club de taekwondo de alto rendimiento en Ecuador con formación integral, disciplina y excelencia deportiva." />
      <Header />
      {showIntroVideo && (
        <div
          className="home-video-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Video de bienvenida de DEBAK TKD"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onIntroVideoDismiss();
            }
          }}
        >
          <div className="home-video-modal">
            <button
              className="home-video-close"
              type="button"
              onClick={onIntroVideoDismiss}
              aria-label="Cerrar video"
            >
              &times;
            </button>
            <video
              ref={introVideoRef}
              src={`${import.meta.env.BASE_URL}imagenes/videoInicio.mp4`}
              autoPlay
              playsInline
              preload="auto"
              onEnded={onIntroVideoDismiss}
            />
            {autoplayBlocked && (
              <button
                className="home-video-start"
                type="button"
                onClick={iniciarVideo}
              >
                Iniciar video
              </button>
            )}
          </div>
        </div>
      )}
      <main>
        <section className="h1titles">
          <h1>CLUB DEPORTIVO ESPECIALIZADO DE ALTO RENDIMIENTO <br/> DEBAK TKD</h1>
          <span></span>
        </section>
        <Carousel />

        <section className="intro">
          <h2>¿Quiénes somos?</h2>
          <p>El club Debak TKD es una familia de campeones dejando en alto al Ecuador. <br/> Formamos grandes seres humanos para la vida.</p>
           <footer>
          <p id="footerInfo">debaktkd486@gmail.com - 0984096361 / 0963240963</p>
          </footer>
        </section>
      </main>
      <a
        className="whatsapp-float"
        href="https://wa.me/593984096361?text=%C2%A1Hola!%20Deseo%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20curso%20de%20taekwondo."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar más información del curso de taekwondo por WhatsApp"
        title="Más información por WhatsApp"
      >
        <img src="/imagenes/redes/whatsapp.png" alt="" />
      </a>
    </>
  );
}
