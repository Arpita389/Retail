const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const cartItems = [];
const users = [];

app.get("/api/cart", (req, res) => {
  res.json(cartItems);
});

app.post("/api/cart", (req, res) => {
  const { item } = req.body;
  if (item && !cartItems.some((cartItem) => cartItem.name === item)) {
    cartItems.push(item);
    res.json({ message: `${item} added to the cart.` });
  } else {
    res
      .status(400)
      .json({ error: "Invalid request or item already in the cart." });
  }
});

app.delete("/api/cart/:itemName", (req, res) => {
  const { item } = req.params;
  const index = cartItems.findIndex((cartItem) => cartItem.name === item);
  if (index !== -1) {
    cartItems.splice(index, 1);
    res.json({ message: `${item} removed from the cart.` });
  } else {
    res.status(404).json({ error: `${item} not found in the cart.` });
  }
});
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;
  if (username && password && !users.some((user) => user.username === username)) {
    users.push({ username, password });
    res.json({ message: "User registered successfully." });
  } else {
    res.status(400).json({ error: "Invalid request or username already taken." });
  }
});
app.post("/api/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    res.json({ message: "Logged in successfully." });
  } else {
    res.status(401).json({ error: "Invalid credentials." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
