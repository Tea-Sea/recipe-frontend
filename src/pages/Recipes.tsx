import Recipe from '../components/RecipeBlock'
import { keysToCamel } from '../utils/snakeToCamel';
import type { RecipeType } from '../types/recipe.types';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import RecipeForm from '../components/RecipeForm';
import RemoveRecipe from '../components/RemoveRecipe';

function Recipes() {

  const apiUrl = import.meta.env.VITE_GO_API_URL;

    // Store fetched text here
    const [recipeData, setRecipeData] = useState<RecipeType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const fetchRecipeData = async () => {
      try {
        const res = await fetch(`${apiUrl}/recipe/all`, {
          credentials: "include",
        });
        if (res.status === 401) {
          window.location.href = "/login";
          return;
        }
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        const data = keysToCamel(await res.json());

        setRecipeData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
  };

  const handleUpdateData = () => {
    fetchRecipeData();
    setShowModal(false)
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const populateModal = (id: string, props?: Object) => {
    switch (id) {
    case 'add':
      setModalContent(<RecipeForm onSubmit={handleUpdateData} {...props}/>);
      break;
    case 'remove':
      setModalContent(<RemoveRecipe recipe={props ?? {}} onClose={handleUpdateData}/>);
      break;
    case 'update':
      setModalContent(<RecipeForm recipe={props} onSubmit={handleUpdateData}/>);
      break;
    default:
      break;
    }
    setShowModal(true);
  }

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
        <button className='float-right px-2 py-1 font-bold text-2xl  text-green-700 border-3 border-green-700 rounded-3xl hover:bg-green-700 hover:text-amber-200 active:text-amber-200 active:bg-green-900 active:border-green-900 transition-colors duration-300 ' onClick={() => populateModal('add')}>&#xff0b;</button>
      </div>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        {modalContent}
      </Modal>
      <ul>
        {recipeData?.map((item) => (
          <Recipe
            key={item.id}
            recipe={item}
            onDelete={() => populateModal('remove', item)}
            onUpdate={() => populateModal('update', item)}></Recipe>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;