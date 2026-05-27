import Header from './Header';
import './estilos/catalogo.css';

const implementos = [
    { name: 'Protector de Antebrazo', image: '/imagenes/protector-antebrazo.jpg' },
    { name: 'Protector de Canilla', image: '/imagenes/protector-canilla.jpg' },
    { name: 'Guantines', image: '/imagenes/guantines.jpg' },
    { name: 'Empeineras', image: '/imagenes/empeineras.jpg' },
    { name: 'Inguinales Masculinos', image: '/imagenes/inguinales-masculinos.jpg' },
    { name: 'Inguinales Femeninos', image: '/imagenes/inguinales-femeninos.jpg' },
    { name: 'Petos', image: '/imagenes/petos.jpg' },
    { name: 'Cabezales', image: '/imagenes/cabezales.jpg' }
];

export default function Implementos() {
    return (
        <>
            <Header />
            <main>
                <section className="catalogoTitles">
                    <h1>Implementos</h1>
                    <span></span>
                </section>
                <section className="catalogo">
                    <div className="products-container">
                        {implementos.map((item) => (
                            <div key={item.name} className="product-card">
                                <div className="product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="product-name">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
