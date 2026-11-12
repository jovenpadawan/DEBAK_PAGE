import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function Inicio() {
  const introVideoRef = useRef(null);
  const [showIntroVideo, setShowIntroVideo] = useState(true);

  useEffect(() => {
    const video = introVideoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    const playVideo = () => {
      video.play().catch((error) => {
        console.warn('El navegador no permitió reproducir automáticamente el video de bienvenida.', error);
      });
    };
    playVideo();

    const enableAudio = () => {
      video.muted = false;
      video.play().catch((error) => {
        console.warn('El navegador no permitió activar el sonido del video de bienvenida.', error);
      });
      window.removeEventListener('pointerdown', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };

    window.addEventListener('pointerdown', enableAudio);
    window.addEventListener('keydown', enableAudio);

    return () => {
      window.removeEventListener('pointerdown', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };
  }, []);

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
        >
          <div className="home-video-modal">
            <video
              ref={introVideoRef}
              src={`${import.meta.env.BASE_URL}imagenes/videoInicio.mp4`}
              autoPlay
              muted
              playsInline
              preload="auto"
              onCanPlay={(event) => {
                event.currentTarget.play().catch((error) => {
                  console.warn('El navegador no permitió iniciar el video de bienvenida.', error);
                });
              }}
              onError={(event) => {
                console.error('No se pudo cargar el video de bienvenida.', event.currentTarget.error);
              }}
              onEnded={() => setShowIntroVideo(false)}
            />
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
