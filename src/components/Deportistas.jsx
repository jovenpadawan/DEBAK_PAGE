import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import './Estilos/styles.css';

export default function Deportistas() {
  const [selected, setSelected] = useState(null);

  const athletes = [
    {
      name: "Julieta Grisales",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/chuletaGrisales.jpg",
      achievements: ["Campeona del Interescolar de Taekwondo 2026.", "Bronce Poomsae del Patu12 2026."]
    },
    {
      name: "Mariangel Madrid",
      rank: "Cinturón azul.",
      level: "intermedio",
      image: "/imagenes/deportistas/mariMadrid.png",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona del Intercolegial de Taekwondo 2026.", "Campeona Kyorugui y Bronce Poomsae en el I Campeonato Nacional Interclubes Manabí 2026."]
    },
    {
      name: "Bryan Valdez",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/bryanValdez.jpg",
      achievements: ["Campeón Kyorugui del Campeonato Nacional Infantil Quito 2026.", "Doble Campeón y Bronce del Challenger Ecuador."]
    },
    {
      name: "Tifany Ortega",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/tifanyOrtega.jpg",
      achievements: ["Bronce Kyorugui en Patu12 2026."]
    },
    {
      name: "María López",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "/imagenes/deportistas/mariaEduarda.jpg",
      achievements: ["Vicecampeona del I Campeonato Nacional Interclubes Manabí 2026.", "Mejor deportista de Pichincha en su categoría 2025."]
    },
    {
      name: "Adrián Martínez",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/adrianMartinez.jpg",
      achievements: ["Campeón del Interescolar de Taekwondo 2026.", "Bronce Poomsae del Patu12 2026."]
    },
    {
      name: "Martín Moreno",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/martinMoreno.jpg",
      achievements: ["Vicecampeón Kyorugui del Patu12 2026."]
    },
    {
      name: "Joaquín Moreno",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/joacoMoreno.jpg",
      achievements: ["Campeón del Interescolar de Taekwondo 2026."]
    },
    {
      name: "David Obando",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "/imagenes/deportistas/davidObando.jpg",
      achievements: ["Campeón Poomsae y Kyorugui del I Campeonato Nacional Interclubes Manabí 2026.", "Campeón Poomsae y Bronce Kyorugui del Patu12 2026."]
    },
    {
      name: "Leonardo Obando",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "/imagenes/deportistas/leoObando.jpg",
      achievements: ["Campeón Kyorugui del Campeonato Nacional Infantil Quito 2026."]
    },
    {
      name: "Iván Marcano",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/ivanMarcano.jpg",
      achievements: ["Campeón Poomsae y Vicecampeón Freestyle del Patu12 2026.", "Campeón Kyorugui, Vicecampeón Freestyle y Bronce Poomsae del I Campeonato Nacional Interclubes Manabí 2026."]
    },
    {
      name: "Emilio Ayala",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/ivanMarcano.jpg",
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
      name: "Zoe Celi",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/zoeCeli.jpg",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
      name: "Héctor Ruíz",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/ivanMarcano.jpg",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
      name: "Joaquín Vargas",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/ivanMarcano.jpg",
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
       name: "Arantxa Marcano",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "/imagenes/deportistas/arantxaMarcano.jpg",
      achievements: ["Bronce en Patu12 2026.", "Bronce en el Campeonato Nacional Infantil Quito 2026."]
    },
    {
       name: "Kevin Flores",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/kevinFlores.jpg",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
       name: "Julián Ibarra",
      rank: "Cinturón negro.",
      level: "avanzado",
      image: "/imagenes/deportistas/julianIbarra.jpg",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona provincial 2023", "Mejor graduada 2022"]
    },
    {
      name: "Estefany Barrera",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "/imagenes/deportistas/estefanyBarrera.jpg",
      achievements: ["Campeona del Ecuador Challenger.", "Bronce en Patu12 2026."]
    },
    {
      name: "Andy Almeida",
      rank: "Cinturón amarillo.",
      level: "intermedio",
      image: "/imagenes/deportistas/andyAlmeida.jpg",
      achievements: ["Doble campeón del Ecuador Challenger.", "Vicecampeón del Patu12 2026."]
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
