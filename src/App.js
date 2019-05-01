import React from 'react';
import Navbar from './components/Nav'
import CardRow from './components/CardRow'
import {SearchBar, SeachBtn, SearchCategory} from './components/Search'
import { Row } from './components/Grid';
import Postform from './components/Postform';
//=================AWS======================
import Amplify from '@aws-amplify/core';
import aws_exports from "./aws-exports";

//=======================================
function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Row>

      <SearchBar></SearchBar>
       </Row>
     
      <div className="container">
      
        <CardRow />

      <Postform></Postform> 
      </div>
    </div>);
}

export default App;
