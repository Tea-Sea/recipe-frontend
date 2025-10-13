import type  { RecipeType } from '../types/recipe.types'
import Collapsible from './Collapsible';

interface RecipeProps {
  recipe: RecipeType;
  canRemove?: boolean;
  expanded?: boolean;
  openModal?: () => void;
}

const Recipe: React.FC<RecipeProps> = ({ recipe, canRemove = true, expanded = false , openModal}: RecipeProps) => {

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
        {canRemove &&
          <button className='float-right hover:underline' onClick={openModal}>
            <svg className="w-6 h-6 duration-300 fill-red-600 hover:fill-gray-400"viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path>
            </svg>
          </button>

        }
      </Collapsible>
    </div>
  );
};

export default Recipe;