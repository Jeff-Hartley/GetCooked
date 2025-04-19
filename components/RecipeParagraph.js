import React, { useEffect, useState } from "react";
import RecipeBrowser from "./RecipeBrowser";

export default function RecipeParagraph() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-6">Browse Recipes</h1>
      <RecipeBrowser meals={meals} />
    </div>
  );
}
