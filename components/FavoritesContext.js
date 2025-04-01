import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([]);

    function addToFavorites(recipe) {
        const exists = favorites.some((item) => item.id === recipe.id);

        if (!exists) {
            setFavorites([...favorites, recipe]);
        }
    }

    function removeFromFavorites(recipeId) {
        const updatedList = favorites.filter((item) => item.id !== recipeId);
        setFavorites(updatedList);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
