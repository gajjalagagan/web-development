// Creating an object (book)
let book = {
    title: "JavaScript for Beginners",
    author: "John Smith",
    price: 29.99
  };

  // Accessing object properties
  console.log("Book Title: " + book.title);  // Output: JavaScript for Beginners
  console.log("Book Author: " + book.author);  // Output: John Smith
  console.log("Book Price: " + book.price);  // Output: 29.99

  // Modifying an object property
  book.price = 24.99;  // Changing the price
  console.log("Updated Book Price: " + book.price);  // Output: 24.99

  // Adding a new property to the object
  book.publisher = "TechBooks Publishing";
  console.log("Publisher: " + book.publisher);  // Output: TechBooks Publishing

  // Using the object in a function
  function printBookDetails(bookObj) {
    console.log("\nBook Details:");
    console.log("Title: " + bookObj.title);
    console.log("Author: " + bookObj.author);
    console.log("Price: " + bookObj.price);
    console.log("Publisher: " + bookObj.publisher);
  }

  // Passing the book object to the function
  printBookDetails(book);

  // Using built-in objects (Array, Date, Math)

  let currentDate = new Date();
  console.log("\nCurrent Date and Time:", currentDate);

  console.log("\nRandom Math Operation:", Math.random());