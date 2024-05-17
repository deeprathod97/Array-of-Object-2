let cars = [
    { brand: "Toyota", model: "Corolla", year: 2014 },
    { brand: "Honda", model: "Civic", year: 2016 },
    { brand: "Ford", model: "Fusion", year: 2018 }
  ];
  cars.forEach(car => {
    if (car.year > 2015) {
      console.log(car.brand);
    }
  });
