import { useForm } from 'react-hook-form'

interface InputProps {
	name: string
	label: string
}

function Input({ name, label }: InputProps) {
	const { register } = useForm()

	return (
		<div>
			<label htmlFor={name} className=' block mb-1 text-sm font-medium'>
				{label}
			</label>
			<input
				id={name}
				type='number'
				step='0.01'
				{...register(name)}
				className='min-h-10 w-full p-2 text-xl font-bold text-black border border-gray-300 rounded-lg'
			/>
		</div>
	)
}

export default Input
