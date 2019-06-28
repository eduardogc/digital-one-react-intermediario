import React, { Component } from 'react';

class TodoListStatefull extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Tomate',
        'Alface',
        'Melancia'
      ]
    }
  }

  addItem = (item) => {
    /*
    [...this.state.items, item] é o mesmo que:
    let itemsUpdated = this.state.items;
    itemsUpdated.push(item);
    this.setState({ items: itemsUpdated }); 
    */
    this.setState({items: [...this.state.items, item]});
  }

  removeItem = () => {
    /*
    [...this.state.items.slice(1)] é o mesmo que:
    let itemsUpdated = this.state.items;
    itemsUpdated.pop();
    this.setState({ items: itemsUpdated }); 
    */
    this.setState({ items: [...this.state.items.slice(1)] })
  }

  render() {
    const { items } = this.state;
    return (
      <div className="bloco-lista">
        <p>Minha lista ClassName</p>
        <ul className="lista-estilizada">
          {items.map(item => <li>{item}</li>)}
        </ul>
        <button onClick={() => this.addItem('Abóbora')}>Adicionar item</button>
        <button onClick={() => this.removeItem()}>Remover item</button>
      </div>
    )
  }
}


export default TodoListStatefull;
