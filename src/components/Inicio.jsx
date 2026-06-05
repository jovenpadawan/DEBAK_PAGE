import Header from './Header';
import Carousel from './Carousel';
import './estilos/styles.css';

export default function Inicio() {
  return (
    <>
      <Header />
      <main>
        <section className="h1titles">
          <h1>DEBAK TKD</h1>
          <span></span>
        </section>
        <Carousel />

        <section className="intro">
          <h2>¿Quiénes somos?</h2>
          <p>Somos una familia de campeones dejando en alto al Ecuador. Formamos grandes seres humanos para la vida.</p>
        </section>
      </main>
    </>
  );
}
