import { useState } from 'react';
import type { RecipeType } from '../types/recipe.types';
import Recipe from '../components/RecipeBlock';
import { keysToCamel } from '../utils/snakeToCamel';

function Home() {
  const apiUrl = import.meta.env.VITE_GO_API_URL;

  // store fetched text here
  const [recipeData, setRecipeData] = useState<RecipeType| null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomRecipeData = async () => {
    try {
      const res = await fetch(`${apiUrl}/recipe/random`);
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = keysToCamel(await res.json());

      setRecipeData(data); // customize based on response shape
    } catch (err: any) {
      setError(err.message);
    }};

  return (
    <>
      <header className='flex justify-center'>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded-2xl' onClick={fetchRandomRecipeData}>
          Give me a random recipe
        </button>
      </header>
      <div>
      {error && <p className='center-parent'>{error}</p>}
        {recipeData && (
          <Recipe key={recipeData.id} recipe={recipeData}></Recipe>
        )}
        </div>
    </>
  );
}

export default Home;