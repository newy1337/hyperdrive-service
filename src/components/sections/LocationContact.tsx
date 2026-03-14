import { CarFront, Clock, MapPin, Phone } from 'lucide-react'

import { useI18n } from '@/i18n/I18nContext'

import IconWhatsApp from '../icons/WhatsApp'
import Container from '../layout/Container'
import Section from '../layout/Section'

type InfoItem = {
	icon: React.ComponentType<{ className?: string }>
	title: string
	text: string
}

export default function LocationContact() {
	const { t } = useI18n()

	const items: InfoItem[] = [
		{ icon: MapPin, title: t.locationContact.address.label, text: t.locationContact.address.value },
		{ icon: CarFront, title: t.locationContact.parking.label, text: t.locationContact.parking.value },
		{ icon: Clock, title: t.locationContact.workingHours.label, text: t.locationContact.workingHours.value },
		{ icon: Phone, title: t.locationContact.phone.label, text: t.locationContact.phone.value }
	]

	return (
		<Section className='bg-black'>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.locationContact.title.main} <span className='text-primary'>{t.locationContact.title.accent}</span>
				</h2>


				<div className='grid gap-8 lg:grid-cols-2 lg:gap-9'>
					<div className='max-lg:h-92'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.267587341634!2d-9.295684611513984!3d38.757566198924756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf006425f835%3A0x4c43564e7528372b!2sHyper%20Drive%20Sport%20Car!5e0!3m2!1sru!2snl!4v1773144195660!5m2!1sru!2snl'
							width='593'
							height='367'
							className='h-full w-full'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>

					<div className='flex flex-col gap-5'>
						{items.map(item => (
							<div key={item.title} className='border-border flex items-center gap-6 border bg-[#121212] px-7 py-5'>
								<div className='grid size-16 place-items-center bg-[#292512]'>
									<item.icon className='text-primary size-7.5' />
								</div>

								<div className='flex-1'>
									<p className='font-heading text-base leading-3 uppercase'>{item.title}</p>
									<p className='text-secondary mt-2 text-base leading-4'>{item.text}</p>
								</div>
							</div>
						))}

						<a
							href='https://wa.me/351910707251'
							className='border-primary text-primary hover:bg-primary flex min-h-19 items-center justify-center gap-2.5 border p-3 font-bold duration-300 hover:text-black hover:shadow-[0_4px_20.7px_0px_#F6D413F7]'
						>
							<IconWhatsApp className='size-5' />
							{t.locationContact.whatsapp}
						</a>
					</div>
				</div>
			</Container>
		</Section>
	)
}
