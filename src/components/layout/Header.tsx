import { Phone } from 'lucide-react'

import { useI18n } from '@/i18n/I18nContext'

import IconWhatsApp from '../icons/WhatsApp'
import Container from './Container'
import LangSwitcher from './LangSwitcher'

export default function Header() {
	const { lang } = useI18n()

	return (
		<header className='border-border sticky top-0 z-50 border-b bg-black'>
			<Container className='flex h-17 items-center justify-between lg:h-18'>
				<img src={`/logo-${lang === 'PT' ? 'pt' : 'en'}.webp`} alt='Hyper Drive Logo' className='max-w-30' />

				<div className='flex items-center gap-3 lg:gap-4'>
					<a href='tel:+351938826858' className='inline-flex items-center justify-center p-0.5'>
						<Phone className='text-secondary size-5' />
					</a>
					<a
						href='https://wa.me/351910707251'
						className='bg-primary flex h-8 items-center gap-2.5 px-2 py-2 text-base font-semibold text-black uppercase duration-300 hover:shadow-[0_4px_5.3px_0px_#F6D4133D] lg:h-9 lg:px-5'
					>
						<IconWhatsApp />
						<span className='max-lg:hidden'>WHATSAPP</span>
					</a>

					<LangSwitcher />
				</div>
			</Container>
		</header>
	)
}
