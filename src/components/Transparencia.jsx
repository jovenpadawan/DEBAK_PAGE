import Header from './Header';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function Transparencia() {
    const secciones = [
        {
            titulo: 'Informe de Gestión',
            archivos: [
                { documento: 'rendicionCuentas2025', textoEnlace: 'Rendición de cuentas 2025' }
            ]
        },
        {
            titulo: 'Estatuto',
            archivos: [
                { documento: 'estatutoDEBAK', textoEnlace: 'Estatuto DEBAK' }
            ]
        },
        {
            titulo: 'Protocolos y Manuales',
            archivos: [
                { documento: 'protocoloInternoUsoCorrectoDelDobok', textoEnlace: 'Protocolo de Uso Correcto del Dobok' },
                { documento: 'protocoloInternoAsistenciaDisciplina', textoEnlace: 'Asistencia y Disciplina' },
                { documento: 'protocoloInternoErradicacionViolencia', textoEnlace: 'Prevención y Erradicación de Violencia, Discriminación y Acoso Laboral' }
            ]
        },
        {
            titulo: 'Reglamentos',
            archivos: [
                { documento: 'reglamentoInternoDEBAK', textoEnlace: 'Reglamento Interno DEBAK' }
            ]
        }
    ];

    const handleDownload = (nombreArchivo) => {
        const link = document.createElement('a');
        link.href = `/imagenes/transparencia/${nombreArchivo}.pdf`;
        link.download = `${nombreArchivo}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <SeoOptimization title="Transparencia" description="Consulta documentos institucionales, estatutos, reglamentos y protocolos de DEBAK TKD." />
            <Header />
            <main>
                <section className="transparencyTitles">
                    <h1>Transparencia</h1>
                    <span></span>
                </section>
                <div className="gridContainer">
                    {secciones.map((sec, index) => (
                        <div className="transparencyContent" key={index}>
                            <h3>{sec.titulo}</h3>
                            {sec.archivos.map((arc, arcIndex) => (
                                <section 
                                    className="filesContainer" 
                                    key={arcIndex}
                                    onClick={() => handleDownload(arc.documento)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {arc.textoEnlace}
                                </section>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}