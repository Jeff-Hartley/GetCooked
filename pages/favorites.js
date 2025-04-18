import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFavorites } from "@/components/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <>
      <Head>
        <title>GetCooked - Favourites</title>
        <meta name="description" content="Your favourited meals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10 bg-amber-50 min-h-screen">
        <h1 className="text-4xl font-serif font-bold text-center text-amber-800 mb-10">
          ❤️ Your Favourite Recipes
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            You haven't added any meals to your favourites yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((meal) => (
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

                {/* Remove from Favorites Button */}
                <button
                  onClick={() => removeFromFavorites(meal.idMeal)}
                  className="absolute top-2 right-2 text-red-500 hover:scale-110 transition text-2xl"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}