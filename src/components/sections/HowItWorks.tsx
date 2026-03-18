import { CircleCheck, Cpu, Search, Settings, ShieldCheck } from 'lucide-react'

import { useMemo } from 'react'

import { useI18n } from '@/i18n/I18nContext'

import IconNimbusMoney from '../icons/NimbusMoney'
import Container from '../layout/Container'
import Section from '../layout/Section'

type Step = {
	lines: string[]
	Icon: React.ComponentType<{ className?: string }> | string
}

const stepIcons = [Search, Cpu, IconNimbusMoney, Settings, CircleCheck, ShieldCheck] as const

function StepCard({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
	const n = String(index + 1).padStart(2, '0')

	return (
		<div className='relative flex flex-col items-center'>
			{!isLast && (
				<div className='bg-border pointer-events-none absolute top-13 left-[50%] block h-px w-55 max-lg:hidden' />
			)}

			<div className='border-primary relative mb-5 grid size-26.25 place-items-center border-2 bg-[#121212]'>
				<step.Icon className='text-primary size-12.5' />
				<div className='bg-primary font-unbounded absolute top-0 right-0 grid size-10.5 translate-x-1/2 -translate-y-1/2 place-items-center text-base font-semibold text-black'>
					{n}
				</div>
			</div>

			<p className='font-heading text-center text-[16px] leading-5 uppercase'>
				{step.lines.map((line, i) => (
					<span key={i} className='block'>
						{line}
					</span>
				))}
			</p>
		</div>
	)
}

export default function HowItWorks() {
	const { t } = useI18n()

	const steps: Step[] = useMemo(
		() =>
			t.howItWorks.steps.map((lines, i) => ({
				lines,
				Icon: stepIcons[i]
			})),
		[t]
	)

	return (
		<Section className='bg-black'>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.howItWorks.title.main} <span className='text-primary'>{t.howItWorks.title.accent}</span>
				</h2>

				<div className='grid grid-cols-2 gap-y-10 lg:grid-cols-6 lg:gap-x-10'>
					{steps.map((step, index) => (
						<StepCard key={index} step={step} index={index} isLast={index === steps.length - 1} />
					))}
				</div>
			</Container>
		</Section>
	)
}
