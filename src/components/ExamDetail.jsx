import { useParams } from 'react-router-dom';
import Header from './Header';
import './estilos/examenes.css';

export default function ExamDetail() {
    const { belt } = useParams();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/imagenes/${belt}.pdf`;
        link.download = `${belt}-examen.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Header />
            <main className="exam-detail">
                <div className="exam-image-container">
                    <embed
                        src={`/imagenes/${belt}.pdf`}
                        type="application/pdf"
                        className="exam-image"
                    />
                </div>
                <div className="download-section">
                    <button onClick={handleDownload} className="download-btn">
                        Descargar Examen
                    </button>
                </div>
            </main>
        </>
    );
}