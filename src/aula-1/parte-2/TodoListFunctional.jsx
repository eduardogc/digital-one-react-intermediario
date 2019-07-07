import React, { useState } from 'react';

const TodoListFunctional = () => {

  const [items, setItems] = useState(['Tomate','Alface','Melancia']);
  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = () => {
    setItems([...items.slice(1)])
  }

  return (
    <div className="bloco-lista">
      <p>Minha lista</p>
      <ul className="lista-estilizada">
        {items.map(item => <li>{item}</li>)}
      </ul>
      <button onClick={() => addItem('Abóbora')}>Add Item</button>
      <button onClick={() => removeItem()}>Remove Item</button>
    </div>
  );
}

export default TodoListFunctional;
