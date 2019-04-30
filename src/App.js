import React from 'react';
import Navbar from './components/Nav'
import CardRow from './components/CardRow'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <CardRow />
      </div>
    </div>);
}

export default App;
