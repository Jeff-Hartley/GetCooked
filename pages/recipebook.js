import { useState, useEffect } from "react";
import { useFavorites } from "@/components/FavoritesContext";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RecipeBook() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    // Fetch meals from TheMealDB API
    const fetchMeals = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await response.json();
      setMeals(data.meals || []);
    };

    fetchMeals();
  }, [searchQuery]);

  const handleFavoriteToggle = (meal) => {
    const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
    if (isFav) {
      removeFromFavorites(meal.idMeal);
    } else {
      addToFavorites(meal);
    }
  };

  return (
    <>
      <Head>
        <title>GetCooked - The Recipe Book</title>
        <meta name="description" content="Browse and save your favorite recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="main-container">
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Recipe Book</h2>

        {/* Search Input */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "300px",
            }}
          />
        </div>

        {/* Recipe Grid */}
        <div
          className="recipe-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",  // 4 columns per row
            gap: "20px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {meals.slice(0, 16).map((meal) => {
            const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
            return (
              <div
                key={meal.idMeal}
                className="recipe-card"
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px" }}>{meal.strMeal}</h3>

                <button
                  onClick={() => handleFavoriteToggle(meal)}
                  style={{
                    backgroundColor: isFav ? "#ff0000" : "#70a288",
                    color: "#fff",
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    fontSize: "14px",
                  }}
                >
                  {isFav ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
