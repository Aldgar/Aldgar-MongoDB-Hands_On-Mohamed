function getOrderController (req, res) {
    res.send("Get a specific order by ID (with product details populated)")
}

function createOrderController (req, res){
    res.send("Create a new order (should reference product IDs)")
}

function updateOrdertController (req, res){
    res.send("Update an order by ID")
}

function deleteOrderController (req, res){
    res.send("Delete a order by ID")
}

module.exports = {getOrderController,createOrderController, updateOrdertController,deleteOrderController };