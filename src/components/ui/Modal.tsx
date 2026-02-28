import { useEffect } from 'react'

type ModalProps = {
	open: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
	useEffect(() => {
		if (!open) return

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		document.addEventListener('keydown', onKeyDown)

		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			document.body.style.overflow = prevOverflow
		}
	}, [open, onClose])

	if (!open) return null

	return (
		<div
			className='fixed inset-0 z-50 grid place-items-center'
			role='dialog'
			aria-modal='true'
			aria-label={title || 'Modal'}
		>
			<button
				type='button'
				onClick={onClose}
				aria-label='Close modal overlay'
				className='absolute inset-0 cursor-default bg-[#1212126B] backdrop-blur-[6px]'
			/>
			<div className='border-border relative z-10 w-[95%] border bg-[#121212] px-5 py-7 lg:px-10 lg:py-10 xl:w-[min(1026px,92vw)]'>
				{children}
			</div>
		</div>
	)
}
