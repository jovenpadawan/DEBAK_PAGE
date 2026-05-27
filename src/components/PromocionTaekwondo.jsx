import Header from './Header';
import './estilos/styles.css';

const promos = [
  {
    title: 'Campaña de Difusión Escolar',
    description: 'Charlas y demostraciones en escuelas para invitar a nuevas generaciones al Taekwondo.',
  },
  {
    title: 'Clases de Prueba Abiertas',
    description: 'Sesiones gratuitas para que el público conozca nuestra metodología y ambiente deportivo.',
  },
  {
    title: 'Promoción en Redes',
    description: 'Historias y videos que muestran la esencia del entrenamiento DEBAK TKD y motivan a participar.',
  }
];

export default function PromocionTaekwondo() {
  return (
    <>
      <Header />
      <main>
        <section className="catalogoTitles">
          <h1>Promoción del Taekwondo</h1>
          <span></span>
        </section>
        <section className="page-header page-header--light">
          <p>Conoce nuestras acciones para ampliar el alcance del Taekwondo en la ciudad.</p>
        </section>

        <section className="event-cards">
          {promos.map((promo) => (
            <article key={promo.title} className="event-card">
              <h2>{promo.title}</h2>
              <p>{promo.description}</p>
              <span className="event-tag">Promoción</span>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
