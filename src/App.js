import React from 'react';
//import Navbar from './components/Nav'
//import CardRow from './components/CardRow'
//import {SearchBar, SeachBtn, SearchCategory} from './components/Search'
//import { Row } from './components/Grid';
//import Postform from './components/Postform';
//=================AWS======================
import Amplify from '@aws-amplify/core';
import aws_exports from "./aws-exports";
import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';

Amplify.configure(aws_exports);
//=======================================


function App() {
 //======== Grabing User Information from AWS ===========
 
  Auth.currentAuthenticatedUser({
    bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user =>console.log(user)
   

)
.catch(err => console.log(err));
//============AWS END =======================  
return (
    
    <h1> Welcome to Trading Dashboard</h1>
        
    /*
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
    */
  )}

export default withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: true, 
  // Show only certain components
  });