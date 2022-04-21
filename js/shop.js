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
  for (i = 0; i < products.length; i++) {
    // 2. Add found product to the cartList array
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
  // for loop to add all the products picked
  for (let i = 0; i < cartList.length; i++) {
    // sum of prices
    total += cartList[i].price;
  }
  return `The total price is $${total}`;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  //Initial state of the cart => empty
  cart = [];
  //for loop to iterate through the cartList array
  for (let i = 0; i < cartList.length; i++) {
    //if cart is empty, push item into new array & add new key-value pair to object
    if (cart.length === 0) {
      cart.push(cartList[i]);
      cart[i]["quantity"] = 1;
    } else {
      let j = 0;
      let idExists = false;
      //while loop to add quantities
      while (j < cart.length && idExists === false) {
        //if the product is already in cart, add 1 to quantity of that product
        if (cart[j].id === cartList[i].id) {
          cart[j].quantity++;
          idExists = true;
        }
        j++;
      }
      //if cart is not empty but the product is not in cart, add product and its quantity
      if (!idExists) {
        cart.push(cartList[i]);
        cart[cart.length - 1]["quantity"] = 1; // cart.lenght - 1 to avoid off-by-one error
      }
    }
  }
  return cart;
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
