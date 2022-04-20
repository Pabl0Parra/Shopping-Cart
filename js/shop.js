// If you have time, you can move this letiable "products" to a json file and load the data in this js. It will look more professional
let products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (i = 0; i < products.length; i++) {
    if (id == products[i].id) {
      cartList.push(products[i]);
      console.log(cartList);
    }
  }
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  return `The total price is $${total}`;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  cart = []; //so that every time the function is run, the cart is empty
  console.log(`Cart beginning state: ${cart}`);

  for (let i = 0; i < cartList.length; i++) {
    let chosenProduct = cartList[i]; // declare a variable with the item that has been selected

    if (cart.includes(chosenProduct)) {
      //if the selected item is already in cart...
      let itemAlreadyInCart = cart.find((x) => x.id == chosenProduct.id); //find the item in cart and save it in a variable
      itemAlreadyInCart.quantity++; //since it´s already in cart, we have to increase its quantity by one
    } else {
      chosenProduct.quantity = 1;
      cart.push(chosenProduct);
    }
  }
  console.log(`Cart after shopping: ${cart}`);
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
