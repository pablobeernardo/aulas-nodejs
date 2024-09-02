const {getFullName, productType } = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("Carrinho compras")
    getFullName("1" , "teclado")

    // product.getFullName("408", "mousepad")
    // product.getFullName("508", "mouse")
    // product.getProductLabel("Teclado")
    
    // console.log(config.client);

    database.connectToDatabase();
    // database.disconnectDatabase();
}

main();