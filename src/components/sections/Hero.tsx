import { Phone } from 'lucide-react'

import Container from '@/components/layout/Container'

import { useI18n } from '@/i18n/I18nContext'
import { useModal } from '@/providers/ModalContext'

import IconWhatsApp from '../icons/WhatsApp'

export default function Hero() {
	const { t } = useI18n()
	const { openBooking } = useModal()

	return (
		<section className='border-primary relative flex min-h-[max(500px,calc(100dvh-72px))] items-center overflow-hidden border-b-[6px]'>
			<div className='absolute inset-0 bg-[url("/hero-banner.webp")] bg-cover bg-center' />
			<div className='absolute inset-y-0 left-0 w-[55%] bg-linear-to-r from-black to-transparent' />

			<Container className='relative'>
				<div className='max-w-167'>
					<h1 className='font-heading text-[64px] leading-16 uppercase lg:text-[110px] lg:leading-27'>
						<span className='text-primary block'>{t.hero.titleTop}</span>
						<span className='-mt-1 block'>{t.hero.titleBottom}</span>
					</h1>

					<p className='font-heading mb-4 text-[20px] leading-5 uppercase lg:text-[24px] lg:leading-6'>
						{t.hero.subtitle}
					</p>
					<p className='text-secondary mb-4 leading-4 font-medium max-lg:text-[16px] lg:leading-4'>
						{t.hero.description}
					</p>

					<div className='mb-5 flex flex-wrap items-center gap-y-2 leading-4 font-semibold max-lg:text-base lg:gap-y-3'>
						{t.hero.services.map((service, index) => (
							<span
								key={index}
								className={`text-primary ${index < t.hero.services.length - 1 ? 'after:text-secondary after:mx-3 after:content-["•"]' : ''}`}
							>
								{service}
							</span>
						))}
					</div>

					<div className='from-primary mb-6 h-px max-w-full bg-linear-90 to-transparent' />

					<div className='font-heading text-primary text-[20px] leading-6 uppercase lg:text-[32px] lg:leading-6'>
						{t.hero.priceFrom}
					</div>

					<div className='mt-6 grid gap-5 font-bold lg:grid-cols-2'>
						<button
							onClick={openBooking}
							type='button'
							className='bg-primary flex min-h-14.5 cursor-pointer items-center justify-center gap-2.5 p-3 text-black uppercase duration-300 hover:shadow-[0_4px_20.7px_0px_#F6D413F7]'
						>
							<Phone className='size-5' />
							{t.hero.book}
						</button>
						<a
							href='#'
							className='border-primary text-primary hover:bg-primary flex min-h-14.5 items-center justify-center gap-2.5 border p-3 uppercase duration-300 hover:text-black hover:shadow-[0_4px_20.7px_0px_#F6D413F7]'
						>
							<IconWhatsApp className='size-5' />
							{t.hero.whatsapp}
						</a>
					</div>
				</div>
			</Container>
		</section>
	)
}
