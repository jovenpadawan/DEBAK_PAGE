import Header from './Header';
import './estilos/styles.css';

export default function PaginasAsociadas() {
    const organizaciones = [
        {
            name: "World Taekwondo",
            image: "/imagenes/asociadas/world-tkd.png",
            url: "http://www.worldtaekwondo.org/"
        },
        {
            name: "Federación Ecuatoriana de Taekwondo",
            image: "/imagenes/asociadas/fetkd.png",
            url: "https://www.facebook.com/fetkd.ecuador/"
        },
        {
            name: "Concentración Deportiva de Pichincha",
            image: "/imagenes/asociadas/cdp.png",
            url: "https://teampichincha.com/"
        },
        {
            name: "PATU (Pan American Taekwondo Union)",
            image: "/imagenes/asociadas/patu.png",
            url: "https://www.patu.org/"
        }
    ];

    return (
        <>
            <Header />
            <main style={{ paddingBottom: '4rem' }}>
                <section className="asociadasTitles">
                    <h1>Páginas Asociadas</h1>
                    <span></span>
                </section>
                
                <section className="asociadas-seccion">
                    <div className="asociadas-container">
                        {organizaciones.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="asociada-card"
                            >
                                <div className="asociada-image">
                                    <img src={item.image} alt={`Logo de ${item.name}`} />
                                </div>
                                <div className="asociada-name">
                                    <h3>{item.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}