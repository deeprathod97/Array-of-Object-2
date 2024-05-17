let libraries = [
    { name: "Library One", location: "Location A", books: 3000 },
    { name: "Library Two", location: "Location B", books: 7000 },
    { name: "Library Three", location: "Location C", books: 9000 }
  ];
  libraries.forEach(library => {
    if (library.books > 5000) {
      console.log(library.name);
    }
  });