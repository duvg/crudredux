import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

// Redux
import store from './store';
import { Provider } from 'react-redux'; 

// Componentes
import Header from './components/partials/Header';
import Productos from './components/producto/Productos';
import NuevoProducto from './components/producto/NuevoProducto';
import EditarProducto from './components/producto/EditarProducto';



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
