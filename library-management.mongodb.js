use('libraryDB');
db.books.insertMany([
  {
    title: "Overcome AI",
    author: "Scott Gamm",
    category: "AI",
    publishedYear: 2025,
    availableCopies: 15
  },
  {
    title: "The Horse Shoe Man",
    author: "Rakhi Kapoor",
    category: "Experience journey of the Derby CEO",
    publishedYear: 2020,
    availableCopies: 10
  }
]);

db.books.insertMany([
  { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", publishedYear: 2015, availableCopies: 40 },
  { title: "Deep Work", author: "Cal Newport", category: "Productivity", publishedYear: 2016, availableCopies: 25 },
  { title: "Java Cras", author: "Herbert Schildt", category: "Programming", publishedYear: 2014, availableCopies: 18 },
  { title: "Think Like a Monk", author: "Jay Shetty", category: "Self Help", publishedYear: 2020, availableCopies: 52 },
  { title: "Python Crash Course", author: "Eric Matthes", category: "Programming", publishedYear: 2019, availableCopies: 18 }
]);
db.books.find();
db.books.find({ category: "Programming" });
db.books.find({ publishedYear: { $gt: 2015 } });
db.books.updateOne(
  { title: "The Horse Shoe Man" },
  { $inc: { availableCopies: 2 } }
);
db.books.updateOne(
  { title: "Deep Work" },
  { $set: { category: "Self Help" } }
);
db.books.deleteMany({ availableCopies: 0 });
const book = db.books.findOne({ title: "Unknown Book" });

if (!book) {
  print("Error: Book not found");
}
else if (book.availableCopies <= 0) {
  print("Error: Negative stock not allowed");
}
else {
  db.books.updateOne(
    { title: "Unknown Book" },
    { $inc: { availableCopies: -1 } }
  );
  print("Book issued successfully");
}