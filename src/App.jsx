
import React from 'react';
import './App.css';
import eevee from './assets/eevee.png'; 
import flareon from './assets/flareon.png'; 
import vaporeon from './assets/vaporeon.png';
import jolteon from './assets/jolteon.png';
import umbreon from './assets/umbreon.png';
import espeon from './assets/espeon.png';

const pokemonImages = [
  { id: 1, src: eevee, name: 'Eevee' },
  { id: 2, src: flareon, name: 'Flareon' },
  { id: 3, src: vaporeon, name: 'Vaporeon' },
  { id: 4, src: jolteon, name: 'Jolteon' },
  { id: 5, src: umbreon, name: 'Umbreon' },
  { id: 6, src: espeon, name: 'Espeon' },
];

const App = () => {
  return (
    <div className="gallery">
      {pokemonImages.map(pokemon => (
        <div key={pokemon.id} className="gallery-item">
          <img src={pokemon.src} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
