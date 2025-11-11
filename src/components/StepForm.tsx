import React from 'react';

interface StepProps {
  stepNumber: number
	stepTime: string
	stepText: string
	onChange: (updated: {stepTime?: string; stepText?: string;}) => void
	onRemove: () => void
}

export const StepForm: React.FC<StepProps> = ({stepNumber, stepTime, stepText, onChange, onRemove}) => (
    <div className='flex space-x-2 items-start my-1 w-full h-fit'>
      <div className='font-bold whitespace-nowrap items-start'>Step {stepNumber}:</div>
      <div className='w-full justify-end'>
        <div className='relative mb-3 flex w-1/5'>
          <input
          className='px-2.5 py-2 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'
          id="time"
          type="text"
          pattern="^([0-9]*\.?[0-9]+|\.?[0-9]+)$"
          value={stepTime}
          onChange={e => onChange({stepTime: e.target.value})}
          placeholder=""
          />
          <span className='flex items-center mx-1'>minutes</span>
          <label className='absolute text-sm duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1' htmlFor="time">Time:</label>
        </div>

      <div className='relative w-full flex items-end'>
        <textarea
        className='px-2.5 py-2 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'
        id="instruction"
        value={stepText}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = 'auto';
          target.style.height = target.scrollHeight + 'px';
        }}
        onChange={e => onChange({stepText: e.target.value})}
        placeholder=""
        required={true}
        />
        <label className='absolute text-sm duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1' htmlFor="instruction">Instruction:</label>
		  <button className='sticky float-right font-extrabold text-sm rounded-2xl px-1.5 ml-1.5 my-2 h-fit w-fit border-3 bg-gray-100 text-gray-500 border-gray-500 hover:text-black hover:bg-gray-400 hover:border-black transition-colors' onClick={onRemove}>X</button>
		  </div>
    </div>
    </div>
  )