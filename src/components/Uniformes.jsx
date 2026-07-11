import Header from './Header';
import './estilos/catalogo.css';

export default function Uniformes() {
    const uniforms = [
        { name: 'Piel Debak', image: './imagenes/catalogo/pielDebak.jpg' },
        { name: 'Camiseta Debak', image: './imagenes/catalogo/camisetaDebak.jpg' },
        { name: 'Pantaloneta Debak', image: './imagenes/catalogo/pantaloneta.jpg' },
        //{ name: 'Mochila Debak', image: './imagenes/catalogo/mochilaDebak.jpg' }
    ];

    return (
        <>
            <Header />
            <main>
                <section className="catalogoTitles">
                    <h1>Uniformes Debak</h1>
                    <span></span>
                </section>
                <section className="catalogo">
                    <div className="products-container">
                        {uniforms.map((uniform) => (
                            <div key={uniform.name} className="product-card">
                                <div className="product-image">
                                    <img src={uniform.image} alt={uniform.name} />
                                </div>
                                <div className="product-name">
                                    <h3>{uniform.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}