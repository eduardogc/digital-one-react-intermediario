import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Aula1 from './aula-1/Aula1';
import Aula2 from './aula-2/Aula2';
import Aula3 from './aula-3/Aula3';
import Aula4 from './aula-4/Aula4';
import Pagina404 from './NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aula-1" component={Aula1} />
          <Route path="/aula-2" component={Aula2} />
          <Route path="/aula-3" component={Aula3} />
          <Route path="/aula-4" component={Aula4} />
          <Route path="*" component={Pagina404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
