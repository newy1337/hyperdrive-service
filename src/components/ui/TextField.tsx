import { cn } from '@/lib/cn'

type TextFieldProps = {
	placeholder: string
	value: string
	onChange: (v: string) => void
	type?: string
}

export default function TextField({ placeholder, value, onChange, type = 'text' }: TextFieldProps) {
	return (
		<input
			type={type}
			value={value}
			onChange={e => onChange(e.target.value)}
			placeholder={placeholder}
			className={cn(
				'h-12 w-full bg-transparent px-5 py-3 text-base',
				'placeholder:text-secondary border-border border text-white placeholder:font-light',
				'focus:border-primary/70 focus:ring-primary/70 transition outline-none focus:ring-1'
			)}
		/>
	)
}
