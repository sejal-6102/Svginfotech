import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Contactus from './Pages/Contactus/Contactus';


function App() {
  return (
    <Router>
     
      <Routes>
        {/* Example Route setup */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contactus />} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
