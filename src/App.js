import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.scss';

import Header from './components/Header';

import Todo from './components/Todo';

function App() {

  
  return (
    <div className="App">
      <Header/>
      
      <Todo />
      
      
    </div>
  );
}

export default App;
