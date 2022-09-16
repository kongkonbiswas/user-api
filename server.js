const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// initialize
require("./initDB")();

// routes
const ProductRoutes = require( './Routes/ProductRoutes.js');
app.use('/products', ProductRoutes);

// define port
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})
