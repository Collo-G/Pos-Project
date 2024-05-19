import './css/login.css'
import { Link } from 'react-router-dom'
import { LoginContex } from './logincontex';
import { useContext } from 'react';

const Loginpage = () =>{

    const { setUsername } = useContext(LoginContex);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };


    return(
        <div className="body">
            <div className="login">
                <form>
                <div className="img">
                    <img src={require("./images/cashier.png")}></img>
                    <h2>POS SYSTEM LOGIN</h2>
                </div>

                    <label>Username</label><br></br>
                    <input  onChange={handleInputChange} type="text"></input>
                        <br></br><br></br>
                    <label>Password</label><br></br>
                    <input type="text"></input>
                        <br></br><br></br>
                    <button type="submit"> <Link to='/PosPage'>Submit</Link></button>
                </form>
            </div>
        </div>

    )
}
export default Loginpage;