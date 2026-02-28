import Audi from '@/assets/images/brands/audi.webp'
import Bmw from '@/assets/images/brands/bmw.webp'
import Byd from '@/assets/images/brands/byd.webp'
import Cupra from '@/assets/images/brands/cupra.webp'
import Ford from '@/assets/images/brands/ford.webp'
import Honda from '@/assets/images/brands/honda.webp'
import Lexus from '@/assets/images/brands/lexus.webp'
import Mercedes from '@/assets/images/brands/mercedes.webp'
import Peugeot from '@/assets/images/brands/peugeot.webp'
import Porsche from '@/assets/images/brands/porsche.webp'
import Renault from '@/assets/images/brands/renault.webp'
import Seat from '@/assets/images/brands/seat.webp'
import Toyota from '@/assets/images/brands/toyota.webp'
import Vw from '@/assets/images/brands/vw.webp'

import Section from '../layout/Section'

const logos = [
	{ src: Audi, alt: 'Audi' },
	{ src: Vw, alt: 'Volkswagen' },
	{ src: Porsche, alt: 'Porsche' },
	{ src: Seat, alt: 'Seat' },
	{ src: Cupra, alt: 'Cupra' },
	{ src: Bmw, alt: 'BMW' },
	{ src: Mercedes, alt: 'Mercedes' },
	{ src: Renault, alt: 'Renault' },
	{ src: Peugeot, alt: 'Peugeot' },
	{ src: Honda, alt: 'Honda' },
	{ src: Toyota, alt: 'Toyota' },
	{ src: Ford, alt: 'Ford' },
	{ src: Byd, alt: 'BYD' },
	{ src: Lexus, alt: 'Lexus' }
]

export default function BrandsMarquee() {
	return (
		<Section className='pt-0'>
			<div className='relative overflow-hidden'>
				<div className='from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r to-transparent' />
				<div className='from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l to-transparent' />

				<div className='marquee-track'>
					<div className='marquee-row'>
						{logos.map(l => (
							<img key={l.alt} src={l.src} alt={l.alt} className='marquee-logo' />
						))}
					</div>

					<div className='marquee-row' aria-hidden='true'>
						{logos.map(l => (
							<img key={l.alt + '-dup'} src={l.src} alt='' className='marquee-logo' />
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}
