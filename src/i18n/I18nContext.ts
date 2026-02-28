import { createContext, useContext } from 'react'

import type { LocaleKey, Translations } from '@/locales'

export type I18nContextType = {
	lang: LocaleKey
	setLang: (lang: LocaleKey) => void
	t: Translations
}

export const I18nContext = createContext<I18nContextType | null>(null)

export function useI18n() {
	const ctx = useContext(I18nContext)
	if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
	return ctx
}
