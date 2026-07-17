import Header from './Header';
import SeoOptimization from './SeoOptimization';
import { Link } from 'react-router-dom';
import './estilos/catalogo.css';

export default function Catalogo() {
    const products = [
        { name: 'Doboks', image: './imagenes/catalogo/dobokCombatePortada.png', link: '/catalogo/doboks' },
        { name: 'Uniforme Debak', image: './imagenes/catalogo/camisetaDebak.jpg', link: '/catalogo/uniformes' },
        { name: 'Implementos', image: './imagenes/catalogo/implementos.jpg', link: '/catalogo/implementos' }
    ];

    return (
        <>
            <SeoOptimization title="Catálogo" description="Explora el catálogo de doboks, uniformes e implementos deportivos de DEBAK TKD." />
            <Header />
            <main>
                <section className="catalogoTitles">
                    <h1>Catálogo de Productos</h1>
                    <span></span>
                </section>
                <section className="products">
                    <div className="products-container">
                        {products.map((product) => (
                            <Link key={product.name} to={product.link} className="product-link">
                                <div className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-name">
                                        <h3>{product.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}