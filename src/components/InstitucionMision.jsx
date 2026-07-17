import Header from './Header';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function InstitucionMision() {
  return (
    <>
      <SeoOptimization title="Institución" description="Conoce la misión de DEBAK TKD, su propósito formativo y su compromiso con el alto rendimiento." />
      <Header />
      <main>
        <section className="institucionTitles">
          <h1>Misión</h1>
          <span></span>
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
