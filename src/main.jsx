import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>, 
)

// muncul logo
window.addEventListener("load", function() {
  setTimeout(function() {
    document.body.classList.add("loaded");
  }, 2000); // durasi
});

