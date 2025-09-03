import type  { RecipeType } from '../types/recipe.types'

interface RecipeProps {
  recipe: RecipeType;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div>
      <h2><strong>{recipe.name}</strong></h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, i) =>
          <li key={i}>
            {item.amount}{item.unit?.label ? ' ' + item.unit?.label : ''} {item.ingredient.label}{item.unit?.label ? '': 's'}
          </li>
        )}
      </ul>
      <h3><strong>Method:</strong></h3>
      <ul>
        {recipe.instructions.map((item, i) =>
          <li key={i}>
            <strong>Step {item.stepNumber}:</strong> {item.stepText}
          </li>
        )}
      </ul>
      <br></br>
    </div>
  );
};

export default Recipe;