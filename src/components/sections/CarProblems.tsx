import Img1 from '@/assets/images/problems/1.webp'
import Img2 from '@/assets/images/problems/2.webp'
import Img3 from '@/assets/images/problems/3.webp'
import Img4 from '@/assets/images/problems/4.webp'
import Img5 from '@/assets/images/problems/5.webp'
import Img6 from '@/assets/images/problems/6.webp'
import { useI18n } from '@/i18n/I18nContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

type ProblemItem = {
	image: string
	title: string
}

export default function CarProblems() {
	const { t } = useI18n()

	const items: ProblemItem[] = [
		{ image: Img1, title: t.carProblems.items[0] },
		{ image: Img2, title: t.carProblems.items[1] },
		{ image: Img3, title: t.carProblems.items[2] },
		{ image: Img4, title: t.carProblems.items[3] },
		{ image: Img5, title: t.carProblems.items[4] },
		{ image: Img6, title: t.carProblems.items[5] }
	]

	return (
		<Section>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.carProblems.title.main} <span className='text-primary'>{t.carProblems.title.accent}</span>
				</h2>

				<div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
					{items.map((item, i) => (
						<a key={i} href='#' className='group border-border relative block overflow-hidden border bg-black'>
							<img
								src={item.image}
								alt={item.title}
								className='h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]'
							/>
							<div className='absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/75 to-transparent' />
							<div className='absolute inset-x-0 bottom-0 px-2 pt-2 pb-5'>
								<p className='font-heading text-center text-base leading-4 uppercase'>{item.title}</p>
							</div>
						</a>
					))}
				</div>
			</Container>
		</Section>
	)
}
