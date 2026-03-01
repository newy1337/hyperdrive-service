import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { createRoot } from 'react-dom/client'

import { StrictMode } from 'react'

import { I18nProvider } from '@/i18n/I18nProvider.tsx'
import { ModalProvider } from '@/providers/ModalProvider.tsx'

import App from './App.tsx'
import './index.css'

const lenis = new Lenis({
	duration: 1.1,
	easing: (t: number) => 1 - Math.pow(1 - t, 3),
	smoothWheel: true
})

let rafId = 0
function raf(time: number) {
	lenis.raf(time)
	rafId = requestAnimationFrame(raf)
}
rafId = requestAnimationFrame(raf)

if (import.meta.hot) {
	import.meta.hot.dispose(() => {
		cancelAnimationFrame(rafId)
		lenis.destroy()
	})
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).__lenis = lenis

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nProvider>
			<ModalProvider>
				<App />
			</ModalProvider>
		</I18nProvider>
	</StrictMode>
)
