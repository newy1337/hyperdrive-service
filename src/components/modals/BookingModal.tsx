import { useState } from 'react'

import Modal from '@/components/ui/Modal'
import TextField from '@/components/ui/TextField'

import { useI18n } from '@/i18n/I18nContext'

type Props = {
	open: boolean
	onClose: () => void
}

type Errors = {
	name?: string
	surname?: string
	phone?: string
}

export default function BookingModal({ open, onClose }: Props) {
	const { t } = useI18n()

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [phone, setPhone] = useState('')
	const [auto, setAuto] = useState('')
	const [works, setWorks] = useState('')

	const [errors, setErrors] = useState<Errors>({})

	const resetForm = () => {
		setName('')
		setSurname('')
		setPhone('')
		setAuto('')
		setWorks('')
		setErrors({})
	}

	const validate = (): boolean => {
		const newErrors: Errors = {}

		if (!name.trim()) newErrors.name = t.booking.errors.nameRequired
		if (!surname.trim()) newErrors.surname = t.booking.errors.surnameRequired

		if (!phone.trim()) {
			newErrors.phone = t.booking.errors.phoneRequired
		} else if (!/^\+?[0-9\s\-()]{7,}$/.test(phone)) {
			newErrors.phone = t.booking.errors.phoneInvalid
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!validate()) return
		console.log({ name, surname, phone, auto, works })
		resetForm()
		onClose()
	}

	const handleClose = () => {
		resetForm()
		onClose()
	}
	return (
		<Modal open={open} onClose={handleClose} title={t.booking.title}>
			<button
				type='button'
				onClick={handleClose}
				aria-label='Close'
				className='absolute top-4 right-4 grid cursor-pointer place-items-center transition lg:top-5 lg:right-5'
			>
				<svg xmlns='http://www.w3.org/2000/svg' className='size-8 lg:size-12' width='48' height='48' viewBox='0 0 48 48' fill='none'>
					<path
						d='M29.088 24L37.56 32.472L32.472 37.56L24 29.088L15.504 37.584L10.416 32.496L18.912 24L10.416 15.504L15.504 10.416L24 18.912L32.496 10.44L37.584 15.528L29.088 24Z'
						fill='white'
					/>
				</svg>
			</button>

			<h3 className='font-heading mb-7 text-center text-[30px] leading-7 uppercase lg:text-[36px] lg:leading-7'>
				{t.booking.title}
			</h3>

			<form onSubmit={onSubmit} className='mx-auto w-[min(496px,100%)] space-y-6'>
				<div>
					<TextField placeholder={t.booking.name} value={name} onChange={setName} />
					{errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name}</p>}
				</div>

				<div>
					<TextField placeholder={t.booking.surname} value={surname} onChange={setSurname} />
					{errors.surname && <p className='mt-1 text-sm text-red-500'>{errors.surname}</p>}
				</div>

				<div>
					<TextField placeholder={t.booking.phone} value={phone} onChange={setPhone} />
					{errors.phone && <p className='mt-1 text-sm text-red-500'>{errors.phone}</p>}
				</div>

				<TextField placeholder={t.booking.auto} value={auto} onChange={setAuto} />
				<TextField placeholder={t.booking.works} value={works} onChange={setWorks} />

				<button
					type='submit'
					className='bg-primary flex min-h-14.5 w-full cursor-pointer items-center justify-center gap-2.5 p-3 font-bold text-black uppercase duration-300 not-disabled:hover:shadow-[0_4px_20.7px_0px_#F6D413F7] disabled:cursor-not-allowed disabled:opacity-50'
				>
					{t.booking.send}
				</button>
			</form>
		</Modal>
	)
}
