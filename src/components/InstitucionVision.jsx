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
          <p>Queremos ser reconocidos como la institución de taekwondo más sólida de la región, formando campeones y líderes que transformen su entorno con disciplina, salud y trabajo en equipo.</p>
        </section>

        <section className="info-card">
          <div className="info-card__title">
            <h2>Visión</h2>
          </div>
          <span className="info-divider" aria-hidden="true"></span>
          <div className="info-card__content">
            <p>Aspiramos a multiplicar el impacto social del taekwondo, generando oportunidades de crecimiento personal y deportivo para niños, jóvenes y adultos, mediante una formación constante y un ambiente respetuoso.</p>
            <p>Nos proyectamos como una comunidad deportiva donde los éxitos se construyen con esfuerzo y vocación, y cada integrante se siente motivado a superarse.</p>
          </div>
        </section>
      </main>
    </>
  );
}
