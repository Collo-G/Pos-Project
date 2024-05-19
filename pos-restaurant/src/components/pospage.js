import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
const PosPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:4000/api/product/getProduct"
            );
            

            setProducts(response.data)
            console.log(products)
    
            
          } catch (error) {
            console.error("Error fetching data:", error);
            
          }
        };
    
        fetchData();
      }, []);
    

    return(

        <div>
        <h2>Products Available</h2>
        <div style={{ display: "flex", color: "black",   flexWrap: "wrap" }}>
          {products.map((product) => (
            <div key={product.Product_ID} style={{ flexBasis: "25%", padding: "10px", border: "1px solid black", justifyContent: "space-evently" }}>
                <h6 style={{ color: "black", fontSize: "20px" }}>{product.Product_Name}</h6>
                <p style={{ color: "black" }}>KSH {product.Product_Price}</p>
            </div>
          ))}
        </div>
      </div>
    
    )
}
export default PosPage;