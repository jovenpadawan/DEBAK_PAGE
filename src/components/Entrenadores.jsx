import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import './Estilos/styles.css';

export default function Entrenadores() {
  const [selected, setSelected] = useState(null);

  const staff = [
    {
      name: "Rodneey Quisnia",
      role: "Departamento Administrativo",
      image: "imagenes/personal/personal1.jpg",
      courses: ["Curso 1", "Curso 2"],
      achievements: ["Logro 1", "Logro 2"]
    },
    {
      name: "Andrés Alejo",
      role: "Marketing",
      image: "imagenes/personal/personal2.jpg",
      courses: ["Curso 1", "Curso 2"],
      achievements: ["Logro 1", "Logro 2"]
    },
    {
      name: "Miguel Ortuño",
      role: "Diseñador y Desarrollador Web",
      image: "imagenes/personal/personal3.jpg",
      courses: ["Curso 1", "Curso 2"],
      achievements: ["Logro 1", "Logro 2"]
    }
  ];

  const trainers = [
    {
      name: "Jimmy Bolaños",
      range: "5to DAN Nacional y 5to DAN Kukkiwon.",
      role: "Director y Presidente del club DEBAK.",
      image: "imagenes/entrenadores/jimmyBolanos.jpg",
      courses: ["Acreditación de entrenadores 2026.", "Poomsae avanzado"],
      achievements: ["Campeón nacional 2019", "Medalla de oro internacional 2021"]
    },
    {
      name: "Marcelo Prado",
      range: "5to DAN Nacional y 5to DAN Kukkiwon.",
      role: "Maestro de la modalidad poomsae.",
      image: "imagenes/entrenadores/marceloPrado.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Técnicas mixtas"],
      achievements: ["Preparador físico certificado", "Kung fu", "Karate"]
    },
    {
      name: "Adrián Lara",
      range: "1er DAN Nacional.",
      role: "Profesor de combate y director de la sede Colegio Liga.",
      image: "imagenes/entrenadores/adrianLara.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Práctica de poomsae, freestyle y exhibición 2025.", "Actualización del reglamento kyorugui 2025."],
      achievements: ["Ing. en Administración de Empresas.", "Lic. en Educación Mención en Educación Física."]
    },
    {
      name: "Rodneey Quisnia",
      range: "1er DAN Nacional.",
      role: "Profesor de la modalidad poomsae.",
      image: "imagenes/entrenadores/rodneeyQuisnia.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Coreografía de poomsae"],
      achievements: ["Jugador nacional de poomsae", "Entrenador del año 2022"]
    },
    {
      name: "Jared Vargas",
      range: "1er DAN Nacional.",
      role: "Director de la sede Carcelén Bajo.",
      image: "imagenes/entrenadores/jaredVargas.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional2026.", "Técnicas mixtas"],
      achievements: ["Preparador físico certificado", "Kung fu", "Karate"]
    },
    {
      name: "Santiago Llaguno",
      range: "1er DAN Nacional.",
      role: "Director de la sede Tumbaco.",
      image: "imagenes/entrenadores/santiagoLlaguno.jpg",
      courses: ["Acreditación de entrenadores Provincial y Nacional 2026.", "Capacitación en entrenamiento personal y deportivo."],
      achievements: ["Medalla de bronce en el Ranking Mundial GR Riobamba 2024", "Principiante en Jujitsu"]
    },
    {
      name: "Estefani Bolaños",
      range: "2do DAN Kukkiwon.",
      role: "Directora de la sede Colegio PU.",
      image: "imagenes/entrenadores/estefyBolanos.jpg",
      courses: ["Entrenadora Provincial y Nacional", "Título de arquitectura en la UCE."],
      achievements: ["Bronce parejas Campeonato Nacional Poomsae 2023.", "Seleccionada Provincial."]
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="trainerTitles">
          <h1>Profesores y Entrenadores Debak</h1>
          <span></span>
          <p>Conoce más acerca de nuestro personal capacitado.</p>
        </section>

        <section className="trainerCards">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="tarjeta"
              id={index === 0 ? "details" : ""}
              onClick={() => setSelected(trainer)}
              style={{ cursor: 'pointer' }}
            >
              <img src={trainer.image} alt={trainer.name} />
              <h2>{trainer.name}</h2>
              <p>{trainer.role}</p>
            </div>
          ))}
        </section>
        {selected && (
          <Modal onClose={() => setSelected(null)}>
            <h2>{selected.name}</h2>
            <p>{selected.role}</p>
            <p>{selected.range}</p>
            <h3>Cursos</h3>
            <ul>
              {selected.courses.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <h3>Logros</h3>
            <ul>
              {selected.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </Modal>
        )}

        <section className="trainerTitles">
          <h1>Personal Institucional Debak</h1>
          <span></span>
          <p>Conoce más acerca de nuestro equipo administrativo.</p>
        </section>

        <section className="trainerCards">
          {staff.map((person, index) => (
            <div
              key={index}
              className="tarjeta"
              id={index === 0 ? "details" : ""}
              onClick={() => setSelected(person)}
              style={{ cursor: 'pointer' }}
            >
              <img src={person.image} alt={person.name} />
              <h2>{person.name}</h2>
              <p>{person.role}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

