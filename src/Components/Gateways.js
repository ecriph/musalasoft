import React from "react";
// import { Button} from "react-bootstrap";
import { Table, Button} from "react-bootstrap";
import {useState, useEffect} from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Gateways() {

  
  const [gateways, setGateway] = useState([]);
  // const [devices, setDevice] = useState(null);
  // const [deviceID, setDeviceID] = useState('');

    useEffect(() => {
      setTimeout(() => {

      fetchData();
      
    }, 1000);
      // Anything in here is fired on component mount.
      }, [gateways]);


  const Displayname = (props)=>{


    const gateway = props.gateway;
  const listItems = gateway.map((info) =>

    <> <tr><td>{info.serialNumber}</td><td>{info.name}</td><td>{info.ipAdress}</td><td><Link to={`/Addd/${info._id}/${info.name}`}><Button className="btn-z" size="sm" variant="danger"> View </Button>
    </Link></td></tr>     
    </>
  );


  return (

    <div className="tablet">
      <Table borderless hover className="tableh2">
        <thead className="headt">
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Ip Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bobyt">
        {listItems}
          
        </tbody>

        </Table>
    </div>
  );

  
     }


  const fetchData = async () =>{
   
    //  setSpinner(true)
      try{
        fetch('https://musalasoft.herokuapp.com/musalasoft/gateways',
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


     
         <div className="contt"> <h2 >Gateways</h2>  
             <Displayname gateway={gateways}   />
         </div>
       
     

   );
}

export default Gateways;