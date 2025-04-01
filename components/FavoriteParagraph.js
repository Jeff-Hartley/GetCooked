import { useFavorites } from "@/components/FavoritesContext";
import React from 'react';


export default function FavouriteParagraph() {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <section>
            <h2>Your Favorite Recipes</h2>
            {favorites.length === 0 ? (
                <p>You haven’t added any favorites yet.</p>
            ) : (
                <ul>
                    {favorites.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <button onClick={() => removeFromFavorites(recipe.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
