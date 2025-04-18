import { useFavorites } from "@/components/FavoritesContext";

const SomeComponent = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      <button onClick={() => addToFavorites(meal)}>Add to Favorites</button>
      <button onClick={() => removeFromFavorites(meal.idMeal)}>Remove from Favorites</button>
    </div>
  );
};
