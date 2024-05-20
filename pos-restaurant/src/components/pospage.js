import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/pos.css'

const PosPage = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/product/getProduct"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const addToCart = (product) => {
        const newCartItems = [...cartItems, product];
        const newTotalPrice = totalPrice + product.Product_Price;
        setCartItems(newCartItems);
        setTotalPrice(newTotalPrice); 
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>Products Available</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <div
                        onClick={() => addToCart(product)}
                        className="btn"
                        key={product.Product_ID}
                        style={{
                            flexBasis: "25%",
                            padding: "10px",
                            border: "1px solid black",
                            justifyContent: "space-evently",
                            margin: "5px",
                            textAlign: "center",
                        }}
                    >
                        <h6 style={{ color: "black", fontSize: "20px" }}>
                            {product.Product_Name}
                        </h6>
                        <p style={{ color: "black" }}>
                            KSH {product.Product_Price}
                        </p>
                    </div>
                ))}
            </div>

              {/*  SECTION 2  */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1>Cart</h1>
                {cartItems.map((item, index) => (
                    <div style={{display: "flex", gap:"50px", fontSize: "15PX"}} key={index}>
                        <p>{item.Product_Name}</p>
                        <p>KSH {item.Product_Price}</p>
                    </div>
                ))}
                <p>Total Price: KSH {totalPrice}</p>
            </div>
        </div>
    );
};

export default PosPage;
