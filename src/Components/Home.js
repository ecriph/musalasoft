import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col } from 'react-bootstrap';
import '../index.css';
import {Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {
    return ( 
        <div>
 <Container  className="btn-home"  >
  <Row >
    <Col sm={6}>
      <div style={{display:'flex', 
      justifyContent:'center', alignItems:'center'}}>
    <Link to="/createg">    
    <Button  className='btn-create' >
      Create a Gateway
    </Button>
    </Link>
    </div>
    </Col>
    <Col sm={6}>
      <div style={{display:'flex', 
      justifyContent:'center', alignItems:'center'}}>
    <Link to="/addd">    
    <Button className='btn-add'>
      Add a Device
    </Button>
    </Link>
    </div>
    </Col>

  </Row>
</Container>
</div>
     );
}

export default Home;