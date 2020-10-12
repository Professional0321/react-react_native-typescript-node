import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './img/logo.svg';
import marker from './img/marker.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div>
         <img src={marker} alt="Happy Logo" />
         <img src={logoImg} alt="Happy Logo" />
        </div>

       <main>
         <h1>Leve felicidade para o mundo</h1>
         <p>Visite orfanatos e mude o dia de muitas crianças.</p>
       </main>

       <div className="location">
         <strong>Brasília</strong>
         <span>Distrito Federal</span>
       </div>

       <a href="" className="enter-app">
        <FiArrowRight
          size={26}
          color="rgba(0, 0, 0, 0.6)"
        />
       </a>
      </div>
    </div>
  );
}

export default App;
