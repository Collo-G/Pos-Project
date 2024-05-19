import { LoginContex } from './components/logincontex';
import './App.css';
import Sidebar from './components/sidebar';
import { useContext } from 'react';
import Loginpage from './components/loginpage';
import { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {

  const [Username, setUsername] = useState("")
  return (
    <div className="App">


    <LoginContex.Provider value={{Username, setUsername}}>
    <Loginpage/>

 <Router/>
    <Routes>
      <Route path='/PosPage' element={<Sidebar/>}></Route>
    </Routes>
  <Router/>


    </LoginContex.Provider>


      
    </div>
  );
}

export default App;
