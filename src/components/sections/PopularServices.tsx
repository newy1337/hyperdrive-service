import { renderTokens } from '@/lib/renderTokens'

import BrakeIcon from '@/assets/images/services/brake.svg'
import CarIcon from '@/assets/images/services/car.svg'
import GearIcon from '@/assets/images/services/gear.svg'
import OilIcon from '@/assets/images/services/oil.svg'
import PcIcon from '@/assets/images/services/pc.svg'
import { useI18n } from '@/i18n/I18nContext'
import { useModal } from '@/providers/ModalContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

type ServiceItem = {
	icon: string
	price: string
	title: string
	bullets: string[]
}

export default function PopularServices() {
	const { t } = useI18n()
	const { openBooking } = useModal()

	const items: ServiceItem[] = [
		{
			icon: PcIcon,
			price: t.services.list.diagnostics.price,
			title: t.services.list.diagnostics.title,
			bullets: t.services.list.diagnostics.bullets
		},
		{
			icon: OilIcon,
			price: t.services.list.maintenance.price,
			title: t.services.list.maintenance.title,
			bullets: t.services.list.maintenance.bullets
		},
		{
			icon: BrakeIcon,
			price: t.services.list.brake.price,
			title: t.services.list.brake.title,
			bullets: t.services.list.brake.bullets
		},
		{
			icon: CarIcon,
			price: t.services.list.suspension.price,
			title: t.services.list.suspension.title,
			bullets: t.services.list.suspension.bullets
		},
		{
			icon: GearIcon,
			price: t.services.list.custom.price,
			title: t.services.list.custom.title,
			bullets: t.services.list.custom.bullets
		}
	]

	return (
		<Section className='bg-black'>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.services.title.main} <span className='text-primary'>{t.services.title.accent}</span>
				</h2>

				<div className='mb-14 grid gap-6 lg:grid-cols-3'>
					{items.map((item, i) => (
						<div key={i} className='border-border relative border-t bg-[#121212] px-7 pt-8 pb-10'>
							<div className='mb-7.5 flex items-center justify-between gap-4'>
								<div className='flex size-13.5 items-center justify-center bg-[#292512]'>
									<img src={item.icon} alt={item.title} className='size-7.5' />
								</div>
								<p className='font-heading text-primary text-[28px] leading-5 uppercase'>{renderTokens(item.price)}</p>
							</div>

							<div className='font-heading mb-4.5 leading-5 uppercase'>{item.title}</div>

							<ul className='text-secondary space-y-4 text-base leading-4 font-medium'>
								{item.bullets.map(b => (
									<li key={b} className='flex items-center gap-2.5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='8'
											height='8'
											fill='currentColor'
											className='text-primary rotate-90'
											viewBox='0 0 16 16'
										>
											<path
												fillRule='evenodd'
												d='M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z'
											/>
										</svg>
										<span>{b}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className='flex flex-col items-center space-y-4'>
					<button
						onClick={openBooking}
						type='button'
						className='bg-primary flex min-h-14.5 min-w-93 cursor-pointer items-center justify-center gap-2.5 p-3 font-bold text-black uppercase duration-300 hover:shadow-[0_4px_20.7px_0px_#F6D413F7]'
					>
						{t.services.cta.button}
					</button>

					<p className='mt-3 text-base leading-3 font-medium text-white'>{t.services.cta.note}</p>
				</div>
			</Container>
		</Section>
	)
}
