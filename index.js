const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const productsRouter = require("./routes/products")
const { run } = require("./db")

app.use(cors());
app.use("/products", productsRouter);

app.get("/", (req, res)=>{
    res.send("Get a specific product by ID")
})

run();
/*
app.post("/product", (req, res)=>{
    res.send("Create a new product")
})

app.put("/product", (req, res)=>{
    res.send("Update a product by ID")
})

app.delete("/product", (req, res)=>{
    res.send("Delete a product by ID")
})
*/
app.listen(3000, ()=> {
    console.log("server is running...")
});

