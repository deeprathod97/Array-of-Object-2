let employees = [
    { name: "Deep", position: "Manager", salary: 65000 },
    { name: "Kunal", position: "Developer", salary: 55000 },
    { name: "mihir", position: "Designer", salary: 70000 }
  ];
  
  employees.forEach(employee => {
    if (employee.salary > 60000) {
      console.log(employee.name);
    }
  });
  