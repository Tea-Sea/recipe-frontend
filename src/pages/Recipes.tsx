import Recipe from '../components/RecipeBlock'
import { keysToCamel } from '../utils/snakeToCamel';
import type { RecipeType } from '../types/recipe.types';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import AddRecipe from '../components/AddRecipe';

function Recipes() {

  const apiUrl = import.meta.env.VITE_GO_API_URL;

    // Store fetched text here
    const [recipeData, setRecipeData] = useState<RecipeType[]| null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
      const fetchRecipeData = async () => {
        try {
          const res = await fetch(`${apiUrl}/recipe/all`);
          if (!res.ok) {
            throw new Error(`API error: ${res.status}`);
          }
          const data = keysToCamel(await res.json());
          // data.instructions = keysToCamel(data.instructions);

          setRecipeData(data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
    };
    fetchRecipeData();
  }, []);

  // Lock body when modal is active
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showModal])

  // Default handling
  if (loading) return <p className='center-parent font-extrabold'>LOADING...</p>;
  if (error) return <p className='center-parent'>{error}</p>;

  return (
    <div>
      <div className='flow-root py-3'>
        <div className='float-left text-xl font-bold uppercase'>Recipes:</div>
        <button className='float-right px-2 py-1 font-bold text-2xl  text-green-700 border-3 border-green-700 rounded-3xl hover:bg-green-700 hover:text-amber-200 transition-colors duration-300 ' onClick={() => setShowModal(true)}>&#xff0b;</button>
      </div>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <AddRecipe/>
      </Modal>
      <ul>
        {recipeData?.map((item) => (
          <Recipe key={item.id}recipe={item}></Recipe>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;