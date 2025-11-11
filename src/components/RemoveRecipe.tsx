import React from 'react';
import type { RecipeType as Recipe } from '../types/recipe.types';

interface RemoveProps {
  recipe: Recipe;
  onClose: () => void
}

const RemoveRecipe: React.FC<RemoveProps> = ({ recipe, onClose}: RemoveProps) => {

    const apiUrl = import.meta.env.VITE_GO_API_URL;

    const removeRecipe = async (id: number) => {
      try {
        const res = await fetch(`${apiUrl}/recipe/id/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const text = await res.text();
          if (text) {
            const data = JSON.parse(text);
            console.log("Deleted:", data);
          }
          onClose();
        } else {
          throw new Error(`Failed to delete recipe from database: ${res.statusText}`);
        }
      } catch (err: any) {
        console.log(err.message);
      }
    };

  return (
    <div className='flex flex-col items-center'>
        <div>Are you sure you want to delete <span className='font-bold'>{recipe.name}</span>?</div>
        <div>This cannot be undone.</div>
        <div className='flex my-3 space-x-10 w-1/2 justify-center'>
            <button className='w-full bg-green-700 hover:bg-green-800 active:bg-green-900 text-white font-bold py-2 px-5 my-2 rounded-2xl transition-colors' onClick={() => removeRecipe(recipe.id)}>Yes</button>
            <button className='w-full bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-5 my-2 rounded-2xl transition-colors' onClick={onClose}>No</button>
        </div>
    </div>
    )
};

export default RemoveRecipe;