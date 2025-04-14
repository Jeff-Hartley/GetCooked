import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RecipeDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setRecipe(data.meals[0]);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch recipe:', err);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p className="p-4">Loading recipe...</p>;

  if (!recipe) return <p className="p-4">Recipe not found.</p>;

  return (
    <>
      <Head>
        <title>{recipe.strMeal} | GetCooked</title>
      </Head>
      <Header />

      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full max-w-md rounded mb-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">Instructions:</h2>
        <p className="whitespace-pre-line">{recipe.strInstructions}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside">
          {Array.from({ length: 20 }, (_, i) => {
            const ingredient = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];
            return ingredient && ingredient.trim() ? (
              <li key={i}>{`${ingredient} - ${measure}`}</li>
            ) : null;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}
