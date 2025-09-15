import React from "react";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  const recipes = [
    {
      name: "Spaghetti Carbonara",
      cookingTime: 30,
      difficulty: "Medium",
      description: "Classic Italian pasta with creamy sauce.",
      image: "https://via.placeholder.com/300x200?text=Carbonara",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan"],
      dietaryTags: ["Gluten-Free"],
    },
    {
      name: "Avocado Toast",
      cookingTime: 10,
      difficulty: "Easy",
      description: "Quick and healthy breakfast option.",
      image: "",
      dietaryTags: ["Vegan"],
    },
    {
      name: "Beef Wellington",
      cookingTime: 120,
      difficulty: "Hard",
      description: "Tender beef wrapped in puff pastry.",
      image: "https://via.placeholder.com/300x200?text=Beef+Wellington",
    },
    {
      name: "Veggie Stir Fry",
      cookingTime: 20,
      difficulty: "Easy",
      description: "Colorful vegetables stir-fried with soy sauce.",
      ingredients: ["Broccoli", "Carrots", "Bell Peppers"],
      dietaryTags: ["Vegetarian", "Vegan"],
    },
  ];

  return (
    <div className="app">
      <h1>Recipe Cards</h1>
      <div className="card-container">
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} {...recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;