import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Estilos/styles.css';

import Inicio from './components/Inicio';
import Entrenadores from './components/Entrenadores';
import Deportistas from './components/Deportistas';
import Contactanos from './components/Contactanos';
import Transparencia from './components/Transparencia';
import Examenes from './components/examenes';
import Catalogo from './components/Catalogo';
import Doboks from './components/Doboks';
import Uniformes from './components/Uniformes';
import Implementos from './components/Implementos';
import InstitucionMision from './components/InstitucionMision';
import InstitucionVision from './components/InstitucionVision';
import InstitucionEstructura from './components/InstitucionEstructura';
import Eventos from './components/Eventos';
import PaginasAsociadas from './components/PaginasAsociadas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/deportistas" element={<Deportistas />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/examenes" element={<Examenes />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/doboks" element={<Doboks />} />
        <Route path="/catalogo/uniformes" element={<Uniformes />} />
        <Route path="/catalogo/implementos" element={<Implementos />} />
        <Route path="/institucion" element={<InstitucionMision />} />
        <Route path="/institucion/mision" element={<InstitucionMision />} />
        <Route path="/institucion/vision" element={<InstitucionVision />} />
        <Route path="/institucion/estructura" element={<InstitucionEstructura />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/paginasAsociadas" element={<PaginasAsociadas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
