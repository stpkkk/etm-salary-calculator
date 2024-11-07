'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'

const DEFAULT_TAX_PERCENT = 13
const DEFAULT_REGIONAL_COEFFICIENT = 1.65

interface IFormInput {
	tax: string
	regional: string
	salary: string
}

export default function Component() {
	const [total, setTotal] = useState(0)

	const { register, handleSubmit } = useForm<IFormInput>({
		defaultValues: {
			tax: DEFAULT_TAX_PERCENT.toString(),
			regional: DEFAULT_REGIONAL_COEFFICIENT.toString(),
			salary: '0',
		},
	})

	const onSubmit: SubmitHandler<IFormInput> = data => {
		const { tax, regional, salary } = data
		const calculatedTotal =
			parseFloat(salary) * parseFloat(regional) -
			(parseFloat(salary) * parseFloat(regional) * parseFloat(tax)) / 100
		setTotal(isNaN(calculatedTotal) ? 0 : calculatedTotal)
	}

	return (
		<main className='max-w-md p-6 mx-auto'>
			<h1 className='mb-6 text-3xl font-bold'>Расчет ЗП</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
				<div>
					<label htmlFor='tax' className=' block mb-1 text-sm font-medium'>
						Процентная ставка %:
					</label>
					<input
						id='tax'
						type='number'
						step='0.01'
						{...register('tax')}
						className='min-h-10 w-full p-2 text-xl font-bold text-black border border-gray-300 rounded-lg'
					/>
				</div>
				<div>
					<label htmlFor='regional' className=' block mb-1 text-sm font-medium'>
						Региональный коэффициент:
					</label>
					<input
						id='regional'
						type='number'
						step='0.01'
						{...register('regional')}
						className='min-h-10 w-full p-2 text-xl font-bold text-black border border-gray-300 rounded-lg'
					/>
				</div>
				<div>
					<label htmlFor='salary' className=' block mb-1 text-sm font-medium'>
						Введите значение:
					</label>
					<input
						id='salary'
						type='number'
						step='0.01'
						{...register('salary')}
						className='min-h-10 w-full p-2 text-xl font-bold text-black border border-gray-300 rounded-lg'
					/>
				</div>
				<div className='text-center'>
					<button
						type='submit'
						className='hover:bg-blue-700 max-w-32 x w-full px-4 py-2 font-bold text-white bg-blue-500 rounded'
					>
						Рассчитать
					</button>
				</div>
			</form>
			<div className='mt-6 text-center'>
				<span className='text-2xl font-bold'>{total.toFixed(2)} руб.</span>
			</div>
		</main>
	)
}
