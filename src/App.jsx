
import React from 'react';
import './App.css';
import Warturtle from './assets/Warturtle.jpg'; 
import Corsola from './assets/Corsola.jpg'; 
import Gimmighoul from './assets/Gimmighoul.jpg';
import Skelerdirge from './assets/Skelerdirge.jpg';
import Terapagos from './assets/Terapagos.jpg';
import Venusaur from './assets/Venusaur.jpg';

const pokemonImages = [
  { id: 1, src: Warturtle, name: 'Warturtle' },
  { id: 2, src: Corsola, name: 'Corsola' },
  { id: 3, src: Gimmighoul, name: 'Gimmighoul' },
  { id: 4, src: Skelerdirge, name: 'Skelerdirge' },
  { id: 5, src: Terapagos, name: 'Terapagos' },
  { id: 6, src: Venusaur, name: 'Venusaur' },
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
