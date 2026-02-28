import { cn } from '@/lib/cn'

export default function Section({
	className,
	children,
	id
}: React.PropsWithChildren<{ className?: string; id?: string }>) {
	return (
		<section id={id} className={cn('py-12.5 lg:py-22.5', className)}>
			{children}
		</section>
	)
}
