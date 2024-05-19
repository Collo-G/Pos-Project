import Sidebar from "./sidebar"
import PosPage from "./pospage"
import './css/combined.css'

const Combined = () => {
    return(
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="cart">
            <h1>CART</h1>
            <p>No items Yet!</p>
            </div>
            <div className="landing">
                <PosPage/>
            </div>
        </div>

    )
}
export default Combined;