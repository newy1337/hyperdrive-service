import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useRef } from 'react'

import Slide1 from '@/assets/images/services-sliders/1.webp'
import Slide2 from '@/assets/images/services-sliders/2.webp'
import Slide3 from '@/assets/images/services-sliders/3.webp'
import { useI18n } from '@/i18n/I18nContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

type Slide = {
	image: string
	title: string
	subtitle: string
}

export default function OurServiceSlider() {
	const { t } = useI18n()
	const swiperRef = useRef<SwiperType | null>(null)

	const slides: Slide[] = [
		{
			image: Slide1,
			title: t.ourService.slides.workshop.title,
			subtitle: t.ourService.slides.workshop.subtitle
		},
		{
			image: Slide2,
			title: t.ourService.slides.diagnostics.title,
			subtitle: t.ourService.slides.diagnostics.subtitle
		},
		{
			image: Slide3,
			title: t.ourService.slides.repair.title,
			subtitle: t.ourService.slides.repair.subtitle
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
								<div className='relative'>
									<img src={s.image} alt={s.title} className='h-131 w-full object-cover object-center' loading='lazy' />
									<div className='absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/70 to-transparent' />
									<div className='absolute bottom-12 left-8'>
										<p className='font-heading text-primary text-xl leading-4 uppercase'>{s.title}</p>
										<p className='text-secondary mt-1 text-base'>{s.subtitle}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className='our-service-pagination absolute bottom-5! left-8! z-10 flex items-center gap-2' />
				</div>
			</Container>
		</Section>
	)
}
