import Img1 from '@/assets/images/why-choose/1.svg'
import Img2 from '@/assets/images/why-choose/2.svg'
import Img3 from '@/assets/images/why-choose/3.svg'
import Img4 from '@/assets/images/why-choose/4.svg'
import Img5 from '@/assets/images/why-choose/5.svg'
import { useI18n } from '@/i18n/I18nContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

export default function WhyChoose() {
	const { t } = useI18n()

	const items = [
		{ icon: Img1, title: t.whyChoose.items[0].title, text: t.whyChoose.items[0].text },
		{ icon: Img2, title: t.whyChoose.items[1].title, text: t.whyChoose.items[1].text },
		{ icon: Img3, title: t.whyChoose.items[2].title, text: t.whyChoose.items[2].text },
		{ icon: Img4, title: t.whyChoose.items[3].title, text: t.whyChoose.items[3].text },
		{ icon: Img5, title: t.whyChoose.items[4].title, text: t.whyChoose.items[4].text }
	]

	return (
		<Section>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.whyChoose.title} <span className='text-primary'>Hyper Drive</span>
				</h2>

				<div className='grid grid-cols-2 gap-3 xl:grid-cols-5'>
					{items.map(({ icon: Icon, title, text }) => (
						<div key={title} className='border-border/30 border bg-[#121212] px-3 py-7 last:max-xl:col-span-2 lg:p-7'>
							<div className='flex h-full flex-col items-center'>
								<div className='mb-7 flex size-19 items-center justify-center bg-[#292512]'>
									<img src={Icon} alt={title} />
								</div>
								<h3 className='font-heading mb-2 text-center text-base font-bold uppercase'>{title}</h3>
								<p className='text-secondary text-center text-base leading-4 font-light'>{text}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}
