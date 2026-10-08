import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Modal from './Modal';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

const dataEventos = {
  deportivos: {
    titulo: 'Eventos Deportivos',
    items: [
      {
        title: 'Ranking G8 Chuncheon 2026 World Taekwondo Poomsae Championships, Korea 2026',
        description: 'Nuestro deportista Iván Marcano y Maestro Marcelo Prado representaron al Ecuador en el mundial de Corea, donde con mucho orgullo lo dejaron en alto.',
        image: './imagenes/eventos/chuncheon2026.jpg',
        date: '16 de Septiembre, 2026',
        location: 'Corea del sur',
        tag: 'Deportivo',
        detalles: 'Iván Marcano obtuvo el puntaje másalto de todo el team ecuador (8,63) y Marcelo Prado obtuvo el 5to lugar entre múltiples deportitstas de su categoría.'
      },
      {
        title: 'XVII Juegos Nacionales de Menores Guayas 2026',
        description: 'Julieta Grisales, Juan Puente y Emilio Ayala representaron a Pichincha en estos Juegos Nacionales de Menores, consiguiendo múltiples medallas y apoyando a Pichincha a convertirse en el campeón absoluto del evento.',
        image: './imagenes/eventos/xviiJuegosNacionalesMenores.jpeg',
        date: '15 de septiembre, 2026',
        location: 'Guayaquil',
        tag: 'Deportivo',
        detalles: 'Julieta Grisales consiguió el segundo y tercer puesto en Poomsae Trio Femenino y Poomsae Pareja Mixta, Emilio Ayala obtuvo bronce en Poomsae Pareja Mixta y Poomsae Trio Masculino y Juan Puente obtuvo bronce en las categorías de Poomsae Trio Masculino y Poomsae Individual.'
      },
      {
        title: 'Ranking G1 Copa de las Naciones Ecuador 2026',
        description: 'Nuestros deportistas avanzados estuvieron presentes en este gran evento de nivel internacional, dejando en alto al Ecuador y al club DebakTKD.',
        image: './imagenes/eventos/copaDeNaciones.jpg',
        date: '11 de Septiembre, 2026', 
        location: 'Quito',
        tag: 'Deportivo',
        detalles: 'Con esfuerzo y dedicación dejaron todo en el tatami y obtuvieron múltiples medallas.'
      },
      {
        title: 'Open Cintas de Colores',
        description: 'Nuestros deportistas novatos e intermedios suman una nueva experiencia y nuevos logros a su trayectoría como deportistas en este evento internacional.',
        image: './imagenes/eventos/openCintasDeColor.jpeg',
        date: '10 de Septiembre, 2026',
        location: 'Quito',
        tag: 'Deportivo',
        detalles: 'Todos nuestros deportistas participantes obtuvieron medallas y puestos altos, demostrando la pasión y el compromiso que tienen con el Taekwondo.'
      },
      {
        title: 'Campeonato Panamericano Infantil Ecuador 2026 PATU12',
        description: 'Arantxa Marcano, Bryan Valdez, Emiliano Herrera y Leonardo Obando representaron al Ecuador y al club DebakTKD en este gran campeonato panamericano.',
        image: './imagenes/eventos/campeonatoPanamericanoInfantil.jpeg',
        date: '09 de Septiembre, 2026',
        location: 'Quito',
        tag: 'Deportivo',
        detalles: 'Arantxa Marcano se consagró como campeona panamericana en Poomsae Individual y Freestyle, convirtiéndose en la mejor deportista del evento; Bryan Valdez se consagró como campeón panamericano en combate, Emiliano Herrera obvtuvo plata en freestyle y Leonardo Obando plata en combate.'
      },
      {
        title: 'XIII Juegos Nacionales Pre Juveniles Azuay 2026',
        description: 'Zoe Celi y Gabriel Ruíz representaron a la provincia de Pichincha en estos Juegos Nacionales, convirtiéndose en múltiples medallistas y apoyando a Pichincha a convertirse en el campeón absoluto del evento.',
        image: './imagenes/eventos/xiiiJuegosNacionales.jpeg',
        date: '12 de Agosto, 2026',
        location: 'Cuenca',
        tag: 'Deportivo',
        detalles: 'Zoe Celi consiguió ser campeona y subcampeona en Poomsae Trio y Poomsae individual y Gabriel Ruíz se consagró como campeón del evento en la categoría de Freestyle.'
      },
      {
        title: 'II Ecuador Challenger 2026',
        description: 'DEBAK Estuvo presente en esta competencia nacional desarrollada en Riobamba.',
        image: './imagenes/eventos/iiecuadorChallenger.jpeg',
        date: '09 de Julio, 2026',
        location: 'Riobamba',
        tag: 'Deportivo',
        detalles: 'Demostraron sus capacidades y ahora se preparan para competir por el reconocimiento a mejores deportistas del año a nivel nacional.'
      }, 
      {
        title: 'Campeonato Nacional Senior y Sub-21 - 2026',
        description: 'En la Universidad San Francisco de Quito, nuestros profesores asisitieron a representar con orgullo a DEBAK.',
        image: './imagenes/eventos/openNacionalUniversitario.jpeg',
        date: '26 de Junio, 2026',
        location: 'Quito, USFQ',
        tag: 'Deportivo',
        detalles: 'Adrián Lara y José Alejo dieron lo mejor de sí en sus combates y nuestro profesor Rodneey Quisnia subió al tercer lugar del podio.'
      },
      {
        title: 'XII Copa Embajador de la República de Corea',
        description: 'En Baños de Agua Santa, nuestros deportistas dieron su mayor esfuerzo y consiguieron grandes resultados.',
        image: './imagenes/eventos/xiicopaDeCorea.jpeg',
        date: '20 de Junio, 2026',
        location: 'Baños de Agua Santa',
        tag: 'Deportivo',
        detalles: 'Al haber aceptado el reto, consiguieron crecer como deportistas y conseguir nuevas experiencias.'
      },
      {
        title: 'Nacional Junior Combate',
        description: 'Nuestro deportista, Joaquín Vargas, participó en el Campeonato Nacional Junior Combate en Manabí.',
        image: './imagenes/eventos/nacionalJunior.jpg',
        date: '30 de Mayo, 2026',
        location: 'Manabí',
        tag: 'Deportivo',
        detalles: 'Sus esfuerzos lo llevaron al podio, ocupando el tercer lugar entre los participantes.'
      },
      {
        title: 'Campeonato Panamericano de Taekwondo',
        description: 'Nuestro director, Jimmy Bolaños, y maestro, Marcelo Prado, nos representaron en el Campeonato Panamericano de Taekwondo en Brasil.',
        image: './imagenes/eventos/panamericanBrasil.jpg',
        date: '7 de Mayo, 2026',
        location: 'Brasil, Arena Carioca 1',
        tag: 'Deportivo',
        detalles: 'Marcelo Prado consiguió el segundo lugar en el podio, dejando en alto a la nación y al club.'
      },
      {
        title: 'Campeonato Ranking Mundial G1 República Dominicana 2026',
        description: 'Nuestro director, Jimmy Bolaños, asistió junto con nuestro campeón Iván Marcano y Charlotte al Campeonato Ranking Mundial G1 en República Dominicana.',
        image: './imagenes/eventos/rankingRD.jpg',
        date: '10 de Abril, 2026',
        location: 'República Dominicana',
        tag: 'Deportivo',
        detalles: 'Todos consiguieron alcanzar el podio, estando Charlotte Campusano en el tercer lugar, Iván Marcano primer lugar combate y segundo poomsae y Jimmy Bolaños en el primer lugar poomsae.'
      },
      {
        title: 'II Campeonato "Sueños Olímpicos" Patu12',
        description: 'Gracias a todo el esfuerzo y dedicación de nuestros deportistas, nos consagramos como campeones del evento en la categoría de POOMSAE.',
        image: './imagenes/eventos/patu12.jpg',
        date: '28 de Marzo, 2026',
        location: 'Quito',
        tag: 'Deportivo',
        detalles: 'Dejaron marca de lo mucho que se esmeran en cada uno de sus entrenamientos.'
      },
      {
        title: 'I Campeonato Nacional Interclubes',
        description: 'Varios de nuestros deportistas nos representaron en el Campeonato Nacional Interclubes en Manabí.',
        image: './imagenes/eventos/interclubesManabi.jpg',
        date: '19 de Febrero, 2026',
        location: 'Manabí',
        tag: 'Deportivo',
        detalles: 'Cada uno de nuestros deportistas consiguió buenos resultados, llevándose nuevos aprendizajes con ellos.'
      },
    ]
  },
  sociales: {
    titulo: 'Eventos Sociales',
    items: [
      {
        title: 'Campaña navideña',
        description: 'Jornada solidaria donde compartimos con personas de la comunidad de la Mitad del Mundo llevando un momento de calidez y alegría en las vísperas de navidad.',
        image: './imagenes/eventos/ayudaNavidena.jpg',
        date: '23 de Diciembre, 2025',
        location: 'Mitad del Mundo',
        tag: 'Social',
        detalles: 'Se pudo vivir momentos llenos de sonrisas y alegría en comunidad.'
      },
      {
        title: 'Mañana deportiva',
        description: 'Luego de las actividades institucionales de nuestros deportistas, invitamos a niños y jóvenes de la comunidad para disfrutar de actividades planificadas para todas las edades.',
        image: './imagenes/eventos/tardeDeportiva.jpg',
        date: '31 de Enero, 2026',
        location: 'Debak Matriz',
        tag: 'Social',
        detalles: 'Se llevaron a cabo jornadas de distintos deportes donde se integraron todos los niños y jóvenes presentes.'
      }
    ]
  },
  promocion: {
    titulo: 'Promoción del Taekwondo',
    items: [
      {
        title: 'La historia de Jimmy Bolaños',
        description: 'Nuestro director Jimmy Bolaños fue entrevistado por el programa de Teleamazonas "EsTA Mañana", donde habló acerca de su recorrido como deportista de Taekwondo.',
        image: './imagenes/eventos/entrevistaJimmy.jpeg',
        date: '11 de junio, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Conoce más acerca de la entrevista en TikTok.',
        enlace: 'https://www.tiktok.com/@estamananatv/video/7650284590266993927?_r=1&_t=ZS-9AHYCOwRpxt',
        textoEnlace: 'Ver entrevista en TikTok'
      },
      {
        title: 'Trayecto de Zoe Celi',
        description: 'Nuestra deportista Zoe Celi estuvo presente en una entrevista en Pública FM, donde tuvo la oportunidad de compartir su trayectoria deportiva y los logros que ha alcanzado.',
        image: './imagenes/eventos/zoeEntrevista.png',
        date: '8 de Enero, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Pudo compartir un poco de su carrera deportiva, sus logros y algunas anécdotas que han marcado su camino.'
      },
      {
        title: 'Emiliano Herrera al Aire',
        description: 'Nuestro querido deportista, Emiliano Herrera, fue invitado a asistir en una entrevista en Pública FM.',
        image: './imagenes/eventos/emilianoEntrevista.png',
        date: '2 de Marzo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Compartió sus experiencias y vivencias dentro de este hermoso deporte..'
      },
      {
        title: 'Marcelo Prado al Aire',
        description: 'Nuestro maestro de Poomsae, Marcelo Prado, recibió una invitación para participar en una entrevista en Pública FM.',
        image: './imagenes/eventos/marceloEntrevista.png',
        date: '12 de Marzo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Tuvo la oportunidad de compartir su conocimiento y pasión por el Taekwondo.'
      },
      {
        title: 'Iván Marcano al Aire',
        description: 'Nuestro campeón tuvo una entrevista con Pública FM desde la Base de Entrenamiento Nacional.',
        image: './imagenes/eventos/marcanoEntrevista.png',
        date: '12 de Marzo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'El esfuerzo, la dedicación y la disciplina siempre traen grandes resultados.'
      },
      {
        title: 'Rodneey Quisnia al Aire',
        description: 'Nuestro profesor, Rodneey Quisnia, tuvo el placer de ser invitado a una entrevista en Pública FM.',
        image: './imagenes/eventos/rodneeyEntrevista.png',
        date: '28 de Mayo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Compartió aquí su historia deportiva, experiencia y consejos que inspiran a seguir creciendo.'
      },{
        title: 'Gabriel Ruíz al Aire',
        description: 'Gabriel Ruíz, uno de nuestros deportistas, pudo dar a conocer sus motivaciones en el deporte y compartió hermosos mensajes desde su experiencia y trayectoria.',
        image: './imagenes/eventos/entrevistaGabriel.JPG',  
        date: '28 de Mayo, 2026',
        location: 'Quito',
        tag: 'Entrevista',
        detalles: 'Compartió su historia deportiva, sus logros y consejos que inspiran a seguir creciendo.'
      }
    ]
  }
};

export default function Eventos() {
  const location = useLocation();
  const navigate = useNavigate();
  const categoriaActiva = location.state?.categoria || 'deportivos';
  const [selected, setSelected] = useState(null);

  const seleccionarCategoria = (categoria) => {
    navigate(location.pathname, {
      replace: true,
      state: { ...location.state, categoria }
    });
  };

  const seccionActual = dataEventos[categoriaActiva] || dataEventos.deportivos;

  return (
    <>
      <SeoOptimization title="Eventos" description="Descubre los eventos deportivos, sociales y de promoción del club DEBAK TKD." />
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
            onClick={() => seleccionarCategoria('deportivos')}
          >
            Deportivos
          </button>
          <button 
            className={`nav-tag-btn ${categoriaActiva === 'sociales' ? 'active' : ''}`}
            onClick={() => seleccionarCategoria('sociales')}
          >
            Sociales
          </button>
          <button 
            className={`nav-tag-btn ${categoriaActiva === 'promocion' ? 'active' : ''}`}
            onClick={() => seleccionarCategoria('promocion')}
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
                {selected.enlace && (
                  <>
                    {' '}
                    <a
                      className="event-detail-link"
                      href={selected.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selected.textoEnlace || 'Abrir enlace'}
                    </a>
                  </>
                )}
              </p>
            )}
          </Modal>
        )}
      </main>
    </>
  );
}