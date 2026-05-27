import Header from './Header';
import { Link } from 'react-router-dom';
import './estilos/examenes.css';

export default function Examenes() {
    const belts = [
        { name: 'Blanco-amarillo', colors: ['white', 'yellow'] },
        { name: 'Amarillo', colors: ['yellow'] },
        { name: 'Amarillo-verde', colors: ['yellow', 'green'] },
        { name: 'Verde', colors: ['green'] },
        { name: 'Verde-azul', colors: ['green', 'blue'] },
        { name: 'Azul', colors: ['blue'] },
        { name: 'Azul-rojo', colors: ['blue', 'red'] },
        { name: 'Rojo', colors: ['red'] },
        { name: 'Rojo-negro', colors: ['red', 'black'] },
        { name: 'Negro', colors: ['black'] }
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
                    <p>Información sobre los exámenes de ascenso.</p>
                </section>   
                <section className='examenes'> 
                    <div className="belts-container">
                        {belts.map((belt) => (
                            <Link key={belt.name} to={`/examenes/${belt.name}`} className="belt-link">
                                <div className="belt-rect" style={{ background: getBackground(belt.colors) }}>
                                    <h2>{belt.name.replace('-', ' ')}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

