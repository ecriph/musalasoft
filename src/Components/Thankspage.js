import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Thankspage() {
    return (
        <div  style={{ margin:'20vw', }}> 
            <Container  >
        <h1 style={{display:'flex', 
        justifyContent:'center', alignItems:'center',
          textAlign:'center'}} >
            Thanks! <br/>Registered
            
        </h1>
        <div style={{display:'flex',
           justifyContent:'center', }}>
        <Link to='/'>       
        <Button variant="danger" size="lg"  >
            Go Back
        </Button>
        </Link>
        </div>
        
        </Container>
        </div>
     );
}

export default Thankspage;