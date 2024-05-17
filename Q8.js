let movies = [
    { title: "Movie One", director: "Director A", rating: 6.5 },
    { title: "Movie Two", director: "Director B", rating: 7.8 },
    { title: "Movie Three", director: "Director C", rating: 8.2 }
  ];
  
  movies.forEach(movie => {
    if (movie.rating > 7) {
      console.log(movie.title);
    }
  });