import Header from './Header';
// Ya no necesitamos importar { Link } de 'react-router-dom'
import './estilos/examenes.css';

export default function Examenes() {
    const belts = [
        { name: 'Blanco Amarillo', colors: ['white', 'yellow'], tag: 'blanco-amarillo' },
        { name: 'Amarillo', colors: ['yellow'], tag: 'amarillo' },
        { name: 'Amarillo Verde', colors: ['yellow', 'green'], tag: 'amarillo-verde' },
        { name: 'Verde', colors: ['green'], tag: 'verde' },
        { name: 'Verde Azul', colors: ['green', 'blue'], tag: 'verde-azul' },
        { name: 'Azul', colors: ['blue'], tag: 'azul' },
        { name: 'Azul Rojo', colors: ['blue', 'red'], tag: 'azul-rojo' },
        { name: 'Rojo', colors: ['red'], tag: 'rojo' },
        { name: 'Rojo Negro', colors: ['red', 'black'], tag: 'rojo-negro' },
        { name: 'Negro', colors: ['black'], tag: 'negro' }
    ];

    const getBackground = (colors) => {
        if (colors.length === 1) {
            return colors[0];
        } else {
            return `linear-gradient(to right, ${colors[0]} 40%, ${colors[1]})`;
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className="examTitles">
                    <h1>Exámenes</h1>
                    <span></span>
                    <p>Información sobre los exámenes de ascenso. Haz clic en un cinturón para descargar el vocabulario.</p>
                  
                <section className='examenes'> 
                    <h2 style={{ fontSize: '32px' }}>Vocabulario</h2>
                    <span></span>
                    <div className="belts-container">
                        {belts.map((belt) => (
                            <a 
                                key={belt.name} 
                                href={`/imagenes/examenes/${belt.tag}.pdf`} 
                                download={`${belt.tag}.pdf`} 
                                className="belt-link"
                            >
                                <div className="belt-rect" style={{ background: getBackground(belt.colors) }}>
                                    <h2>{belt.name}</h2>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
                </section> 
            </main>
        </>
    );
}