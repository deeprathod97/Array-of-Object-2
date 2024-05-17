const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Alice", age: 22, grade: "B" },
    { name: "Bob", age: 21, grade: "A" }
  ];
  
  students.forEach(student => {
    if (student.grade === "A") {
      console.log(student.name);
    }
  });
  