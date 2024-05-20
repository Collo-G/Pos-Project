import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


const DeleteProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:4000/api/product/getProduct"
            );
            

            setProducts(response.data)
    
            
          } catch (error) {
            console.error("Error fetching data:", error);
            
          }
        };
    
        fetchData();
      }, []);


      const deleteItem = (productId) => {

        axios.delete(`http://localhost:4000/api/product/deleteProduct/${productId}`)
        .then(res => console.log(res))
        alert("product Deleted")

      }



    return(
        <div>
            <h1>DeleteProduct</h1>
            <div>
            {products.map((product) => (
                <div key={product.Product_ID} style={{ flexBasis: "25%", padding: "10px", border: "1px solid black  ", backgroundColor: "white", justifyContent: "space-evently" }}>
                    <h6 style={{ color: "black", fontSize: "20px" }}>{product.Product_Name}</h6>
                    <p style={{ color: "black" }}>KSH {product.Product_Price}</p>
                    <button onClick={() => deleteItem(product.Product_ID)}  style={{padding: "10px 40px"}}>Delete</button>
                </div>
            ))}
            </div>
        </div>
    )


}
export default DeleteProduct;