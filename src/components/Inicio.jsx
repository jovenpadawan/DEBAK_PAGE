import Header from './Header';
import Carousel from './Carousel';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function Inicio() {
  return (
    <>
      <SeoOptimization title="Inicio" description="DEBAK TKD, club de taekwondo de alto rendimiento en Ecuador con formación integral, disciplina y excelencia deportiva." />
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
