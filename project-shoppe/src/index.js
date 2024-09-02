import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart= [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99 ,1);
const item2 = await createItem("hotwheels lamborghini" , 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);


await cartService.calculateTotal(myCart);
