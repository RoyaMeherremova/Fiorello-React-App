import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Navigation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
