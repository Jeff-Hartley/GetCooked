import { useFavorites } from "@/components/FavoritesContext";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Favorites() {
  const { favorites } = useFavorites();

  // Limit to 21 favorites
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
            gridTemplateColumns: "repeat(4, 1fr)",  // 4 columns per row
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
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
