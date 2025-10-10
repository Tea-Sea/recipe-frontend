import type  { RecipeType } from '../types/recipe.types'
import Collapsible from './Collapsible';

interface RecipeProps {
  recipe: RecipeType;
  expanded?: boolean;
}

const Recipe: React.FC<RecipeProps> = ({ recipe, expanded = false }) => {
  return (
    <div className='items-center w-full bg-white border-2 border-black p-4 mb-3 shadow-retro group'>
      <Collapsible key={expanded ? 'open' : 'closed'} title={recipe.name} expanded={expanded} hover="hover:backdrop-brightness-50 rounded" className='font-bold text-2xl whitespace-nowrap'
      teaser={
        <div className='flex justify-end space-x-2 font-bold text-sm text-gray-500 select-none invisible group-hover:visible'>
          <div>Difficulty: {recipe.difficulty}</div>
          <div>Time: TBA</div>
      </div>
      }>
        <Collapsible title='Ingredients: ' expanded={true} className='font-bold text-base'>
          <ul className='ml-5 font-normal'>
          {recipe.ingredients.map((item, i) =>
            <li key={i}>
              {item.amount}{item.unit?.label ? ' ' + item.unit?.label : ''} {item.ingredient.label}{item.unit?.label ? '': 's'}
            </li>
          )}
          </ul>
        </Collapsible>
        <Collapsible title='Method: ' expanded={true} className='font-bold text-base'>
          <ul>
          {recipe.instructions.map((item, i) =>
            <li key={i}>
              <div className='font-bold flex ml-5'>Step {item.stepNumber}:
                <div className='font-normal ml-2'>
                  {item.stepText}
                </div>
              </div>
            </li>
          )}
        </ul>
        </Collapsible>
        <button className='float-right hover:underline'>REMOVE TBA</button>
      </Collapsible>
    </div>
  );
};

export default Recipe;