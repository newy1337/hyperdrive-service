import { ChevronDown, ChevronUp } from 'lucide-react'

import { useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '@/lib/cn'

export type DropdownOption = { value: string; label: string }

type Props = {
	value: string
	onChange: (v: string) => void
	placeholder: string
	options: DropdownOption[]
	className?: string
	buttonClassName?: string
}

export default function DropdownField({ value, onChange, placeholder, options, className, buttonClassName }: Props) {
	const [open, setOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement>(null)

	const selected = useMemo(() => options.find(o => o.value === value)?.label ?? '', [options, value])

	useEffect(() => {
		const onDown = (e: MouseEvent) => {
			if (!rootRef.current) return
			if (!rootRef.current.contains(e.target as Node)) setOpen(false)
		}

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false)
		}

		document.addEventListener('mousedown', onDown)
		document.addEventListener('keydown', onKey)
		return () => {
			document.removeEventListener('mousedown', onDown)
			document.removeEventListener('keydown', onKey)
		}
	}, [])

	const pick = (v: string) => {
		onChange(v)
		setOpen(false)
	}

	return (
		<div ref={rootRef} className={cn('relative', className)}>
			<button
				type='button'
				onClick={() => setOpen(v => !v)}
				className={cn(
					'h-12 w-full bg-transparent px-5 pr-12 text-left',
					'border-border border',
					'transition outline-none',
					'focus-visible:border-primary/70 focus-visible:ring-primary/70 cursor-pointer focus-visible:ring-1',
					open && 'border-primary/70',
					buttonClassName
				)}
				aria-haspopup='listbox'
				aria-expanded={open}
			>
				<span className={cn(!value ? 'text-secondary text-base font-light' : 'text-base text-white')}>
					{selected || placeholder}
				</span>

				<span className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/70'>
					{open ? <ChevronUp className='size-5' /> : <ChevronDown className='size-5' />}
				</span>
			</button>

			{open && (
				<div
					role='listbox'
					className={cn('absolute right-0 left-0 z-50 mt-2 overflow-hidden', 'border border-white/20 bg-[#121212]')}
				>
					{options.map(o => {
						const active = o.value === value
						return (
							<button
								key={o.value}
								type='button'
								role='option'
								aria-selected={active}
								onClick={() => pick(o.value)}
								className={cn(
									'block w-full cursor-pointer px-5 py-3 text-left text-base',
									'transition',
									active ? 'bg-primary/15 text-primary' : 'hover:bg-primary/5 text-white'
								)}
							>
								{o.label}
							</button>
						)
					})}
				</div>
			)}
		</div>
	)
}
