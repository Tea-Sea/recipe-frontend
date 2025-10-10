import React from 'react';
import { IngredientForm as Ingredient } from './IngredientForm';
import { StepForm  as Step } from './StepForm';
import { useState } from 'react';
import Recipe from './RecipeBlock';

interface IngredientInput {
	id: number;
	amount: string;
	unit: string;
	ingredient: string;
}

interface StepInput {
	id: number;
	stepNumber: number;
	stepTime: string;
	instruction: string;
}

const AddRecipe: React.FC = () => {

	// Initialise dynamic form content with 1 entry
	const [name, setName] = useState('')
	const [ingredients, setIngredients] = useState<IngredientInput[]>([])
	const [steps, setSteps] = useState<StepInput[]>([])

	const updateName = (name: string) => {
		setName(name)
	}

	// Ingredient state management
	const addIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const newIngredientID: IngredientInput = {id: Date.now(), amount: '', unit: '', ingredient: ''}
		setIngredients(ingredients => [...ingredients, newIngredientID])
	}

	const updateIngredient = (id: number, updated: Partial<IngredientInput>) => {
		setIngredients(ingredients =>
			ingredients.map(ing => ing.id === id ? { ...ing, ...updated} : ing)
		)
	}

	const removeIngredient = (idToRemove: number) => {
		setIngredients(ingredients => ingredients.filter(ingredient => ingredient.id !== idToRemove))
	}

	// Ingredient state management
	const addStep = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const newStepID: StepInput = {id: Date.now(), stepNumber: steps.length + 1, stepTime: '', instruction: ''}
		setSteps(steps => [...steps, newStepID])
	}

	const updateStep = (id: number, updated: Partial<StepInput>) => {
		setSteps(steps =>
			steps.map(step => step.id === id ? { ...step, ...updated} : step)
		)
	}

	const removeStep = (idToRemove: number) => {
		setSteps(steps => steps.filter(step => step.id !== idToRemove))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const form = e.currentTarget;
	const formData = new FormData(form);
	const name = formData.get("name");

	console.log("Form submitted:", name);
	// TODO: handle form submission
  };

  return (
	<div className='flex flex-col items-center'>
    <div>
		  <div className='font-bold text-xl mb-4 underline'>Add a new recipe:</div>
    </div>
		<form onSubmit={handleSubmit} className='flex flex-col w-full max-w-3xl'>
			<div className='relative items-center space-x-2 flex mb-2'>
				<input type="text" id="name" placeholder="" required={true} className='px-2.5 py-2 w-1/2 text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'></input>
				<label className='absolute text-sm duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1' htmlFor="name">Name:</label>
			</div>
			<div className='space-x-2'>
				<label className='mb-2 block w-full font-bold'>Ingredients:</label>
				{ingredients.map((ingredient) => (
					<div className='flex'>
						<Ingredient
						key={ingredient.id}
						amount={ingredient.amount}
						unit={ingredient.unit}
						ingredient={ingredient.ingredient}
						onChange={(updated) => updateIngredient(ingredient.id, updated)}
						onRemove={() => removeIngredient(ingredient.id)}/>
					</div>
					))}
				<button className='px-1  font-bold text-xl  text-green-700 border-3 border-green-700 rounded-3xl hover:bg-green-700 hover:text-white transition-colors duration-300 ' onClick={addIngredient}>&#xff0b;</button>
			</div>
			<div className='space-x-2 mt-5'>
				<label className='mb-2 block w-full font-bold'>Method:</label>
				{steps.map((step, index) => (
					<div>
						<Step
						key={step.id}
						stepNumber={index + 1}
						stepTime={step.stepTime}
						instruction={step.instruction}
						onChange={(updated) => updateStep(step.id, updated)}
						onRemove={() => removeStep(step.id)}/>
					</div>
					))}
				<button className='px-1  font-bold text-xl  text-green-700 border-3 border-green-700 rounded-3xl hover:bg-green-700 hover:text-white transition-colors duration-300 ' onClick={addStep}>&#xff0b;</button>
			</div>
			<div className='flex w-full justify-center'>
				<button className='px-1 w-1/2 font-bold text-xl  text-green-700 border-3 border-green-700 rounded-3xl hover:bg-green-700 hover:text-white transition-colors duration-300 ' type="submit">Submit</button>
			</div>
		</form>
	</div>
	)
};

export default AddRecipe;