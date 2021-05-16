import React, { useState } from 'react';
import './App.css';
import useContar from './hooks/useContar.js'
const App = () => {

  const [contar, setContar] = useContar()

  const handleClick = () => {
    setContar(contar+1)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Contar</button>
      <p>{contar}</p>
    </div>
  );
};

export default App;
