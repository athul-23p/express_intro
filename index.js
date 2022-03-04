const express = require("express");
const app = express();

app.get("", function (req, res) {
  res.send("hello");
});

app.get("/books", function (req, res) {
  let books = [{ title: "Don Quixote", author: "Miguel de Cervantes" }, {title:'One Hundred Year of Solitued',author : 'Gabreil Garzia Marquez'},
{title : 'The Brothers Karamazov',author : 'Fyodor Dostoyevsky'},{
  title:'Crime and Punishment', author : 'Fyodor Dostoyevsky'
}];
  res.json(books);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
