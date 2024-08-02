// import logo from './logo.svg';
import './App.css';
import React from 'react';

import About from './container/about';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Hi, I'm Thisara Nilupul</h1>
        <h3>Wellcom to my Profile</h3> 
      </header>
      <body>
        <About/>
      </body>
     
    </div>
  );
}

export default App;
