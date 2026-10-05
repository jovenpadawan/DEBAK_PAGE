import Header from './Header';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function InstitucionVision() {
  return (
    <>
      <SeoOptimization title="Institución" description="Descubre la visión de DEBAK TKD y su apuesta por la excelencia deportiva y el desarrollo humano." />
      <Header />
      <main>
        <section className="institucionTitles">
          <h1>Visión</h1>
          <span></span>
        </section>

        <section className="info-card">
          <div className="info-card__title">
            <h2>Visión</h2>
          </div>
          <span className="info-divider" aria-hidden="true"></span>
          <div className="info-card__content">
            <p>Ser una institución deportiva modelo, sólida y con liderazgo, consolidándonos en los próximos 3 años como una potencia deportiva del país y un referente internacional dentro de América y el mundo formando atletas y humanos íntegros y con trascendencia por su estilo de vida.</p>
          </div>
        </section>
      </main>
    </>
  );
}
