import Header from './Header';
import SeoOptimization from './SeoOptimization';
import './estilos/catalogo.css';

const implementos = [
    { name: 'Protector de Antebrazo', image: './imagenes/catalogo/brazeras.png' },
    { name: 'Protector de Canilla', image: './imagenes/catalogo/canilleras.jpg' },
    { name: 'Guantines', image: './imagenes/catalogo/guantines.jpg' },
    { name: 'Empeineras', image: './imagenes/catalogo/empeineras.jpg' },
    { name: 'Inguinales Masculinos', image: './imagenes/catalogo/inguinalMasc.jpg' },
    { name: 'Inguinales Femeninos', image: './imagenes/catalogo/inguinalFem.png' },
    { name: 'Petos', image: './imagenes/catalogo/peto.png' },
    { name: 'Cabezales', image: './imagenes/catalogo/cabezal.jpg' }
];

export default function Implementos() {
    const numeroWhatsApp = "593963240963"; 

    const consultarPorWhatsApp = (nombreProducto) => {
        const mensaje = `Hola, vengo de la página web. Estoy interesado en el siguiente producto: *${nombreProducto}*. ¿Me podrían brindar más información?`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <SeoOptimization title="Catálogo" description="Consulta implementos deportivos y accesorios oficiales para la práctica del Taekwondo en DEBAK TKD." />
            <Header />
            <main style={{ paddingBottom: '4rem' }}>
                <section className="catalogoTitles">
                    <h1>Implementos</h1>
                    <span></span>
                </section>
                <section className="catalogo">
                    <div className="products-container">
                        {implementos.map((item) => (
                            <div 
                                key={item.name} 
                                className="product-card"
                                onClick={() => consultarPorWhatsApp(item.name)}
                                title="Consultar disponibilidad en WhatsApp"
                            >
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