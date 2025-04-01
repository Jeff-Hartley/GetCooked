import React from 'react';

import { useFavorites } from "@/components/FavoritesContext";


export default function RecipeParagraph() {
    const { addToFavorites } = useFavorites();

    const recipe = {
        id: 1,
        title: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish with a rich meat sauce.",
    };

    function alertMSG() {
        addToFavorites(recipe);
        alert("Recipe added to favorites!");
    }

    return (
        <section>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <button onClick={alertMSG}>
                Add to Favorites
            </button>
        </section>
    );
}
