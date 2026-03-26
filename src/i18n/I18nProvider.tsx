import React, { useEffect, useMemo, useState } from 'react'

import { type LocaleKey, localeToPath, locales, pathToLocale } from '@/locales'

import { I18nContext } from './I18nContext'

const STORAGE_KEY = 'hyper_lang'
const DEFAULT_LANG: LocaleKey = 'EN'

function getLangFromPath(pathname: string): LocaleKey | null {
	const segment = pathname.split('/')[1]?.toLowerCase()
	if (!segment) return null
	return pathToLocale[segment] ?? null
}

function getInitialLang(): LocaleKey {
	if (typeof window === 'undefined') return DEFAULT_LANG

	const langFromPath = getLangFromPath(window.location.pathname)
	if (langFromPath) return langFromPath

	const stored = localStorage.getItem(STORAGE_KEY)
	if (stored && stored in locales) return stored as LocaleKey

	return DEFAULT_LANG
}

function setUrlLang(lang: LocaleKey) {
	if (typeof window === 'undefined') return

	const targetPath = `/${localeToPath[lang]}`
	const currentPath = window.location.pathname

	if (currentPath !== targetPath) {
		window.history.replaceState({}, '', `${targetPath}${window.location.search}${window.location.hash}`)
	}
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLangState] = useState<LocaleKey>(getInitialLang)

	const setLang = (newLang: LocaleKey) => {
		setLangState(newLang)
	}

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, lang)
		document.documentElement.lang = localeToPath[lang]
		setUrlLang(lang)
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
