// todas as funcoes que lidam com produto
const productType ={
    version: "digital",
    tax: "x1",
}

async function getFullName(codeId, productName) {
    doBreakLine();
    console.log("product: " + codeId + "--" + productName)
}

async function doBreakLine(){
    console.log("\n")
    console.log("-------------------------------------------------------")
}
//hidden function
async function getProductLabel(productName) {
    doBreakLine()
    console.log("Product: " + productName);
    
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
}