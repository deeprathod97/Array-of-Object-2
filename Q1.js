let books = [
    { title: "Book One", author: "Author One", year: 1999 },
    { title: "Book Two", author: "Author Two", year: 2005 },
    { title: "Book Three", author: "Author Three", year: 2010 }
  ];
  
  books.forEach(book => {
    if (book.year > 2000) {
      console.log(book.title);
    }
  });
  