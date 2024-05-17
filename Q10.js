let restaurants = [
    { name: "Restaurant One", cuisine: "Italian", rating: 3.5 },
    { name: "Restaurant Two", cuisine: "Chinese", rating: 4.2 },
    { name: "Restaurant Three", cuisine: "Mexican", rating: 4.8 }
  ];
  
 restaurants.forEach(restaurant => {
    if (restaurant.rating >= 4) {
      console.log(restaurant.name);
    }
  });
  