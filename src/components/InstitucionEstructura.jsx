import Header from './Header';
import './estilos/styles.css';

export default function InstitucionEstructura() {
  return (
    <>
      <Header />
      <main>
        <section className="institucionTitles">
          <h1>Estructura Organizacional</h1>
          <span></span>
          <p>Visualiza cómo está organizada nuestra academia y quiénes lideran cada área.</p>
        </section>

        <section className="estructura-section">
          <div className="estructura-card">
            <div className="estructura-card__text">
              <h2>Organigrama DEBAK TKD</h2>
              <p>Nuestra organización está estructurada para apoyar el crecimiento deportivo, la administración y la experiencia de cada alumno, con entrenadores, coordinación técnica y apoyo logístico enfocados en resultados.</p>
            </div>
            <div className="estructura-card__image">
              <img src="./imagenes/institucion/organigrama.png" alt="Estructura organizacional DEBAK TKD" loading="lazy" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
