const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const productsRouter = require("./routes/products")
const { run } = require("./db");
const { getProductController, createProductController, updateProductController, deleteProductController } = require("./controllers/products");
const router = require("./routes/products");

app.use(cors());
app.use("/products", productsRouter);

run();

app.get("/", getProductController)

app.post("/",createProductController)

app.put("/:id", updateProductController)

app.delete("/", deleteProductController)

app.listen(3000, ()=> {
    console.log("server is running...")
});

