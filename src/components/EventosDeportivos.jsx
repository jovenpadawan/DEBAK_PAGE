import Header from './Header';
import './estilos/styles.css';

const events = [
  {
    title: 'Torneo Interno DEBAK',
    description: 'Competencia para todas las categorías con medallas y reconocimiento especial para los mejores competidores.',
  },
  {
    title: 'Clínica de Patadas y Combate',
    description: 'Entrenamiento intensivo para mejorar técnica, velocidad y espíritu competitivo en cada combate.',
  },
  {
    title: 'Gala de Campeones',
    description: 'Presentación de los logros del año, con exhibiciones y entrega de reconocimientos a atletas destacados.',
  }
];

export default function EventosDeportivos() {
  return (
    <>
      <Header />
      <main>
        <section className="catalogoTitles">
          <h1>Eventos Deportivos</h1>
          <span></span>
          <p>Actividades especialmente diseñadas para mostrar el talento y la energía de nuestros atletas.</p>
        </section>
        <section className="page-header page-header--light">
          
        </section>

        <section className="event-cards">
          {events.map((event) => (
            <article key={event.title} className="event-card">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <span className="event-tag">Deportivo</span>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
