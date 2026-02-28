import { cn } from '@/lib/cn'

export default function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
	return <div className={cn('container mx-auto w-full px-5', className)}>{children}</div>
}
