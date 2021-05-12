import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import DosCounter from './components/DosCounter';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <DosCounter />
    </Provider>
  );
}

export default App;