import React from 'react';
import Navbar from './components/Nav'
import CardRow from './components/CardRow'
import {SearchBar, SeachBtn, SearchCategory} from './components/Search'
import { Row } from './components/Grid';
import Postform from './components/Postform';
//=================AWS======================
import Amplify from '@aws-amplify/core';
import aws_exports from "./aws-exports";
import { withAuthenticator } from 'aws-amplify-react';
//=======================================
Amplify.configure(aws_exports);

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

export default withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: false, 
  // Show only certain components
  });