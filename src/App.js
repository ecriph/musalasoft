import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Createg from './Components/Createg';
import Addd from './Components/Addd';
import Tabledevices from './Components/Tabledevices';
import Thankspage from './Components/Thankspage';


function App() {
  return (
    <Router>
  <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='addd/:id/:name' element={<Addd/>}/>
        <Route path='createg' element={<Createg/>}/>
        <Route path='tabledevices' element={<Tabledevices/>}/>
        <Route path='thankspage' element={<Thankspage/>}/>
      </Routes>
    
  </div>
  </Router>
  );
}

export default App;
