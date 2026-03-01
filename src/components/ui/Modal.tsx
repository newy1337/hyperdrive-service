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

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const lenis = (window as any).__lenis
		lenis?.stop()

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		document.addEventListener('keydown', onKeyDown)

		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			document.body.style.overflow = prevOverflow
			lenis?.start()
		}
	}, [open, onClose])

	if (!open) return null

	return (
		<div className='fixed inset-0 z-50' role='dialog' aria-modal='true' aria-label={title || 'Modal'}>
			<div className='absolute inset-0 bg-[#1212126B] backdrop-blur-[6px]' />

			<div className='relative z-10 h-full overflow-y-auto' data-lenis-prevent>
				<div className='flex min-h-full items-center justify-center px-3 py-6 lg:px-6 lg:py-10'>
					<div
						className='border-border relative w-[95%] border bg-[#121212] px-5 py-7 lg:px-10 lg:py-10 xl:w-[min(1026px,92vw)]'
						// onClick={e => e.stopPropagation()}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
