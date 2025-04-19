import React, { useState, useEffect } from "react";
import { useFavorites } from "@/components/FavoritesContext";

export default function RecipeBrowser() {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals.slice(0, 16));
        }
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals.slice(0, 16));
        } else {
          setMeals([]);
        }
      });
  };

  return (
    <div className="main-container">
      <input
        type="text"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 rounded border w-full max-w-md mb-6"
      />

      {meals.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No meals found.</p>
      ) : (
        <div className="recipe-grid">
          {meals.map((meal) => {
            const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
            return (
              <div key={meal.idMeal} className="recipe-card">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
                <button
                  className="favorite-btn"
                  onClick={() =>
                    isFav
                      ? removeFromFavorites(meal.idMeal)
                      : addToFavorites(meal)
                  }
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
