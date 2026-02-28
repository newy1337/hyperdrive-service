import { createRoot } from 'react-dom/client'

import { StrictMode } from 'react'

import { I18nProvider } from '@/i18n/I18nProvider.tsx'
import { ModalProvider } from '@/providers/ModalProvider.tsx'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nProvider>
			<ModalProvider>
				<App />
			</ModalProvider>
		</I18nProvider>
	</StrictMode>
)
