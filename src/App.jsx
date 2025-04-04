import React from 'react';
import './assets/App.css';
import logo from "./assets/img/LME.png";
import dblogo from "./assets/img/dbLME.png";
import About from './pages/About';
import Menu from './pages/Menu';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
       <div class="navbar">
        <img src={dblogo} alt="LME" className="logo" />
        <div className="text-gray-50 menu" id="">
          <ul className="flex justify-end">
          <Link to="/menu"><li className="rounded-bl-lg pilih">
              Menu</li></Link>
            <Link to="/about"><li className="rounded-bl-lg pilih">
             About</li></Link>
          </ul>
          <Link to="/login"><div className='app-login'></div></Link>
        </div>
      </div>

      {/* Definisi Routing */}
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      {/* <!-- FOTTER --> */}
      <div class="footer">
        <div class="pertama">
          <img src="../src/assets/img/LME.png" alt="LookMyEys" title="LookMyEys" />
          <p>COPYRIGHT &copy; CREATED <br /> BY LookMyEyes</p>
        </div>
        <div class="isi">
          <div class="coment">
            <p>Terima kasih telah mengunjungi situs kami. Kami siap melayani Anda!, 
              Beli produk asli lokal berkualitas internasional hanya di LME!. 
              Bila ada sesuatu yang ingin di sampaikan anda bisa 
              kirim pesan pada sosial media kami yang tertera.</p>
          </div>
          <div class="sosmed">
            <div class="instagram">
              <a href=""><img src="../src/assets/img/sosmed/instagram.png" alt="" /></a>
              <p>instagram</p>
            </div>
            <div class="facebok">
              <a href=""><img src="../src/assets/img/sosmed/facebook.png" alt="" /></a>
              <p>facebook</p>
            </div>
            <div class="x">
              <a href=""><img src="../src/assets/img/sosmed/twitter.png" alt="" /></a>
              <p>twiter</p>
            </div>
            <div class="link">
              <a href=""><img src="../src/assets/img/sosmed/linkedin.png" alt="" /></a>
              <p>linkedin</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END FOTTER --> */}


    </Router>


  );
}

export default App;