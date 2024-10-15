import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
      <Home/>
      <About/>
  </StrictMode>
)
