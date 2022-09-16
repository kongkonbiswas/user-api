const mongoose = require('mongoose');

// import model
const Product = require( '../models/Product_Model');

module.exports = {
    // insert new data
    createNewProduct: async(req, res) => {
        try{
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);
        }
        catch(error){
            console.log(error.message);
        }
    }
}