const provisions = {
  title: "Welcome pack and provisions",
  text: "We provide a welcome pack consisting of some essentials: wine (an essential in France!), bread, butter etc.) and some local produce as available.  A spice rack provides often used herbs and spices and we provide olive and sunflower oil, salt and pepper to get you started!",
  provisions: [
    "Bottle of Cuvee Dom Peyreton (100% merlot)",
    "Olive oil",
    "Sunflower oil",
    "Red wine vinegar",
    "Salt",
    "Pepper",
    "Butter",
    "Bread",
    "Washing up liquid",
    "Dish washer tablets",
    "Herbs and spices",
    "Stock cubes",
    "Balsamic vinegar",
    "Coffee capsules",
    "Tea Bags",
    "Milk",
    "Sugar",
    "Bag of ice",
  ],
};

export default function handler(req, res) {
  res.status(200).json(provisions);
}
