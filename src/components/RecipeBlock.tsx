import type  { RecipeType } from '../types/recipe.types'

interface RecipeProps {
  recipe: RecipeType;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <h3>Method</h3>
      <p>
        {recipe.method}
      </p>
    </div>
  );
};

export default Recipe;