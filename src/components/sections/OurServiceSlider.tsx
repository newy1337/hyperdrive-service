import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useRef } from 'react'

import { renderTokens } from '@/lib/renderTokens'

import Slide1 from '@/assets/images/services-sliders/1.webp'
import Slide2 from '@/assets/images/services-sliders/2.png'
import { useI18n } from '@/i18n/I18nContext'
import { useModal } from '@/providers/ModalContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

type Slide = {
	image: string
	title: string
	subtitle: string
	book: string
}

export default function OurServiceSlider() {
	const { t } = useI18n()
	const { openBooking } = useModal()
	const swiperRef = useRef<SwiperType | null>(null)

	const slides: Slide[] = [
		{
			image: Slide1,
			title: t.ourService.slides.workshop.title,
			subtitle: t.ourService.slides.workshop.subtitle,
			book: t.ourService.slides.workshop.book
		},
		{
			image: Slide2,
			title: t.ourService.slides.diagnostics.title,
			subtitle: t.ourService.slides.diagnostics.subtitle,
			book: t.ourService.slides.diagnostics.book
		}
	]

	return (
		<Section>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.ourService.title.main} <span className='text-primary'>{t.ourService.title.accent}</span>
				</h2>

				<div className='relative overflow-hidden bg-black'>
					<Swiper
						modules={[Autoplay, EffectFade, Pagination]}
						onSwiper={s => (swiperRef.current = s)}
						slidesPerView={1}
						loop
						effect='fade'
						fadeEffect={{ crossFade: true }}
						speed={700}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
							pauseOnMouseEnter: true
						}}
						pagination={{
							clickable: true,
							el: '.our-service-pagination'
						}}
						className='select-none'
					>
						{slides.map(s => (
							<SwiperSlide key={s.image}>
								<div className='relative aspect-16/10 lg:aspect-16/8'>
									<img src={s.image} alt={s.title} className='h-full w-full object-cover object-right' />
									<div className='absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/70 to-transparent' />
									<div className='absolute inset-x-3 bottom-3 lg:inset-x-8 lg:bottom-12'>
										<p className='font-heading text-primary text-base uppercase lg:text-xl lg:leading-4'>
											{renderTokens(s.title)}
										</p>
										<p className='text-secondary text-sm lg:mt-1 lg:text-base'>{s.subtitle}</p>
										<button
											onClick={openBooking}
											type='button'
											className='bg-primary mt-3 flex min-h-14.5 w-full max-w-93 cursor-pointer items-center justify-center gap-2.5 p-3 font-bold text-black uppercase duration-300 hover:shadow-[0_4px_20.7px_0px_#F6D413F7] lg:mt-5'
										>
											{s.book}
										</button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className='our-service-pagination absolute bottom-5! left-8! z-10 flex items-center gap-2 max-lg:hidden' />
				</div>
			</Container>
		</Section>
	)
}
