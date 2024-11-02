function getProductController (req, res) {
    res.send("Get a specific product by ID")
}

function createProductController (req, res){
    res.send("Create a new product")
}

function updateProductController (req, res){
    res.send("Update a product by ID")
}

function deleteProductController (req, res){
    res.send("Delete a product by ID")
}

module.exports = {createProductController,getProductController, updateProductController,deleteProductController };