import Header from './Header';
import Carousel from './Carousel';
import './estilos/styles.css';

export default function Inicio() {
  return (
    <>
      <Header />
      <main>
        <Carousel />

        <section className="intro">
          <h2>Bienvenidos a DEBAK TKD</h2>
          <p>DEBAK TKD es un espacio dedicado al entrenamiento serio y disciplinado del Taekwondo. Clases para todas las edades y niveles.</p>
        </section>
      </main>
    </>
  );
}
