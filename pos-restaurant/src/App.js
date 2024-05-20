import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginContex } from './components/logincontex';
import './App.css';
import Sidebar from './components/sidebar';
import Combined from './components/combinedcomponents';
import Loginpage from './components/loginpage';
import AddProduct from './components/addProduct';
function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContex.Provider value={{ username, setUsername}}>
        <Router>
          <Routes>
      
              <Route path='/PosPage' element={<Combined/>} />

              <Route path='/addProduct' element={<AddProduct/>}></Route>
            
              <Route path='/' element={<Loginpage />} />
            
          </Routes>
        </Router>
      </LoginContex.Provider>
    </div>
  );
}

export default App;
