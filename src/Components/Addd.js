import React, { useEffect } from 'react';
import { Container, Form, Row, Col, Table} from 'react-bootstrap';
import '../index.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

function Addd() {
  const [devices, setDevices] = useState();
  const [dvendor, setVendor] = useState();

  useEffect(() => {
   
    fetchInfo();
    // Anything in here is fired on component mount.
    }, [devices]);

 
  const [status, setStatus] = useState('Select');
  const [count, setCount] = useState('');
  const {id}= useParams();
  const {name}= useParams();

  
  


 const fetchInfo = async () =>{
   
  //  setSpinner(true)
    try{
      fetch('https://musalasoft.herokuapp.com/musalasoft/devices?id='+id,
      {
        
      }
      ).then(response => response.json())
      .then(data => {
        const tcount = data.count;
        const listItems = data.info.map((info, key) =>
          <>
            <tr>
            <td>{key+1}</td>
            <td>{info.dateCreated}</td>
            <td>{info.uid}</td>
            <td>{info.vendor}</td>
            <td className={info.status}>{info.status}</td>
            <td className={info.status}><Button className="btn-z" size="sm" variant="danger" onClick={()=>handleDelete(info._id)}> Delete </Button></td>

          </tr>

                     </>
        );
                  
        setDevices(listItems);
        setCount(tcount);

      });

    }catch(error) {
      console.log(error);

  }

}
 

const handleDelete = (id)=>{

  let result = fetch('https://musalasoft.herokuapp.com/musalasoft/devices?id=' + id, {
        method: "delete"
    });


    if(result){
      swal('Good', 'Device deleted', 'success');
    }
  }

  
  const handleSubmit = async(e) => {

    e.preventDefault();

    if(count >= 10)
    {      swal("Oops!", "Gateway has reached its limit!", "error");
  }
    else{
let date = new Date();

let created = date.getDay()+'/'+ date.getMonth() + '/'+ date.getFullYear();


    let uuid = Math.floor(date.getTime() +  date.getSeconds() / 2);

    let result = await fetch(
    'https://musalasoft.herokuapp.com/musalasoft/devices', {
        method: "Post",
        body: JSON.stringify({
          uid:uuid, 
          vendor:dvendor, 
          gatewayID:id,
          dateCreated:created,
          status:status

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
        setVendor("");
        setStatus('Select');
        
    }
  }
  

  

  };
  







    return ( 

        <div>

<Toaster
  position="top-right"
  reverseOrder={false}
/>
            <Container className='cont1'>
                <Row>
                
                  <Col sm={3}><Link to={'/createg'}> <Button>Go Back</Button></Link></Col>
                  <Col sm={6}>

                  <h2 >Adding Devices to : {name}</h2>  

                  
                    <Form  onSubmit={handleSubmit}>
                      <h6>Add Device</h6>
                      
                       <Form.Group controlId="validationCustomVendor" >
                          <Form.Label>Vendor</Form.Label>
                          <Form.Control type="text" className="mb-3" value={dvendor} onChange={(e)=>setVendor(e.target.value)} required/>
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid Vendor</Form.Control.Feedback>
                       </Form.Group>
                       
                       <Form.Group controlId="validationCustomStatus" >
                          <Form.Label>Status</Form.Label>
                          <Form.Select className='select' required 
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          >
                          <option value="Select">select</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                          </Form.Select>
                          <Form.Control.Feedback type='invalid'>
                            Please select Status</Form.Control.Feedback>
                       </Form.Group>
                       {/* <Link to="/thankspage"> */}
                       <Button className='btn-a' variant="danger" type="submit"> Register
                       </Button>
                       {/* </Link>   */}
                    </Form>
                    </Col>
                    <Col sm={3}></Col>

                  <Col sm={12} className="padup">
                    <h3>Peripheral Devices for : {name}</h3>
                  <Table borderless hover className="tableh2">
        <thead className="headt">
          <tr>
          <th>SN</th>
          <th>Date added</th>
            <th>UID</th>
            <th> Vendor</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bobyt">
         
         {devices}
       
        </tbody>
      </Table>                  </Col>

                </Row>
            </Container> 
        </div>
       
     );


     

     
}

export default Addd; 