const DOCUMENT_NAME = "order";
const COLLECTION_NAME = "orders";

const orderSchema = new Schema(
    {
        book: {
            type: String, 
            required: true,
        }, 
        author: {
            type: String, 
            required: true,
        },
});

const orderModel = model(DOCUMENT_NAME, orderSchemaSchema, COLLECTION_NAME);
module.exports = orderModel;