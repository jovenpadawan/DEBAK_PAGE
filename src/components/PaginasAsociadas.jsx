import Header from './Header';
import './estilos/styles.css';

export default function PaginasAsociadas() {
    const organizaciones = [
        {
            name: "World Taekwondo",
            image: "./imagenes/paginasAsociadas/wt.png",
            url: "https://worldtkd.simplycompete.com/"
        },
        {
            name: "Federación Ecuatoriana de Taekwondo",
            image: "./imagenes/paginasAsociadas/fetkd.jpg",
            url: "https://www.ecuatorianatkd.com/"
        },
        {
            name: "Asociación Deportiva de Pichincha",
            image: "./imagenes/paginasAsociadas/asotkd.png",
            url: "https://www.pichinchataekwondo.com/"
        },
        {
            name: "PATU (Pan American Taekwondo Union)",
            image: "./imagenes/paginasAsociadas/patu.png",
            url: "https://www.patutkd.org/"
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