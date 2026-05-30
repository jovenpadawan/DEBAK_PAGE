import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import './Estilos/styles.css';

export default function Entrenadores() {
  const [selected, setSelected] = useState(null);

  const staff = [
    {
      name: "Diego Naranjo",
      role: "Psicólogo Deportivo y Secretario",
      image: "imagenes/entrenadores/diegoNaranjo.jpg",
      miniImage: "imagenes/entrenadores/diegoNaranjo.jpg",
      tasks: ["Clases de psicología deportiva.", "Parte del equipo multidisciplinario."],
      courses: ["Curso de Psicología del Deporte en el ISFP."]
    },
    {
      name: "Rodneey Quisnia",
      role: "Departamento Administrativo",
      image: "imagenes/entrenadores/rodneeyQuisniaInstitucional.jpg",
      miniImage: "imagenes/entrenadores/rodneeyQuisniaInstitucional.jpg",
      tasks: ["Facturación.", "Gestión de GAL Nacional y Provincial.", "Inscripción en eventos Nacionales y Provinciales."],
      courses: ["Capacitación en gestión administrativa."]
    },
    {
      name: "Andrés Alejo",
      role: "Marketing",
      image: "imagenes/entrenadores/andresAlejoInstitucional.jpg",
      miniImage: "imagenes/entrenadores/andresAlejoInstitucional.jpg",
      tasks: ["Gestión de redes sociales.", "Creación de contenido audiovisual."],
      courses: ["Curso de Creación de Contenido."]
    },
    {
      name: "Miguel Ortuño",
      role: "Diseñador y Desarrollador Web",
      image: "imagenes/entrenadores/miguelOrtunoInstitucional.jpg",
      miniImage: "imagenes/entrenadores/miguelOrtunoInstitucional.jpg",
      tasks: [],
      courses: ["Curso de Desarrollo Web y Bases de Datos.", "Bachillerato Técnico Informático.", "Curso de Instalaciones Eléctricas."]
    }
  ];

  const trainers = [
    {
      name: "Jimmy Bolaños",
      range: "5to DAN Nacional y 5to DAN Kukkiwon.",
      role: "Director y Presidente del club DEBAK.",
      image: "imagenes/entrenadores/jimmyBolanos.jpg",
      miniImage: "imagenes/entrenadores/jimmyBolanosMini.jpg",
      courses: ["Curso de Acreditación de entrenadores 2026.", "Poomsae avanzado"],
      achievements: ["Campeón Poomsae del I Ecuador Challenger 2026.", "Medalla de oro internacional 2021"]
    },
    {
      name: "Marcelo Prado",
      range: "5to DAN Nacional y 5to DAN Kukkiwon.",
      role: "Maestro de la modalidad poomsae.",
      image: "imagenes/entrenadores/marceloPrado.jpg",
      miniImage: "imagenes/entrenadores/marceloPradoMini.jpg",
      courses: ["Curso de Acreditación de entrenadores Provincial y Nacional 2026.", "Técnicas mixtas"],
      achievements: ["Campeón Poomsae del I Ecuador Challenger 2026.", "Mundial Taipei", "Karate"]
    },
    {
      name: "Adrián Lara",
      range: "1er DAN Nacional.",
      role: "Profesor de combate y director de la sede Colegio Liga.",
      image: "imagenes/entrenadores/adrianLara.jpg",
      miniImage: "imagenes/entrenadores/adrianLaraMini.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Práctica de poomsae, freestyle y exhibición 2025.", "Actualización del reglamento kyorugui 2025."],
      achievements: ["Ing. en Administración de Empresas.", "Lic. en Educación Mención en Educación Física."]
    },
    {
      name: "Rodneey Quisnia",
      range: "1er DAN Nacional.",
      role: "Profesor de la modalidad poomsae.",
      image: "imagenes/entrenadores/rodneeyQuisnia.jpg",
      miniImage: "imagenes/entrenadores/rodneeyQuisniaMini.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Coreografía de poomsae"],
      achievements: ["Jugador nacional de poomsae", "Entrenador del año 2022"]
    },
    {
      name: "Jared Vargas",
      range: "1er DAN Nacional.",
      role: "Director de la sede Carcelén Bajo.",
      image: "imagenes/entrenadores/jaredVargas.jpg",
      miniImage: "imagenes/entrenadores/jaredVargasMini.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026."],
      achievements: ["Bronce Panamericano Costa Rica.", "Campeón G1 Perú.", "Vicecampeón en Juegos Nacionales."]
    },
    {
      name: "Santiago Llaguno",
      range: "1er DAN Nacional y 1er DAN Kukkiwon.",
      role: "Director de la sede Tumbaco.",
      image: "imagenes/entrenadores/santiLlaguno.jpg",
      miniImage: "imagenes/entrenadores/santiLlagunoMini.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Capacitación en entrenamiento personal y deportivo."],
      achievements: ["Medalla de bronce en el Ranking Mundial GR Riobamba 2024", "Bronce del Campeonato Nacional."]
    },
    {
      name: "Estefani Bolaños",
      range: "2do DAN Kukkiwon.",
      role: "Directora de la sede Colegio PU.",
      image: "imagenes/entrenadores/estefyBolanos.jpg",
      miniImage: "imagenes/entrenadores/estefyBolanosMini.jpg",
      courses: ["Entrenadora Provincial y Nacional", "Título de arquitectura en la UCE."],
      achievements: ["Bronce parejas Campeonato Nacional Poomsae 2023.", "Seleccionada Provincial."]
    }
  ];

  return (
    <>
      <Header />
      <main style={{ paddingBottom: '4rem' }}>
        
        {/* SECCIÓN DE ENTRENADORES */}
        <section className="trainerTitles">
          <h1>Profesores y Entrenadores Debak</h1>
          <span></span>
          <p>Conoce más acerca de nuestro personal capacitado.</p>
        </section>

        <section className="trainerCards">
          {trainers.map((trainer, index) => (
            <div
              key={`trainer-${index}`}
              className="tarjeta"
              onClick={() => setSelected(trainer)}
              style={{ cursor: 'pointer' }}
            >
              <img src={trainer.image} alt={trainer.name} />
              <h2>{trainer.name}</h2>
              <p>{trainer.role}</p>
            </div>
          ))}
        </section>

        {/* SECCIÓN DEL PERSONAL INSTITUCIONAL */}
        <section className="trainerTitles" style={{ marginTop: '3rem' }}>
          <h1>Personal Institucional Debak</h1>
          <span></span>
          <p>Conoce más acerca de nuestro equipo administrativo.</p>
        </section>

        <section className="trainerCards">
          {staff.map((person, index) => (
            <div
              key={`staff-${index}`}
              className="tarjeta"
              onClick={() => setSelected(person)}
              style={{ cursor: 'pointer' }}
            >
              <img src={person.image} alt={person.name} />
              <h2>{person.name}</h2>
              <p>{person.role}</p>
            </div>
          ))}
        </section>

        {/* MODAL DE DETALLES CON MINIATURA */}
        {selected && (
          <Modal onClose={() => setSelected(null)}>
            <div className="modal-profile-header">
              {selected.miniImage && (
                <img 
                  src={selected.miniImage} 
                  alt={selected.name} 
                  className="modal-profile-thumb" 
                />
              )}
              <div className="modal-profile-info">
                <h2>{selected.name}</h2>
                <p className="modal-profile-role">{selected.role}</p>
                {selected.range && (
                  <p className="modal-profile-range">{selected.range}</p>
                )}
              </div>
            </div>
            
            <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

            {selected.courses && selected.courses.length > 0 && (
              <>
                <h3 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0', color: '#1e293b' }}>Capacitaciones y Cursos</h3>
                <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.5rem 0' }}>
                  {selected.courses.map((c, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem', color: '#475569' }}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            {selected.achievements && selected.achievements.length > 0 && (
              <>
                <h3 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0', color: '#1e293b' }}>Logros Destacados</h3>
                <ul style={{ paddingLeft: '1.25rem', margin: '0' }}>
                  {selected.achievements.map((a, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem', color: '#475569' }}>{a}</li>
                  ))}
                </ul>
              </>
            )}

            {selected.tasks && selected.tasks.length > 0 && (
              <>
                <h3 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem 0', color: '#1e293b' }}>Funciones</h3>
                <ul style={{ paddingLeft: '1.25rem', margin: '0' }}>
                  {selected.tasks.map((t, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem', color: '#475569' }}>{t}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal>
        )}
      </main>
    </>
  );
}