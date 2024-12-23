import Home from './Pages/Home';
import Shop from './Pages/Shop';
import CustomerCare from './Pages/Customer_Care';
import AboutUs from './Pages/AboutUs';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {  Route, Routes, BrowserRouter, } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Customer_care" element={<CustomerCare />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
      </div>

    </BrowserRouter>
  );
};


export default App ;

