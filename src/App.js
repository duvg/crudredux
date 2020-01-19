import React from 'react';
import store from './store';

import { Provider } from 'react-redux'; 

function App() {
  return (
    <Provider store={store}>
      <p>CRUD con Redux</p>
    </Provider>
  );
}

export default App;
