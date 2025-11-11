import React from 'react';
import { Dropdown } from './Dropdown';

interface IngredientProps {
	amount: string
	unit: string
	label: string
	onChange: (updated: {amount?: string; unit?: string; label?: string}) => void
	onRemove: () => void
}

export const IngredientForm: React.FC<IngredientProps> = ({amount, unit, label, onChange, onRemove}) => (

	<div className='flex w-full space-x-2 items-center my-1'>
		<div className='relative flex-1'>
			<input
			className='px-2.5 py-2 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'
			id="amount"
			type="text"
			pattern="^([0-9]*\.?[0-9]+|\.?[0-9]+)$"
			value={amount}
			onChange={e => onChange({amount: e.target.value})}
			placeholder=""
      required={true}
			/>
			<label className='absolute text-sm duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1' htmlFor="amount">Amount:</label>
		</div>

		<div className='relative flex-1'>
		 <Dropdown
        id="unit"
        label="Unit"
				options={["tsp", "tbsp", "gram", "kilogram"]}
				value={unit}
        placeholder=''
				onChange={e => onChange({unit: e})}
			/>
		</div>

		<div className='relative flex-1'>
			<input
			className='px-2.5 py-2 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'
			id="ingredient"
			type="text"
			pattern="^[A-Za-z ]+$"
			value={label}
			onChange={e => onChange({label: e.target.value})}
			placeholder=""
      required={true}
			/>
			<label className='absolute text-sm duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1' htmlFor="ingredient">Ingredient:</label>
		</div>
		<button className='sticky float-right font-extrabold text-sm rounded-2xl px-1.5 my-2 h-fit w-fit border-3 bg-gray-100 text-gray-500 border-gray-500 hover:text-black hover:bg-gray-400 hover:border-black transition-colors' onClick={onRemove}>X</button>
	</div>
	)