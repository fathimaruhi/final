/* RecipeCard.jsx */
import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({
  name,
  cookingTime,
  difficulty,
  description,
  image,
  ingredients,
  dietaryTags,
}) => {
  // Fallback image
  const fallbackImage =
    "https://via.placeholder.com/300x200?text=No+Image";

  // Difficulty color logic
  const difficultyColors = {
    Easy: "green",
    Medium: "orange",
    Hard: "red",
  };

  return (
    <div className="recipe-card">
      <img
        src={image || fallbackImage}
        alt={name}
        className="recipe-img"
      />
      <h2>{name}</h2>
      <p><strong>Cooking Time:</strong> {cookingTime} mins</p>
      <p>
        <strong>Difficulty:</strong>{" "}
        <span
          style={{ color: difficultyColors[difficulty] || "black" }}
        >
          {difficulty}
        </span>
      </p>
      <p className="description">{description}</p>

      {/* Conditional rendering */}
      {ingredients && ingredients.length > 0 && (
        <div>
          <strong>Ingredients:</strong>
          <ul>
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {dietaryTags && dietaryTags.length > 0 && (
        <div className="tags">
          {dietaryTags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;