import React from 'react';
import '../assets/About.css'

const About = () => {
  return ( 
    <>
    <div class="container">
      <div class="judul">
          <h1>About <teks class="lme">LME</teks></h1>
          <img src="../src/assets/img/LME.png" alt="" />
      </div>
      <div class="isi">
            <p>
                <teks class="lme">LME</teks>
                Sebuah website yang akan mendistribusikan sebuah produk dalam bentuk pakaian, aksesoris, 
                dan produk berbahan lokal dengan kualitas internasional. 
                Dalam hal ini bertujuan untuk mempromosikan serta memperkenalkan 
                kebenaran lokal terhadap global, bahwa Indonesia memproduksi brand dengan terbaik. So,
                 support brand-brand lokal dengan cara 
                mengoleksi barang tersebut.  <br/> 
                <i class="note">Note: *Jika anda berminat untuk menjadi brand ambasador <teks class="lme">LME</teks>, 
                maka hubungi kontak kami yang tersedia.</i>
            </p>
        </div>
    </div>
    </>
  );

};

export default About;
