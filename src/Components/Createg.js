import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../index.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Gateway from './Gateways';
// import Addd from './Addd';
import toast, { Toaster } from 'react-hot-toast';

// import { Link } from 'react-router-dom';



function Createg() {

  const [fname, setName] = useState("");
  // const [vserial, setSerial] = useState("");
    const [vipaddress, setIp] = useState("");
    
    let date = new Date();

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        let ipv4_regex = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm;   
      
       if(ipv4_regex.test(vipaddress)){

        let vserial = 'Musalasoft-' +
    Math.floor(date.getTime() +
    date.getSeconds() / 2);

        let result = await fetch(
        'http://localhost:4000/musalasoft/gateways', {
            method: "Post",
            body: JSON.stringify({
              serialNumber:vserial, 
              name:fname, 
              ipAdress:vipaddress
             }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.warn(result);
        console.log(result);
        if (result) {
            toast.success("Data saved successfully");
            setIp("");
            setName("");
        }
    }

    else{  toast.error("invalid IPv4 address");}

  }

    return ( 

        <div>
          
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <Container className='cont'>
                <Row>
                <Col sm={3}></Col>
                   <Col sm={6}>
                    <Form onSubmit={handleSubmit}>
                      <h3>Create new Gateway</h3>
                      {/* <Form.Group  controlId="validationCustomGateway" >
                          <Form.Label>Serial</Form.Label>
                          <Form.Control type="text" className="mb-3" required value={vserial} onChange={(e) => setSerial(e.target.value)}/>
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid Gateway Serial</Form.Control.Feedback>
                       </Form.Group> */}

                       <Form.Group  controlId="validationCustomGateway" >
                          <Form.Label>Gateway name</Form.Label>
                          <Form.Control type="text" className="mb-3" required value={fname} onChange={(e) => setName(e.target.value)}/>
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid Gateway name</Form.Control.Feedback>
                       </Form.Group>
                       <Form.Group controlId="validationCustomAddress">
                          <Form.Label>ipv4 Address</Form.Label>
                          <Form.Control type="text" className="mb-3" required  value={vipaddress} onChange={(e) => setIp(e.target.value)}/>
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid ipv4 Address</Form.Control.Feedback>
                       </Form.Group>
                       {/* <Link to="/thankspage"> */}
                       <Button className='btn-c' variant="danger"
                        
                       size='lg' type="submit"> Register
                       </Button>
                       {/* </Link>   */}
                    </Form>                   
                    </Col>
                    <Col sm={3}></Col>

                <Col sm={12}>

                <Gateway></Gateway>
                </Col>


                </Row>
            </Container> 
        </div>
     );
}

export default Createg;