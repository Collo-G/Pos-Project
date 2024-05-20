import { useState } from 'react';
import axios from 'axios';


const AddProduct = () => {


    const [formData, setFormData] = useState({
        Product_Name: '',
        Product_Price: '',
        Product_Description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/api/products/addProduct', formData);
          alert('Product posted successfully:');
        } catch (error) {
          console.error('Error posting product:', error);
        }
        
      };

    return(
        <div>
           
           

            <form onSubmit={handleSubmit}  style={{paddingTop: "50px"}}>
                
            <h1>Add Product Section</h1>
                <label>Product Name</label><br></br>
                <input name='Product_Name' value={formData.Product_Name} onChange={handleChange} required type="text"></input>
                <br></br><br></br><br></br>
                <label>Product Price</label><br></br>
                <input name='Product_Price' value={formData.Product_Price} onChange={handleChange} required type="number"></input>
                <br></br><br></br><br></br>
                <label>Product Description</label><br></br>
                <input name='Product_Description' value={formData.Product_Description} onChange={handleChange} required type="text"></input>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddProduct;