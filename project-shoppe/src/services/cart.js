//quais ações meu carrinho pode fazer ?
//CASOS DE USO:
// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}
// deletetar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index > -1) {
        userCart.splice(index, 1);
    } else {
        console.log('Item não encontrado');
    }
}

// remover um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    if (indexFound == -1) {
        console.log('Item não encontrado');
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }

}

// calcular o total
async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total is: ")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`Total: ${result}`);

}

//ver o que tem no carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
    }
    );

}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,

}



