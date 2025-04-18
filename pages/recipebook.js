import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFavorites } from "@/components/FavoritesContext";
import { useState, useEffect } from "react";

export default function RecipeBook() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    };
    fetchMeals();
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>GetCooked - Recipe Book</title>
        <meta name="description" content="Explore our collection of delicious recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10 bg-amber-50 min-h-screen">
        <h1 className="text-4xl font-serif font-bold text-center text-amber-800 mb-10">
          🍽️ Recipe Book
        </h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a meal..."
            className="p-2 rounded-lg border border-amber-300 w-1/2"
          />
        </div>

        {meals.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No meals found.</p>
        ) : (
          <div className="grid grid-cols-3 gap-8">
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
                    className="w-full h-8 object-cover"
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
      </main>

      <Footer />
    </>
  );
}
