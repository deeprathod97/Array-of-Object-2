let cities = [
    { name: "City One", country: "Country A", population: 500000 },
    { name: "City Two", country: "Country B", population: 2000000 },
    { name: "City Three", country: "Country C", population: 3000000 }
  ];
  cities.forEach(city => {
    if (city.population > 1000000) {
      console.log(city.name);
    }
  });
  
