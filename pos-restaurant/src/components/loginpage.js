import './css/login.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContex } from './logincontex';

const Loginpage = () => {
  const { setUsername, setPosPage } = useContext(LoginContex);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  

  return (
    <div className="body">
      <div className="login">
        <form>
          <div className="img">
            <img src={require("./images/cashier.png")} alt="Cashier" />
            <h2>POS SYSTEM LOGIN</h2>
          </div>
          <label>Username</label><br />
          <input onChange={handleInputChange} type="text" /><br /><br />
          <label>Password</label><br />
          <input type="password" /><br /><br />
          <button type="submit">
            <Link to='/PosPage'>Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
