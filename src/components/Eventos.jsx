import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Modal from './Modal';
import './estilos/styles.css';

const dataEventos = {
  deportivos: {
    titulo: 'Eventos Deportivos',
    descripcion: 'Actividades especialmente diseñadas para mostrar el talento y la energía de nuestros atletas.',
    items: [
      {
        title: 'I Campeonato Nacional Interclubes',
        description: 'Competencia para todas las categorías con medallas y reconocimiento especial para los mejores competidores.',
        image: '/imagenes/eventos/interclubesManabi.jpg',
        date: '19 de Febrero, 2026',
        location: 'Manabí',
        tag: 'Deportivo',
        detalle: 'El pesaje iniciará a las 08:00 AM. Recuerda asistir con el Dobok oficial e implementar todas tus protecciones reglamentarias.'
      },
      {
        title: 'II Campeonato Sueños Olímpicos Patu12',
        description: 'Entrenamiento intensivo para mejorar técnica, velocidad y espíritu competitivo en cada combate.',
        image: '/imagenes/eventos/patu12.jpg',
        date: '28 de Marzo, 2026',
        location: 'Quito',
        tag: 'Deportivo',
        detalle: 'Dirigido por profesores cinturón negro destacados. Traer hidratación extra.'
      },
      {
        title: 'Campeonato Ranking Mundial G1',
        description: 'Presentación de los logros del año, con exhibiciones y entrega de reconocimientos a atletas destacados.',
        image: '/imagenes/eventos/rankingRD.jpg',
        date: '10 de Abril, 2026',
        location: 'República Dominicana',
        tag: 'Deportivo',
        detalle: 'Evento de gala formal. Se requiere confirmación de asistencia previa.'
      },
      {
        title: 'Campeonato Panamericano de Taekwondo',
        description: 'Presentación de los logros del año, con exhibiciones y entrega de reconocimientos a atletas destacados.',
        image: '/imagenes/eventos/panamericanBrasil.jpg',
        date: '7 de Mayo, 2026',
        location: 'Brasil, Arena Carioca 1',
        tag: 'Deportivo',
        detalle: 'Evento de gala formal. Se requiere confirmación de asistencia previa.'
      }
    ]
  },
  sociales: {
    titulo: 'Eventos Sociales',
    descripcion: 'Actividades para la comunidad, la convivencia y el crecimiento en equipo.',
    items: [
      {
        title: 'Encuentro Comunitario',
        description: 'Una jornada de integración con familias y alumnos para celebrar la cultura del Taekwondo.',
        image: '/imagenes/eventos/comunidad.jpg',
        date: '05 de Septiembre, 2026',
        location: 'Parque de la Familia',
        tag: 'Social',
        detalles: 'Compartiremos un almuerzo comunitario y dinámicas grupales para fortalecer lazos.'
      },
      {
        title: 'Cena de Gala',
        description: 'Evento social donde reconocemos el esfuerzo de los practicantes y reforzamos los lazos de comunidad.',
        image: '/imagenes/eventos/cena.jpg',
        date: '18 de Diciembre, 2026',
        location: 'Hotel Central',
        tag: 'Social',
        detalles: 'Cena de fin de año con premiaciones especiales para toda la familia DEBAK.'
      },
      {
        title: 'Tarde de Puertas Abiertas',
        description: 'Invitamos a nuevos miembros a conocer nuestro espacio, tomar una clase de prueba y disfrutar de actividades recreativas.',
        image: '/imagenes/eventos/puertas-abiertas.jpg',
        date: '10 de Octubre, 2026',
        location: 'Sede Central',
        tag: 'Social',
        detalles: 'Entrada libre para amigos y conocidos. Descuentos especiales en inscripciones.'
      }
    ]
  },
  promocion: {
    titulo: 'Promoción del Taekwondo',
    descripcion: 'Conoce nuestras acciones para ampliar el alcance del Taekwondo en la ciudad.',
    items: [
      {
        title: 'Debak al Aire',
        description: 'Nuestro Director, junto con nuestros deportistas Zoe Celi y Martín Benavides, estuvieron presentes en una entrevista en Pública FM.',
        image: '/imagenes/eventos/zoeEntrevista.png',
        date: '8 de Enero, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Pudieron compartir un poco de su carrera deportiva, sus logros y algunas anécdotas que han marcado su camino.'
      },
      {
        title: 'Emiliano Herrera al Aire',
        description: 'Nuestro querido deportista, Emiliano Herrera, fue invitado a asistir en una entrevista en Pública FM.',
        image: '/imagenes/eventos/emilianoEntrevista.png',
        date: '2 de Marzo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Compartió sus experiencias y vivencias dentro de este hermoso deporte..'
      },
      {
        title: 'Marcelo Prado al Aire',
        description: 'Nuestro maestro de Poomsae, Marcelo Prado, recibió una invitación para participar en una entrevista en Pública FM.',
        image: '/imagenes/eventos/marceloEntrevista.png',
        date: '12 de Marzo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Tuvo la oportunidad de compartir su conocimiento y pasión por el Taekwondo.'
      },
      {
        title: 'Iván Marcano al Aire',
        description: 'Nuestro campeón tuvo una entrevista con Pública FM desde la base de entrenamiento de Pichincha.',
        image: '/imagenes/eventos/marcanoEntrevista.png',
        date: '12 de Marzo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'El esfuerzo, la dedicación y la disciplina siempre traen grandes resultados.'
      },
      {
        title: 'Rodneey Quisnia al Aire',
        description: 'Nuestro profesor, Rodneey Quisnia, tuvo el placer de ser invitado a una entrevista en Pública FM.',
        image: '/imagenes/eventos/rodneeyEntrevista.png',
        date: '28 de Mayo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Compartió aquí su historia deportiva, experiencia y consejos que inspiran a seguir creciendo.'
      }
    ]
  }
};

export default function Eventos() {
  const location = useLocation();
  const [categoriaActiva, setCategoriaActiva] = useState('deportivos');
  const [selected, setSelected] = useState(null);

  // Cambia la pestaña automáticamente si viene una categoría desde el Header Menu
  useEffect(() => {
    if (location.state?.categoria) {
      setCategoriaActiva(location.state.categoria);
    }
  }, [location.state]);

  const seccionActual = dataEventos[categoriaActiva] || dataEventos.deportivos;

  return (
    <>
      <Header />
      <main style={{ paddingBottom: '5rem' }}>
        
        <section className="catalogoTitles">
          <h1>{seccionActual.titulo}</h1>
          <span></span>
          <p>{seccionActual.descripcion}</p>
        </section>

        <nav className="event-navigation">
          <button 
            className={`nav-tag-btn ${categoriaActiva === 'deportivos' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('deportivos')}
          >
            Deportivos
          </button>
          <button 
            className={`nav-tag-btn ${categoriaActiva === 'sociales' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('sociales')}
          >
            Sociales
          </button>
          <button 
            className={`nav-tag-btn ${categoriaActiva === 'promocion' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('promocion')}
          >
            Promoción
          </button>
        </nav>

        <div className="event-cards-grid">
          {seccionActual.items.map((event, index) => (
            <article 
              key={`${event.title}-${index}`} 
              className="event-card-horizontal" 
              onClick={() => setSelected(event)}
              style={{ cursor: 'pointer' }}
            >
              <img src={event.image} alt={event.title} className="event-card-img-left" />
              <div className="event-card-body">
                <div className="event-card-meta">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                  <span>•</span>
                  <span className="event-card-tag-box">{event.tag}</span>
                </div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <Modal onClose={() => setSelected(null)}>
            <h2>{selected.title}</h2>
            <p style={{ fontWeight: '600', color: '#1e293b', marginTop: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="event-card-tag-box">{selected.tag}</span> — {selected.date} en {selected.location}
            </p>
            <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
            <p style={{ color: '#1e293b', lineHeight: '1.6' }}>{selected.description}</p>
            {selected.detalles && (
              <p style={{ marginTop: '1rem', color: '#475569', fontSize: '0.95rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f5c400' }}>
                {selected.detalles}
              </p>
            )}
          </Modal>
        )}
      </main>
    </>
  );
}