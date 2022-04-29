import React from "react";
import { Container, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import {useState, useEffect} from 'react';

function Tabledevices() {

  
  const [gateways, setGateway] = useState([]);
  const [devices, setDevice] = useState('');
    const [deviceID, setDeviceID] = useState('');

    useEffect(() => {
      fetchData();
      // Anything in here is fired on component mount.
      }, []);

  const TableInfo = (data)=>{
    const device = data.device;
  const listItems = device.map((info, index) =>

    <>
      <tr key={index}>
      <td>{info.dateCreated}</td>
      <td>{info.uid}</td>
      <td>{info.vendor}</td>
      <td className={info.status}>{info.status}</td>
    </tr>
    </>
  );



    return (


      <>{listItems}</>
      
    )

  }

  const TableData = (id)=>{

      return (
<div className="tablet">
      <Table borderless hover className="tableh2">
        <thead className="headt">
          <tr>
            <th>Date added</th>
            <th>UID</th>
            <th> Vendor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="bobyt">
          <tr><td>{id.gatewayId}</td></tr>
         {/* <TableInfo  device={devices}/> */}
       
        </tbody>
      </Table>
    </div>

      )

  }



  const Displayname = (props)=>{


    const gateway = props.gateway;
  const listItems = gateway.map((info) =>

    <><h6 key={info._id}>Gateway name: {info.name} {info._id}</h6>

      
          <TableData gatewayId={info._id}/>
    </>
  );


  return (

    <div>{listItems}</div>
    
  );

  
     }


  const fetchData = async () =>{
   
    //  setSpinner(true)
      try{
        fetch('http://localhost:4000/musalasoft/gateways',
        {
          
        }
        ).then(response => response.json())
        .then(data => {
          //welcome
                         console.log(data)
            setGateway(data);
           
        });

      }catch(error) {
        console.log(error);

    }


  }


  


  return ( 


        <Container className="contt">
            <Row>
            <h2 >Gateways</h2>  
             <Displayname gateway={gateways} />
           
            </Row>
        </Container>
        
     

   );
}

export default Tabledevices;