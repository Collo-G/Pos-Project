import { useContext } from "react";

import { LoginContex } from "./logincontex";

const Sidebar = () => {
    const { Username } = useContext(LoginContex);
    return(
        <div>
            <h1>Welcome: {Username} </h1>
        </div>
    )
}
export default Sidebar;