const express = require("express");
const { client } = require("../db");
const { Collection } = require("mongodb");

const router = express.Router();

router.get("/", async (req, res)=> {
const db = client.db("products-api");
const collection = db.collection("products");

if (collection.countDocuments() === 0) {
    res.send("no order found");
} else {
    const all_products = await collection.find().toArray();

    res.json(all_products);
}
});


module.exports = router;