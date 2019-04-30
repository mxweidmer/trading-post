import React from 'react';
import Navbar from './components/Nav'
import CardRow from './components/CardRow'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1>Oh hello</h1>
        <CardRow />
      </div>
    </div>);
}

export default App;
