let courses = [
    { title: "Course One", instructor: "Instructor A", duration: 8 },
    { title: "Course Two", instructor: "Instructor B", duration: 12 },
    { title: "Course Three", instructor: "Instructor C", duration: 15 }
  ];
  
  courses.forEach(course => {
    if (course.duration > 10) {
      console.log(course.title);
    }
  });
  