const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Enable CORS for the frontend
app.use(express.json());

let companies = [
  {
    id: 1,
    name: "Graffersid Web and App Development",
    city: "Indore",
    reviews: 41,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Code Tech Company",
    city: "Indore",
    reviews: 25,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Innogent Pvt. Ltd.",
    city: "Indore",
    reviews: 30,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Pixel Web and App Development",
    city: "Indore",
    reviews: 35,
    rating: 4.3,
  },
];

// Get all companies
app.get("/companies", (req, res) => {
  res.json(companies);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
