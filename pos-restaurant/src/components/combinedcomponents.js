import Sidebar from "./sidebar"
import PosPage from "./pospage"
import './css/combined.css';
import Cart from "./cart";

const Combined = () => {
    return(
        
        <div>
            <div>
                <img width={100} src={require("./images/cashier.png")}></img>
                <h1>POS SYSTEM</h1>
            </div>
            <div  className="main">
            
            
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="cart">
                    <Cart/>
                
                </div>
                <div className="landing">
                    <PosPage/>
                </div>
            </div>
        </div>

    )
}
export default Combined;