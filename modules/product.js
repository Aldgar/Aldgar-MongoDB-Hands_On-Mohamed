const DOCUMENT_NAME = "product";
const COLLECTION_NAME = "products";

const productSchema = new Schema(
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

const productModel = model(DOCUMENT_NAME, productSchema, COLLECTION_NAME);
module.exports = productModel;