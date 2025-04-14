import React from 'react';
import { useFavorites } from "@/components/FavoritesContext";

export default function RecipeParagraph() {
  const { addToFavorites } = useFavorites();

  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with a rich meat sauce.",
    },
    {
      id: 2,
      title: "Chicken Alfredo",
      description:
        "Creamy fettuccine pasta with grilled chicken in a smooth alfredo sauce.",
    },
    {
      id: 3,
      title: "Cheeseburger",
      description:
        "A classic with a beef patty topped with melted cheese",
    },
  ];

  return (
    <section>
      {recipes.map((recipe) => (
        <article key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <button
            onClick={() => {
              addToFavorites(recipe);
              alert("Recipe added to favorites!");
            }}
          >
            Add to Favorites
          </button>
        </article>
      ))}
    </section>
  );
}
