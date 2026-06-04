import Header from './Header';
import './estilos/catalogo.css';

export default function Doboks() {
    const products = [
        { name: 'Doboks Kyorugui tallas 100 - 200', image: '/imagenes/catalogo/dobokCombate.png' },
        { name: 'Dobok Poomsae Cadete Masculino', image: '/imagenes/catalogo/dobokCadeteHombre.png' },
        { name: 'Dobok Poomsae Cadete Femenino', image: '/imagenes/catalogo/dobokCadeteMujer.png' },
        { name: 'Dobok Poomsae Junior Masculino', image: '/imagenes/catalogo/dobokJuniorHombre.png' },
        { name: 'Dobok Poomsae Junior Femenino', image: '/imagenes/catalogo/dobokJuniorMujer.png' },
        { name: 'Dobok Senior', image: '/imagenes/catalogo/dobokSenior.png' },
        { name: 'Dobok Olímpico Mooto', image: '/imagenes/catalogo/dobokMooto.png' },
        { name: 'Dobok Olímpico Tusah', image: '/imagenes/catalogo/dobokTusah.png' },
        { name: 'Dobok Rojo', image: '/imagenes/catalogo/dobokRojo.png' },
        { name: 'Dobok Azul', image: '/imagenes/catalogo/dobokAzul.png' },
        { name: 'Dobok Negro', image: '/imagenes/catalogo/dobokNegro.png' }
    ];

    return (
        <>
            <Header />
            <main>
                <section className="catalogoTitles">
                    <h1>Doboks</h1>
                    <span></span>
                </section>
                <section className="catalogo">
                    <div className="products-container">
                        {products.map((product) => (
                            <div key={product.name} className="product-card">
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