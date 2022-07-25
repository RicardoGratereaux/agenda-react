import React from 'react';
import Add from './components/Add'
import List from './components/List'
import './styles/app.css'

function App() {
    return (
      <div class="container-app">
        <header>
          <h1> Agenda creada en react </h1>
          <img src='https://cdn-icons-png.flaticon.com/512/410/410909.png' width="50px" height="50px"></img>
        </header>
        <div>
          <nav><Add/></nav>
          <nav><List/></nav>
        </div>
      </div>
    )
}

export default App