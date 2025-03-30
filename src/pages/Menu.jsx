import React from 'react'
import '../assets/Menu.css'
import buku from '../assets/img/produk/buku.png'
import toli from '../assets/img/produk/totbag.png'

const Menu = () => {
  return (
    <>
      <div class="menu-container">
        <div class="menu-judul">
          <h1>Welcome SEMUANYA</h1>
        </div>
        <div class="content">
          <div class="content-isi">
            <img src={buku} alt="" />
            <p>"Ada Nama mu Dalam Do'a"</p><br />
            <p>Beli lah buku "Ada Nama mu Dalam Do'a" edisi terbatas,
              buku ini cocok buat kalian yang lagi mengincar seorang wanita
              tetapi kamu merasa tidak cocok dikarena terbas dengan ketakwaan.</p><br />
            <p>Price : Rp80.000</p>
            <p>Owner : LME</p>
            <p>Karya : -</p>
          </div>
          <div class="content-isi">

          </div>
          <div class="content-isi">

          </div>
          <div class="content-isi">

          </div>
        </div>
      </div>
    </>
  );

};

export default Menu;
