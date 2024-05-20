import { useContext } from "react";
import { LoginContex } from "./logincontex";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { username } = useContext(LoginContex);

  return (
    <div>
        <div>
            <br></br><br></br>
            <img src={require("./images/user.png")} width={150}></img>
        </div>
      <h1>User: {username}</h1>
        <div className="addproduct">
            <button><Link to="/addProduct">Add Product</Link> </button><br></br><br></br><br></br>
            <button><Link to="/deleteProduct">Delete Product</Link> </button><br></br><br></br><br></br>
            <button>View Products</button><br></br><br></br>
            <div className="logout">
                <button>Log Out</button>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
