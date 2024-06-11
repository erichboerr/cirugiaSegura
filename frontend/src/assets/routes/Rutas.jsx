import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Inicio from "../pages/Inicio";
import Init from "../pages/Init";

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Init />} />
            </Routes>
        </Router>
    );
}

export default Rutas;

