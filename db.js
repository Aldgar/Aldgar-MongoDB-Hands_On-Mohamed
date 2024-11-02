const mongosse = require ("mongoose");

const uri = process.env.MONGO_URI;

function run() {
   mongosse
    .connect()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err)=> {
        console.log(err)
    })
}

module.exports = { run };
