import { useMemo, useState } from 'react'

import Modal from '@/components/ui/Modal'
import TextField from '@/components/ui/TextField'

import { submitServiceForm } from '@/api/forms'
import Img1 from '@/assets/images/why-choose/1.svg'
import { useI18n } from '@/i18n/I18nContext'

import DropdownField from '../ui/DropdownField'

type Props = { open: boolean; onClose: () => void }

type Errors = { name?: string; surname?: string; phone?: string; works?: string }
type Touched = { name?: boolean; surname?: boolean; phone?: boolean; works?: boolean }

export default function BookingModal({ open, onClose }: Props) {
	const { t } = useI18n()

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [phone, setPhone] = useState('')
	const [auto, setAuto] = useState('')
	const [works, setWorks] = useState('')

	const [errors, setErrors] = useState<Errors>({})
	const [touched, setTouched] = useState<Touched>({})
	const [submitted, setSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [submitError, setSubmitError] = useState('')

	const [success, setSuccess] = useState(false)

	const clearForm = () => {
		setName('')
		setSurname('')
		setPhone('')
		setAuto('')
		setWorks('')
		setErrors({})
		setTouched({})
		setSubmitted(false)
		setSubmitError('')
	}

	const resetForm = () => {
		clearForm()
		setSuccess(false)
	}

	const worksOptions = useMemo(
		() => [
			{ value: 'Diagnostics', label: t.booking.worksOptions.diagnostics },
			{ value: 'Maintenance', label: t.booking.worksOptions.maintenance },
			{ value: 'Brake Service', label: t.booking.worksOptions.brakes },
			{ value: 'Suspension', label: t.booking.worksOptions.suspension },
			{ value: 'Custom Work', label: t.booking.worksOptions.custom }
		],
		[t]
	)

	const validateField = (field: keyof Errors, value: string): string | undefined => {
		const v = value.trim()

		if (field === 'name') return v ? undefined : t.booking.errors.nameRequired
		if (field === 'surname') return v ? undefined : t.booking.errors.surnameRequired

		if (field === 'phone') {
			if (!v) return t.booking.errors.phoneRequired
			if (!/^\+?[0-9\s\-()]{7,}$/.test(v)) return t.booking.errors.phoneInvalid
			return undefined
		}

		if (field === 'works') {
			return undefined
		}

		return undefined
	}

	const validateAll = (): boolean => {
		const next: Errors = {
			name: validateField('name', name),
			surname: validateField('surname', surname),
			phone: validateField('phone', phone),
			works: validateField('works', works)
		}

		Object.keys(next).forEach(k => {
			const key = k as keyof Errors
			if (!next[key]) delete next[key]
		})

		setErrors(next)
		return Object.keys(next).length === 0
	}

	const showError = (field: keyof Errors) => {
		return (submitted || touched[field]) && !!errors[field]
	}

	const updateField = (field: keyof Errors, setter: (v: string) => void) => (val: string) => {
		setter(val)

		if (submitError) setSubmitError('')

		if (submitted || touched[field]) {
			const msg = validateField(field, val)
			setErrors(prev => {
				const next = { ...prev }
				if (msg) next[field] = msg
				else delete next[field]
				return next
			})
		}
	}

	const handleClose = () => {
		resetForm()
		onClose()
	}

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitted(true)
		setSubmitError('')

		if (!validateAll()) return

		const selectedWork = worksOptions.find(item => item.value === works)

		try {
			setIsLoading(true)

			await submitServiceForm({
				name: name.trim(),
				surname: surname.trim(),
				phone: phone.trim(),
				auto: auto.trim(),
				type_of_works: selectedWork?.label || ''
			})

			clearForm()
			setSuccess(true)
		} catch (error) {
			setSubmitError(error instanceof Error ? error.message : 'Something went wrong')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Modal open={open} onClose={handleClose} title={success ? '' : t.booking.title}>
			<button
				type='button'
				onClick={handleClose}
				aria-label='Close'
				className='absolute top-4 right-4 grid cursor-pointer place-items-center transition lg:top-5 lg:right-5'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='size-8 lg:size-12'
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
				>
					<path
						d='M29.088 24L37.56 32.472L32.472 37.56L24 29.088L15.504 37.584L10.416 32.496L18.912 24L10.416 15.504L15.504 10.416L24 18.912L32.496 10.44L37.584 15.528L29.088 24Z'
						fill='white'
					/>
				</svg>
			</button>

			{success ? (
				<div className='mx-auto flex w-full max-w-124 flex-col items-center py-8 text-center lg:py-12'>
					<div className='mb-7 flex size-19 items-center justify-center bg-[#292512]'>
						<img src={Img1} alt='Success' />
					</div>

					<h3 className='font-heading mb-4 text-center text-[30px] leading-7 uppercase lg:text-[36px] lg:leading-7'>
						{t.booking.successTitle}
					</h3>

					<p className='mb-8 max-w-90 leading-6 text-white/70'>{t.booking.successText}</p>

					<button
						type='button'
						onClick={handleClose}
						className='bg-primary flex min-h-14.5 w-full items-center justify-center p-3 font-bold text-black uppercase duration-300 hover:shadow-[0_4px_20.7px_0px_#F6D413F7]'
					>
						{t.booking.successButton}
					</button>
				</div>
			) : (
				<>
					<h3 className='font-heading mb-7 text-center text-[30px] leading-7 uppercase lg:text-[36px] lg:leading-7'>
						{t.booking.title}
					</h3>

					<form onSubmit={onSubmit} className='mx-auto w-[min(496px,100%)] space-y-6'>
						<div>
							<TextField
								placeholder={t.booking.name}
								value={name}
								onChange={updateField('name', setName)}
								onBlur={() => setTouched(v => ({ ...v, name: true }))}
							/>
							{showError('name') && <p className='mt-1 text-sm text-red-500'>{errors.name}</p>}
						</div>

						<div>
							<TextField
								placeholder={t.booking.surname}
								value={surname}
								onChange={updateField('surname', setSurname)}
								onBlur={() => setTouched(v => ({ ...v, surname: true }))}
							/>
							{showError('surname') && <p className='mt-1 text-sm text-red-500'>{errors.surname}</p>}
						</div>

						<div>
							<TextField
								placeholder={t.booking.phone}
								value={phone}
								onChange={updateField('phone', setPhone)}
								onBlur={() => setTouched(v => ({ ...v, phone: true }))}
							/>
							{showError('phone') && <p className='mt-1 text-sm text-red-500'>{errors.phone}</p>}
						</div>

						<TextField placeholder={t.booking.auto} value={auto} onChange={setAuto} />

						<div>
							<DropdownField
								placeholder={t.booking.works}
								value={works}
								onChange={updateField('works', setWorks)}
								options={worksOptions}
							/>
							{showError('works') && <p className='mt-1 text-sm text-red-500'>{errors.works}</p>}
						</div>

						{submitError && <p className='text-sm text-red-500'>{submitError}</p>}

						<button
							type='submit'
							disabled={isLoading}
							className='bg-primary flex min-h-14.5 w-full items-center justify-center p-3 font-bold text-black uppercase duration-300 not-disabled:hover:shadow-[0_4px_20.7px_0px_#F6D413F7] disabled:cursor-not-allowed disabled:opacity-60'
						>
							{isLoading ? 'Sending...' : t.booking.send}
						</button>
					</form>
				</>
			)}
		</Modal>
	)
}
