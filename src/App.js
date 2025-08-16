import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
     
      <Routes>
        {/* Example Route setup */}
        <Route path="/" element={<Home />} />
        <Route path="/about" />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
