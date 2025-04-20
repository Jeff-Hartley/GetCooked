import { useFavorites } from "@/components/FavoritesContext";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  const limitedFavorites = favorites.slice(0, 21);

  return (
    <>
      <Head>
        <title>GetCooked - Your Favorites</title>
        <meta name="description" content="Your favorite recipes in one place" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="main-container">
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Your Favorite Recipes</h2>

        <div
          className="recipe-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {limitedFavorites.map((meal) => (
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
              <a href={`https://www.themealdb.com/meal.php?c=${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </a>
              <button
                onClick={() => removeFromFavorites(meal.idMeal)}
                style={{
                  backgroundColor: "#e57373",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
