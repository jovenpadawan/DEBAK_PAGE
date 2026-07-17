import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import './estilos/styles.css';

export default function Deportistas() {
  const [selected, setSelected] = useState(null);

  const athletes = [
    {
      name: "Julieta Grisales",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "./imagenes/deportistas/chuletaGrisales.jpg",
      achievements: ["Campeona del Interescolar de Taekwondo 2026.", "Bronce Poomsae del Patu12 2026."]
    },
    {
      name: "Mariangel Madrid",
      rank: "Cinturón azul.",
      level: "intermedio",
      image: "./imagenes/deportistas/mariMadrid.png",
      courses: ["Entrenamiento físico", "Técnica de patadas"],
      achievements: ["Campeona del Intercolegial de Taekwondo 2026.", "Campeona Kyorugui y Bronce Poomsae en el I Campeonato Nacional Interclubes Manabí 2026.", "Integrante del equipo de Juegos Nacionales 2026."]
    },
    {
      name: "Bryan Valdez",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "./imagenes/deportistas/bryanValdez.jpg",
      achievements: ["Campeón Kyorugui del Campeonato Nacional Infantil Quito 2026.", "Doble Campeón y Bronce del Challenger Ecuador."]
    },
    {
      name: "María López",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "./imagenes/deportistas/mariaEduarda.jpg",
      achievements: ["Vicecampeona del I Campeonato Nacional Interclubes Manabí 2026.", "Mejor deportista de Pichincha en su categoría 2025."]
    },
    {
      name: "Adrián Martínez",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "./imagenes/deportistas/adrianMartinez.jpg",
      achievements: ["Campeón del Interescolar de Taekwondo 2026.", "Bronce Poomsae del Patu12 2026."]
    },
    {
      name: "Martín Moreno",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "./imagenes/deportistas/martinMoreno.jpg",
      achievements: ["Vicecampeón Kyorugui del Patu12 2026."]
    },
    {
      name: "Joaquín Moreno",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "./imagenes/deportistas/joacoMoreno.jpg",
      achievements: ["Campeón del Interescolar de Taekwondo 2026."]
    },
    {
      name: "David Obando",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "./imagenes/deportistas/davidObando.jpg",
      achievements: ["Campeón Poomsae y Kyorugui del I Campeonato Nacional Interclubes Manabí 2026.", "Campeón Poomsae y Bronce Kyorugui del Patu12 2026."]
    },
    {
      name: "Leonardo Obando",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "./imagenes/deportistas/leoObando.jpg",
      achievements: ["Campeón Kyorugui del Campeonato Nacional Infantil Quito 2026."]
    },
    {
      name: "Iván Marcano",
      rank: "Cinturón negro, 1er DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/ivanMarcano.jpg",
      achievements: ["Campeón Poomsae y Vicecampeón Freestyle del Patu12 2026.", "Campeón Kyorugui, Vicecampeón Freestyle y Bronce Poomsae del I Campeonato Nacional Interclubes Manabí 2026.", "Vicecampeón poomsae y Campeón combate en el Campeonato Ranking Mundial G1 República Dominicana 2026."]
    },
    {
      name: "Emilio Ayala",
      rank: "Cinturón negro, 1er DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/emilioAyala.jpg",
      achievements: ["Seleccionado provincial.", "Medallista de Juegos Nacionales Estudiantiles.", "Representante de Ecuador en la President Cup 2025.", "Integrante del equipo de Juegos Nacionales 2026."]
    },
    {
      name:"Juan Puente",
      rank: "Cinturón negro, 1er DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/juanPuente.jpg",
      achievements: ["Seleccionado Provincial y Nacional.", "Medallista Panamericano.", "Representante del Ecuador en el US Open y Ranking Mundiales.", "Campeón Provincial y Nacional.", "Multimedallista de Juegos Nacionales."]
    },
    {
      name:"Kevin Flores",
      rank: "Cinturón negro, 2do DAN.",
      level: "avanzado",
      image: "./imagenes/deportistas/kevinFlores.jpg",
      achievements: ["Ex-seleccionado nacional en combate -68kg.", "Medallista internacional.", "Representante de Ecuador en varios ranking mundiales.", "Multimedallista de varios juegos nacionales."]
    },
    {
      name:"Charllote Campusano",
      rank:"Cinturón negro, 1er DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/charlloteCampusano.jpg",
      achievements: ["Seleccionada Provincial y Nacional en combate y poomsae.", "Representante del Ecuador en el Dominican Republica Ranking G1."]
    },
    {
      name:"Julián Ibarra",
      rank: "Cinturón negro, 1er DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/julianIbarra.jpg",
      achievements: ["Seleccionado de Pichincha", "Ex-preselección Nacional.", "Campeón Nacional.", "Medallista de Juegos Nacionales."]
    },
    {
      name: "Zoe Celi",
      rank: "Cinturón negro, 2do DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/zoeCeli.jpg",
      achievements: ["Seleccionada Provincial y Nacional desde 2022.", "Doble medalla de bronce panamericana.", "Campeona nacional de manera consecutiva desde 2023.", "Medalla de oro, plata y bronce en Juegos Nacionales.", "Integrante del equipo de Juegos Nacionales 2026."]
    },
    {
      name:"Gabriel Ruíz",
      rank: "Cinturón negro, 1er DAN Nacional.",
      level: "avanzado",
      image: "./imagenes/deportistas/gabrielRuiz.jpg",
      achievements: ["Seleccionado provincial y nacional.", "Vicecampeón de Juegos Nacionales.", "Medallista Panamericano.", "Integrante del equipo de Juegos Nacionales 2026."]
    },
    {
      name: "Arantxa Marcano",
      rank: "Cinturón azul-rojo.",
      level: "intermedio",
      image: "./imagenes/deportistas/arantxaMarcano.jpg",
      achievements: ["Bronce en Patu12 2026.", "Bronce en el Campeonato Nacional Infantil Quito 2026.", "Bronce II Ecuador Challenger 2026."]
    },
    {
      name: "Estefany Barrera",
      rank: "Cinturón verde.",
      level: "intermedio",
      image: "./imagenes/deportistas/estefanyBarrera.jpg",
      achievements: ["Campeona del Ecuador Challenger.", "Bronce en Patu12 2026."]
    },
    {
      name: "Andy Almeida",
      rank: "Cinturón amarillo.",
      level: "intermedio",
      image: "./imagenes/deportistas/andyAlmeida.jpg",
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