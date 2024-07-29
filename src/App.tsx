import { ChangeEvent, useState } from 'react'

function App() {
	const [total, setTotal] = useState(0)
	const REGINAL_COEFFICIENT = 1.65
	const TAX_PERCENT = 13

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		const value =
			+e.target.value * REGINAL_COEFFICIENT -
			(+e.target.value * REGINAL_COEFFICIENT * TAX_PERCENT) / 100

		setTotal(value)
	}

	return (
		<main>
			<h1 className='text-3xl font-bold'>Расчет ЗП</h1>
			<div className='flex flex-col gap-3 my-5'>
				<div>
					<input
						className='min-h-10 p-2 text-xl font-bold text-black rounded-lg'
						type='text'
						onChange={handleChange}
					/>
				</div>
				<div>
					<span>{total} руб.</span>
				</div>
			</div>
		</main>
	)
}

export default App
