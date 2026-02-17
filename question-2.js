function findProductPrice(products, name) {
  // Your code here
  let price = 0;
  for (let i=0; i < products.length; i++){
    if(name === products[i].name){
      return  products[i].price
    }
  }
      return price = -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian"));
