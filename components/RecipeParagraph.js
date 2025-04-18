import { useEffect, useState } from "react";
import { useFavorites } from "@/components/FavoritesContext";

export default function RecipeBrowser({ meals = [] }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-serif font-bold text-center text-amber-800 mb-10">
        🍽️ Browse Meals
      </h1>

      {meals.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => {
            const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);

            return (
              <div
                key={meal.idMeal}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl border border-amber-100"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold font-serif text-amber-800 mb-2">
                    {meal.strMeal}
                  </h2>
                  <a
                    href={`https://www.themealdb.com/meal/${meal.idMeal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 font-medium underline"
                  >
                    View Full Recipe
                  </a>
                </div>

                {/* ❤️ Heart Button */}
                <button
                  onClick={() =>
                    isFav
                      ? removeFromFavorites(meal.idMeal)
                      : addToFavorites(meal)
                  }
                  className="absolute top-2 right-2 text-red-500 hover:scale-110 transition text-2xl"
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