import Header from './Header';
import SeoOptimization from './SeoOptimization';
import CatalogNavigation from './CatalogNavigation';
import './estilos/catalogo.css';

export default function Doboks() {
    const numeroWhatsApp = "593963240963";
    const products = [
        { name: 'Doboks Kyorugui tallas 100 - 200', image: './imagenes/catalogo/dobokCombate.png' },
        { name: 'Dobok Poomsae Cadete Masculino', image: './imagenes/catalogo/dobokCadeteHombre.png' },
        { name: 'Dobok Poomsae Cadete Femenino', image: './imagenes/catalogo/dobokCadeteMujer.png' },
        { name: 'Dobok Poomsae Junior Masculino', image: './imagenes/catalogo/dobokJuniorHombre.png' },
        { name: 'Dobok Poomsae Junior Femenino', image: './imagenes/catalogo/dobokJuniorMujer.png' },
        { name: 'Dobok Senior', image: './imagenes/catalogo/dobokSenior.png' },
        { name: 'Dobok Olímpico Mooto', image: './imagenes/catalogo/dobokMooto.png' },
        { name: 'Dobok Olímpico Tusah', image: './imagenes/catalogo/dobokTusah.png' },
        { name: 'Dobok Rojo', image: './imagenes/catalogo/dobokRojo.png' },
        { name: 'Dobok Azul', image: './imagenes/catalogo/dobokAzul.png' },
        { name: 'Dobok Negro', image: './imagenes/catalogo/dobokNegro.png' }
    ];

    const consultarPorWhatsApp = (nombreProducto) => {
        const mensaje = `Hola, vengo de la página web. Estoy interesado en el siguiente producto: *${nombreProducto}*. ¿Me podrían brindar más información?`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <SeoOptimization title="Catálogo" description="Explora los doboks oficiales de DEBAK TKD para diferentes categorías y estilos." />
            <Header />
            <main className="catalog-page catalog-page--doboks">
                <section className="catalogoTitles">
                    <h1>DOBOKS</h1>
                    <span></span>
                </section>
                <CatalogNavigation />
                <section className="catalogo">
                    <div className="products-container">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="product-card"
                                onClick={() => consultarPorWhatsApp(product.name)}
                                title="Consultar disponibilidad en WhatsApp"
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-name">
                                    <h3>{product.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}