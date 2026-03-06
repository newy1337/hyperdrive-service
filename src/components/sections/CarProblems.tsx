import Img1 from '@/assets/images/problems/1.webp'
import Img2 from '@/assets/images/problems/2.webp'
import Img3 from '@/assets/images/problems/3.webp'
import Img4 from '@/assets/images/problems/4.webp'
import Img5 from '@/assets/images/problems/5.webp'
import Img6 from '@/assets/images/problems/6.webp'
import Img7 from '@/assets/images/problems/7.webp'
import Img8 from '@/assets/images/problems/8.webp'
import Img9 from '@/assets/images/problems/9.webp'
import { useI18n } from '@/i18n/I18nContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

type ProblemKey =
	| 'warningLights'
	| 'strangeNoises'
	| 'vibration'
	| 'brake'
	| 'maintenance'
	| 'preInspection'
	| 'ecuTuning'
	| 'ecoRemoval'
	| 'coding'

type ProblemItem = { image: string; key: ProblemKey }

export default function CarProblems() {
	const { t } = useI18n()

	const items: ProblemItem[] = [
		{ image: Img1, key: 'warningLights' },
		{ image: Img2, key: 'strangeNoises' },
		{ image: Img3, key: 'vibration' },
		{ image: Img4, key: 'brake' },
		{ image: Img5, key: 'maintenance' },
		{ image: Img6, key: 'preInspection' },
		{ image: Img7, key: 'ecuTuning' },
		{ image: Img8, key: 'ecoRemoval' },
		{ image: Img9, key: 'coding' }
	]

	return (
		<Section>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.carProblems.title.main} <span className='text-primary'>{t.carProblems.title.accent}</span>
				</h2>

				<div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
					{items.map((item, i) => (
						<div key={i} className='border-border relative block overflow-hidden border bg-black'>
							<img src={item.image} alt={t.carProblems.items[item.key]} className='aspect-16/8 w-full object-cover' />
							<div className='absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/75 to-transparent' />
							<div className='absolute inset-x-0 bottom-0 px-2 pt-2 pb-5'>
								<p className='font-heading text-center text-base leading-4 uppercase'>
									{t.carProblems.items[item.key]}
								</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}
