import Header from './Header';
import './Estilos/styles.css';

export default function InstitucionMision() {
  return (
    <>
      <Header />
      <main>
        <section className="institucionTitles">
          <h1>Misión</h1>
          <span></span>
          <p>En DEBAK TKD trabajamos para formar atletas con disciplina, respeto y espíritu competitivo, llevando el taekwondo como una herramienta de inclusión social y superación personal.</p>
        </section>

        <section className="info-card">
          <div className="info-card__title">
            <h2>Misión</h2>
          </div>
          <span className="info-divider" aria-hidden="true"></span>
          <div className="info-card__content">
            <p>Desarrollamos un espacio seguro y profesional para el aprendizaje del Taekwondo, donde cada estudiante recibe entrenamiento técnico, fortaleza mental y valores que impulsan el crecimiento deportivo y humano.</p>
            <p>Somos el puente entre la pasión por las artes marciales y el logro de metas tangibles en competencias, formación y comunidad.</p>
          </div>
        </section>
      </main>
    </>
  );
}
