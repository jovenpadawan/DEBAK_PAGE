import Header from './Header';
import './Estilos/styles.css';

const eventos = [
  {
    title: 'Encuentro Comunitario',
    description: 'Una jornada de integración con familias y alumnos para celebrar la cultura del Taekwondo.',
  },
  {
    title: 'Cena de Gala',
    description: 'Evento social donde reconocemos el esfuerzo de los practicantes y reforzamos los lazos de comunidad.',
  },
  {
    title: 'Tarde de Puertas Abiertas',
    description: 'Invitamos a nuevos miembros a conocer nuestro espacio, tomar una clase de prueba y disfrutar de actividades recreativas.',
  }
];

export default function EventosSociales() {
  return (
    <>
      <Header />
      <main>
        <section className="catalogoTitles">
          <h1>Eventos Sociales</h1>
          <span></span>
        </section>
        <section className="page-header page-header--light">
          <p>Actividades para la comunidad, la convivencia y el crecimiento en equipo.</p>
        </section>

        <section className="event-cards">
          {eventos.map((evento) => (
            <article key={evento.title} className="event-card">
              <h2>{evento.title}</h2>
              <p>{evento.description}</p>
              <span className="event-tag">Social</span>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
