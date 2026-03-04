import React, { useEffect, useMemo, useState } from 'react'

import { type LocaleKey, locales } from '@/locales'

import { I18nContext } from './I18nContext'

const STORAGE_KEY = 'hyper_lang'

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLangState] = useState<LocaleKey>(() => {
		return (localStorage.getItem(STORAGE_KEY) as LocaleKey) || 'EN'
	})

	const setLang = (newLang: LocaleKey) => {
		setLangState(newLang)
		localStorage.setItem(STORAGE_KEY, newLang)
	}

	useEffect(() => {
		document.documentElement.lang = lang.toLocaleLowerCase()
	}, [lang])

	const value = useMemo(
		() => ({
			lang,
			setLang,
			t: locales[lang]
		}),
		[lang]
	)

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
