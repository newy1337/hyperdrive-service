import { useI18n } from '@/i18n/I18nContext'

import Container from '../layout/Container'
import Section from '../layout/Section'

type TeamMember = {
	name: string
	role: string
	image?: string
}

function AvatarCircle({ image, alt }: { image?: string; alt: string }) {
	if (!image) {
		return <div className='size-38 rounded-full bg-[#D9D9D9] lg:size-62' aria-label={alt} />
	}

	return <img src={image} alt={alt} className='size-38 rounded-full object-cover lg:size-62' />
}

export default function OurTeams() {
	const { t } = useI18n()

	const members: TeamMember[] = [
		{ name: 'JAMES WHITMORE', role: t.ourTeams.members.james.role },
		{ name: 'OLIVER BENNETT', role: t.ourTeams.members.oliver.role },
		{ name: 'MIGUEL FERREIRA', role: t.ourTeams.members.miguel.role }
	]

	return (
		<Section>
			<Container>
				<h2 className='font-heading mb-10 text-center text-[32px] uppercase max-lg:leading-8 lg:text-[48px]'>
					{t.ourTeams.title.main} <span className='text-primary'>{t.ourTeams.title.accent}</span>
				</h2>

				<div className='grid gap-12 lg:grid-cols-3'>
					{members.map(m => (
						<div key={m.name} className='flex flex-col items-center text-center'>
							<AvatarCircle image={m.image} alt={m.name} />
							<p className='font-heading mt-7 text-[20px] leading-4 uppercase'>{m.name}</p>
							<p className='text-secondary mt-3 text-base'>{m.role}</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}
