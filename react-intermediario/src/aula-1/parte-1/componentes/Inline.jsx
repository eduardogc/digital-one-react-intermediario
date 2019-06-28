import React from 'react';

// 1. Como estilizar uma lista usando estilos inline.

const listaEstilizada = {
  marginTop: '10px',
  border: '1px solid blue',
  padding: '25px'
};

const itemCor = {
  color: '#67000F'
};

const Inline = () => (
  <div style={{display: 'flex', flexDirection: 'column', 
  justifyContent: 'space-around', marginRight: '20px'}}>
    <p>Minha lista Style</p>
    <ul style={listaEstilizada}>
      <li style={itemCor}>Tomate</li>
      <li style={itemCor}>Alface</li>
      <li style={itemCor}>Melancia</li>
    </ul>
  </div >
);

export default Inline;