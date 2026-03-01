import { useI18n } from '@/i18n/I18nContext'

import Container from './Container'

export default function Footer() {
	const { t } = useI18n()

	return (
		<footer className='bg-background py-22.5 lg:pb-17.5'>
			<Container>
				<div className='flex flex-col items-center gap-6 text-center'>
					<img src='/logo.webp' alt='Hyper Drive Logo' className='max-w-30' />
					<p className='text-secondary text-base leading-3'>
						{t.footer.tagline} {new Date().getFullYear()}
					</p>
				</div>
			</Container>
		</footer>
	)
}
