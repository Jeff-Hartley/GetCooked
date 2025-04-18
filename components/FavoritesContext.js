import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addToFavorites = (meal) => {
    if (!favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      setFavorites((prevFavorites) => [...prevFavorites, meal]);
    }
  };

  const removeFromFavorites = (mealId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((meal) => meal.idMeal !== mealId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
