import Header from './Header';
import SeoOptimization from './SeoOptimization';
import CatalogNavigation from './CatalogNavigation';
import './estilos/catalogo.css';

export default function Uniformes() {
    const numeroWhatsApp = "593963240963";
    const uniforms = [
        { name: 'Piel Debak', image: './imagenes/catalogo/pielDebak.jpg' },
        { name: 'Camiseta Debak', image: './imagenes/catalogo/camisetaDebak.jpg' },
        { name: 'Pantaloneta Debak', image: './imagenes/catalogo/pantaloneta.jpg' },
        { name: 'Mochila Debak', image: './imagenes/catalogo/mochilaDebak.jpeg' }
    ];

    const consultarPorWhatsApp = (nombreProducto) => {
        const mensaje = `Hola, vengo de la página web. Estoy interesado en el siguiente producto: *${nombreProducto}*. ¿Me podrían brindar más información?`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <SeoOptimization title="Catálogo" description="Descubre uniformes y prendas oficiales para deportistas y entrenadores de DEBAK TKD." />
            <Header />
            <main className="catalog-page catalog-page--uniformes">
                <section className="catalogoTitles">
                    <h1>Uniformes Debak</h1>
                    <span></span>
                </section>
                <CatalogNavigation />
                <section className="catalogo">
                    <div className="products-container">
                        {uniforms.map((uniform) => (
                            <div
                                key={uniform.name}
                                className="product-card"
                                onClick={() => consultarPorWhatsApp(uniform.name)}
                                title="Consultar disponibilidad en WhatsApp"
                            >
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