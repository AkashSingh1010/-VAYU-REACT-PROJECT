import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Loginpage from './Components/Loginpage';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Story from './Components/Story';
import About from './Components/About';








function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Loginpage /></>}></Route>
        <Route path="/home" element={<><Homepage /><Footer /></>}></Route>
        <Route path="/home/service" element={<><Header /><Service /><Footer /></>}></Route>
        <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
        <Route path="/service" element={<><Header /><Service /><Footer /></>}></Route>
        <Route path="/story" element={<><Header /><Story /><Footer /></>}></Route>
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
