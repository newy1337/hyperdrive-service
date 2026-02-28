import { ChevronDown, ChevronUp } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/cn'

import { useI18n } from '@/i18n/I18nContext'
import { LOCALE_KEYS, type LocaleKey } from '@/locales'

export default function LangSwitcher({ className }: { className?: string }) {
	const { lang, setLang } = useI18n()
	const [open, setOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const onDown = (e: MouseEvent) => {
			if (!rootRef.current) return
			if (!rootRef.current.contains(e.target as Node)) setOpen(false)
		}
		document.addEventListener('mousedown', onDown)
		return () => document.removeEventListener('mousedown', onDown)
	}, [])

	const pick = (l: LocaleKey) => {
		setLang(l)
		setOpen(false)
	}

	return (
		<div ref={rootRef} className={cn('relative', className)}>
			<button
				type='button'
				onClick={() => setOpen(v => !v)}
				className={cn(
					'border-primary flex h-8 cursor-pointer items-center gap-2 border px-2 text-base font-bold uppercase lg:h-9 lg:px-3',
					'text-primary hover:bg-primary/10 duration-300'
				)}
				aria-haspopup='listbox'
				aria-expanded={open}
			>
				{open ? <ChevronUp /> : <ChevronDown />}
				{lang}
			</button>

			{open && (
				<div
					role='listbox'
					className={cn('bg-primary absolute left-0 mt-2 w-full text-black', 'shadow-[0_4px_20.7px_0px_#F6D4137D]')}
				>
					{LOCALE_KEYS.map(l => (
						<button
							key={l}
							role='option'
							aria-selected={l === lang}
							onClick={() => pick(l)}
							className={cn(
								'block w-full cursor-pointer items-center px-4 py-2 text-end text-base font-bold uppercase',
								'duration-300 hover:bg-black/10',
								l === lang && 'bg-black/10'
							)}
						>
							{l}
						</button>
					))}
				</div>
			)}
		</div>
	)
}
