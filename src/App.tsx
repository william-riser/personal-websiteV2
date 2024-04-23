import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;