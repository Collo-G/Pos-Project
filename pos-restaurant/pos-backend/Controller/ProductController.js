const db = require("../Model/DbConnect")
const product = db.product;



const addProduct = async (req, res, next) => {

    try {
        // Extract other form fields
        const { Product_Name, Product_Price, Product_Description } = req.body;

       
        const newProduct = await product.create({
            Product_Name,
            Product_Price,
            Product_Description,
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};
const getAllProduct =  async (req, res, next) => {
    try {
        const products = await product.findAll({});
        res.status(200).send(products);
    } catch (error) {
        next(error);
    }
};
const deleteProduct = async (req, res, next) => {
    try {
      const { id } = req.params; // Assuming the ID is sent in the request parameters
  
      const result = await product.destroy({
        where: { id }, // Adjust the field name according to your primary key
      });
  
      if (result) {
        res.status(200).json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error.");
    }
  };
  module.exports = { addProduct, getAllProduct, deleteProduct };
