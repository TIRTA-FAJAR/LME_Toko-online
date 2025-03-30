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
   

      <div className="flex justify-around" id="navbar">
        <img src={dblogo} alt="LME" className="logo" />
        <div className="text-gray-50" id="">
          <ul className="flex justify-end mt-5 pr-10">
            <li className="mr-6 pr-2 pl-2 rounded-bl-lg pilih">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="mr-6 pr-2 pl-2 rounded-bl-lg pilih">
              <Link to="/about">About</Link>
            </li>
            <li className='app-login'>
              <Link to="/login">Login</Link>
            </li>
          </ul>
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