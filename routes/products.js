const express = require("express");
const { client } = require("../db");
const { Collection } = require("mongodb");
const productModel = require("../modules/product")
const router = express.Router();

router.get("/", async (req, res)=> {
    const products = await productModel.find();
    res.jason(products);
    });

router.get("/:id", async (req, res)=> {
const db = client.db("products-api");
const collection = db.collection("products");

const product = await collection.findOne({id: req.params.id})
if (product) {
    res.jason(product);
} else {
    res.send("no product found");
}
});

router.post("/", async (req, res) => {
    const db = client.db("products-api");
    const collection = db.collection("products"); 
    const product = req.body;
    const result = await collection.insertOne(product);

    res.jason({
        message:"product added successfully", 
    });
});

module.exports = router;