import Header from './Header';
import './estilos/styles.css';

export default function InstitucionVision() {
  return (
    <>
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
            <p>Ser el club de alto rendimiento referente del Ecuador, consolidando en los próximos 10 años una trayectoria de excelencia que transforme a atletas competitivos en campeones de élite mundial creando una comunidad de deportistas de alto rendimiento con buenos valores humanos.</p>
          </div>
        </section>
      </main>
    </>
  );
}
