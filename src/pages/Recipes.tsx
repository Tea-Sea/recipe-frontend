import Recipe from '../components/RecipeBlock'
import type { RecipeType } from '../types/recipe.types';

const recipes: RecipeType[] = [
  {
    id: 1,
    name: 'Spaghetti',
    difficulty: 3,
    ingredients: ['Pasta', 'Tomato Sauce', 'Garlic'],
    method: 'Boil water, Cook pasta, Add sauce',
  },
  {
    id: 2,
    name: 'Pancakes',
    difficulty: 1,
    ingredients: ['Flour', 'Eggs', 'Milk'],
    method: 'Mix ingredients Cook on pan',
  }
];

function Recipes() {
  return (
    <div>
      <h3>THIS IS HOPEFULLY WHERE THE RECIPES WILL BE LISTED!!!!!!!</h3>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes;