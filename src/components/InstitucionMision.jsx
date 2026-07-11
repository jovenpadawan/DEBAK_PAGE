import Header from './Header';
import './estilos/styles.css';

export default function InstitucionMision() {
  return (
    <>
      <Header />
      <main>
        <section className="institucionTitles">
          <h1>Misión</h1>
          <span></span>
          <p>Conoce ¿Qué hacemos?, ¿a quiénes nos dirigimos? y ¿Cuál es nuestro valor agregado?</p>
        </section>

        <section className="info-card">
          <div className="info-card__title">
            <h2>Misión</h2>
          </div>
          <span className="info-divider" aria-hidden="true"></span>
          <div className="info-card__content">
            <p>En DEBAK entrenamos y formamos deportistas en la disciplina del Taekwondo, dirigido para niños, jóvenes y adultos que busquen un estilo de vida enmarcado en el respeto, disciplina y marcialidad. De esta manera, formamos seres humanos íntegros; buscando siempre formar seleccionados provinciales, nacionales y representantes internacionales del Ecuador.</p>
          </div>
        </section>
      </main>
    </>
  );
}
