import {Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
  <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
  </div>
  );
 
}

export default App;
