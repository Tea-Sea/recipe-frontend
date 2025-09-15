import Recipe from '../components/RecipeBlock'
import { keysToCamel } from '../utils/snakeToCamel';
import type { RecipeType } from '../types/recipe.types';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

function Recipes() {

  const apiUrl = import.meta.env.VITE_GO_API_URL;

    // store fetched text here
    const [recipeData, setRecipeData] = useState<RecipeType[]| null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchRecipeData = async () => {
        try {
          const res = await fetch(`${apiUrl}/recipe/all`);
          if (!res.ok) {
            throw new Error(`API error: ${res.status}`);
          }
          const data = keysToCamel(await res.json());
          // data.instructions = keysToCamel(data.instructions);

          setRecipeData(data); // customize based on response shape
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
    };
    fetchRecipeData();
  }, []);

  if (loading) return <p className='center-parent font-extrabold'>LOADING...</p>;
  if (error) return <p className='center-parent'>{error}</p>;

  return (
    <div>
      <h1 className='py-3 text-xl font-bold uppercase'>Recipes:</h1>
      <Modal title="new">HELLO WORLD</Modal>
      <ul>
        {recipeData?.map((item) => (
          <Recipe key={item.id}recipe={item}></Recipe>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;