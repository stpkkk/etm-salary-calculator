import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Input } from './components'

const REGIONAL_COEFFICIENT = 1.65
const TAX_PERCENT = 13

function App() {
	const [total, setTotal] = useState(0)
	const [taxPercent, setTaxPercent] = useState(TAX_PERCENT)
	const [regionalCoefficient, setRegionalCoefficient] =
		useState(REGIONAL_COEFFICIENT)
	const [inputValue, setInputValue] = useState(0)

	const calculateTotal = useCallback(() => {
		const value =
			inputValue * regionalCoefficient -
			(inputValue * regionalCoefficient * taxPercent) / 100
		setTotal(value)
	}, [inputValue, regionalCoefficient, taxPercent])

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(+e.target.value)
	}

	const handleTaxPercentChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setTaxPercent(+e.target.value)
	}

	const handleRegionalCoefficientChange = (
		e: ChangeEvent<HTMLInputElement>
	): void => {
		setRegionalCoefficient(+e.target.value)
	}

	useEffect(() => {
		calculateTotal()
	}, [calculateTotal])

	return (
		<main className='mx-auto'>
			<h1 className='text-3xl font-bold'>Расчет ЗП</h1>
			<div className='flex flex-col gap-3 my-5'>
				<Input
					id='tax'
					label='Процентная ставка %:'
					value={taxPercent}
					onChange={handleTaxPercentChange}
				/>
				<Input
					id='regional'
					label='Региональный коэффициент:'
					value={regionalCoefficient}
					onChange={handleRegionalCoefficientChange}
				/>
				<Input
					id='val'
					label='Введите значение:'
					value={inputValue}
					onChange={handleInputChange}
				/>
				<div className='grid place-content-center'>
					<span className='text-2xl'>{total} руб.</span>
				</div>
			</div>
		</main>
	)
}

export default App
