const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil.",
    rating: 4.5,
    image: "https://source.unsplash.com/250x150/?pizza",
  },
  {
    id: 2,
    name: "Burger",
    description: "Juicy beef burger with cheese, lettuce, and tomato.",
    rating: 4.7,
    image: "https://source.unsplash.com/250x150/?burger",
  },
  {
    id: 3,
    name: "Pasta Carbonara",
    description: "Italian pasta with creamy sauce and bacon.",
    rating: 4.8,
    image: "https://source.unsplash.com/250x150/?pasta",
  },
  {
    id: 4,
    name: "Sushi",
    description: "Fresh sushi rolls with salmon and avocado.",
    rating: 4.9,
    image: "https://source.unsplash.com/250x150/?sushi",
  },
];

app.get("/foods", (req, res) => {
  res.json(foods);
});

app.listen(5000, () => console.log("Server running on port 5000"));
