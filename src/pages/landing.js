import React from 'react';

import CardRow from '../components/CardRow'
import {SearchBar} from '../components/Search'
import { Row } from '../components/Grid';

function App() {
  return (
    <div>
    
     <Row>

      <SearchBar></SearchBar>
       </Row>
     
      <div className="container">
      
        <CardRow />

     {/*  <Postform></Postform>  */}
      </div>
    </div>);
}

export default App;
