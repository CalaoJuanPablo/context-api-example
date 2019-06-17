import React from 'react';
import PersonProvider from './provider/Person'
import Root from './components/Root'
import './App.css';

function App() {
  return (
    <PersonProvider>
      <Root />
    </PersonProvider>
  );
}

export default App;
