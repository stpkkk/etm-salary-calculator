import { ChangeEvent } from 'react'

interface InputProps {
	id: string
	label: string
	value: number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ id, value, onChange, label }: InputProps) {
	return (
		<div className='flex flex-col gap-2'>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				value={value}
				className='min-h-10 p-2 text-xl font-bold text-black rounded-lg'
				type='text'
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
