import Header from './Header';
import './estilos/catalogo.css';

export default function Doboks() {
    const products = [
        { name: 'Doboks Kyorugui tallas 100 - 200', image: '/imagenes/doboks-kyorugui.jpg' },
        { name: 'Dobok Poomsae Cadete Masculino', image: '/imagenes/dobok-poomsae-cadete-m.jpg' },
        { name: 'Dobok Poomsae Cadete Femenino', image: '/imagenes/dobok-poomsae-cadete-f.jpg' },
        { name: 'Dobok Poomsae Junior Masculino', image: '/imagenes/dobok-poomsae-junior-m.jpg' },
        { name: 'Dobok Poomsae Junior Femenino', image: '/imagenes/dobok-poomsae-junior-f.jpg' },
        { name: 'Dobok Senior', image: '/imagenes/dobok-senior.jpg' },
        { name: 'Dobok Olímpico Mooto', image: '/imagenes/dobok-mooto.jpg' },
        { name: 'Dobok Olímpico Tusah', image: '/imagenes/dobok-tusah.jpg' },
        { name: 'Dobok Rojo', image: '/imagenes/dobok-rojo.jpg' },
        { name: 'Dobok Azul', image: '/imagenes/dobok-azul.jpg' },
        { name: 'Dobok Negro', image: '/imagenes/dobok-negro.jpg' }
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