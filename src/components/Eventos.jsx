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
        description: 'Varios de nuestros deportistas nos representaron en el Campeonato Nacional Interclubes en Manabí.',
        image: '/imagenes/eventos/interclubesManabi.jpg',
        date: '19 de Febrero, 2026',
        location: 'Manabí',
        tag: 'Deportivo',
        detalles: 'Cada uno de nuestros deportistas consiguió buenos resultados, llevándose nuevos aprendizajes con ellos.'
      },
      {
        title: 'II Campeonato Sueños Olímpicos Patu12',
        description: 'Nuestros campeones dieron su mayor esfuerzo en el Patu12 2026, logrando destacar con sus logros.',
        image: '/imagenes/eventos/patu12.jpg',
        date: '28 de Marzo, 2026',
        location: 'Quito',
        tag: 'Deportivo',
        detalles: 'Salieron de aquí varios logros y medalas, símbolo del esfuerzo y dedicación de los deportistas de DEBAK.'
      },
      {
        title: 'Campeonato Ranking Mundial G1',
        description: 'Nuestro director, Jimmy Bolaños, asistió junto con nuestro campeón Iván Marcano y Charlotte al Campeonato Ranking Mundial G1 en República Dominicana.',
        image: '/imagenes/eventos/rankingRD.jpg',
        date: '10 de Abril, 2026',
        location: 'República Dominicana',
        tag: 'Deportivo',
        detalles: 'Todos consiguieron alcanzar el podio, estando Charlotte en el tercer lugar, Iván Marcano en el segundo y Jimmy Bolaños en el primero.'
      },
      {
        title: 'Campeonato Panamericano de Taekwondo',
        description: 'Nuestro director, Jimmy Bolaños, y maestro, Marcelo Prado, nos representaron en el Campeonato Panamericano de Taekwondo en Brasil.',
        image: '/imagenes/eventos/panamericanBrasil.jpg',
        date: '7 de Mayo, 2026',
        location: 'Brasil, Arena Carioca 1',
        tag: 'Deportivo',
        detalles: 'Marcelo Prado consiguió el segundo lugar en el podio, dejando en alto a la nación y al club.'
      },
      {
        title: 'Nacional Junior Combate',
        description: 'Nuestro deportista, Joaquín Vargas, participó en el Campeonato Nacional Junior Combate en Manabí.',
        image: '/imagenes/eventos/panamericanBrasil.jpg',
        date: '7 de Mayo, 2026',
        location: 'Manabí',
        tag: 'Deportivo',
        detalles: 'Sus esfuerzos lo llevaron al podio, ocupando el tercer lugar entre los participantes.'
      }
    ]
  },
  sociales: {
    titulo: 'Eventos Sociales',
    descripcion: 'Actividades para la comunidad, la convivencia y el crecimiento en equipo.',
    items: [
      {
        title: 'Donación de Prendas',
        description: 'Una jornada solidaria donde se apoyó a las personas que lo necesitan en lanavidad.',
        image: '/imagenes/eventos/ayudaNavidena.jpg',
        date: '23 de Diciembre, 2025',
        location: 'Quito Sur',
        tag: 'Social',
        detalles: 'Compartiremos un almuerzo comunitario y dinámicas grupales para fortalecer lazos.'
      },
      {
        title: 'Cena navideña DEBAK',
        description: 'Nos reunimos para dar mantenimiento al tatami y disfrutamos de una deliciosa cena.',
        image: '/imagenes/eventos/cenaNavidena.jpg',
        date: '18 de Diciembre, 2026',
        location: 'Debak Matriz',
        tag: 'Social',
        detalles: 'Cena de fin de año junto con la familia DEBAK.'
      },
      {
        title: 'Reunión Deportiva',
        description: 'Luego de la carnetización de nuestros deportistas, se les invitó s disfrutar de las actividades planificadas para todas las edades.',
        image: '/imagenes/eventos/tardeDeportiva.jpg',
        date: '31 de Enero, 2026',
        location: 'Debak Matriz',
        tag: 'Social',
        detalles: 'Los peques disfrutaron de un colchón inflable y algodón de azúcar y los intermedios y avanzados jugaron ecuavoley buscando ganar premios.'
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