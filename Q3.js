let products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 700 }
  ];
  
  products.forEach(product => {
    if (product.category === "Electronics") {
      console.log(product.name);
    }
  });
  