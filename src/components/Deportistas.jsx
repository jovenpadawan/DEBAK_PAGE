import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import './Estilos/styles.css';

export default function Deportistas() {
  const [selected, setSelected] = useState(null);

  const athletes = [
    {
      name: "Julieta Grisales",
      rank: "Cinturón azul.",
      level: "intermedio",
      image: "img.png",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
      name: "Mariangel Madrid",
      rank: "Cinturón azul.",
      level: "intermedio",
      image: "img.png",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
      name: "Bryan Valdez",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "img.png",
      courses: ["Cardio intensivo", "Defensa personal"],
      achievements: ["Participante nacional 2021", "Medalla de bronce 2022"]
    },
    {
      name: "María López",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "img.png",
      achievements: ["Torneo regional 2020", "Entrenador asistente 2023"]
    },
    {
      name: "Adrián Martínez",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "img.png",
      achievements: ["Torneo regional 2020", "Entrenador asistente 2023"]
    },
    {
      name: "Martín Moreno",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "img.png",
      achievements: ["Torneo regional 2020", "Entrenador asistente 2023"]
    },
    {
      name: "Joaquín Moreno",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "img.png",
      achievements: ["Torneo regional 2020", "Entrenador asistente 2023"]
    },
    {
      name: "Iván Marcano",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/ivanMarcano.jpg",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    }
  ];

  return ( 
    <>
      <Header />
      <main>
        <section className="deportistTitles">
          <h1>Deportistas Destacados de Debak</h1>
          <span></span>
          <p>Conoce más acerca de nuestros deportistas.</p>
        </section>

        {[
          { key: 'novato-intermedio', title: 'Deportistas Novatos e Intermedios' },
          { key: 'avanzado', title: 'Deportistas Avanzados' }
        ].map((level) => (
          <section key={level.key} className="deportistLevel">
            <h1 className="sectionTitle">{level.title}</h1>
            <span className="sectionDivider"></span>
            <div className="deportistCards">
              {athletes
                .filter((a) =>
                  level.key === 'novato-intermedio'
                    ? ['novato', 'intermedio'].includes(a.level)
                    : a.level === level.key
                )
                .map((athlete) => (
                  <div
                    key={athlete.name}
                    className="tarjeta"
                    onClick={() => setSelected(athlete)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={athlete.image} alt={athlete.name} />
                    <h2>{athlete.name}</h2>
                    <p>{athlete.rank}</p>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {selected && (
          <Modal onClose={() => setSelected(null)}>
            <h2>{selected.name}</h2>
            <p>{selected.rank}</p>
            <h3>Logros</h3>
            <ul>
              {selected.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </Modal>
        )}
      </main>
    </>
  );
}
