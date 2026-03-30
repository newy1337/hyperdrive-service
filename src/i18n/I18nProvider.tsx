import React, { useEffect, useMemo, useState } from 'react'

import { type LocaleKey, locales, pathToLocale } from '@/locales'

import { I18nContext } from './I18nContext'

const STORAGE_KEY = 'hyper_lang'
const DEFAULT_LANG: LocaleKey = 'EN'

function getLangFromPath(pathname: string): LocaleKey | null {
	const segment = pathname.split('/')[1]?.toLowerCase()
	if (!segment) return null
	return pathToLocale[segment] ?? null
}

function removeLangFromPath(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean)

	if (segments.length === 0) return '/'

	const firstSegment = segments[0]?.toLowerCase()

	if (firstSegment && pathToLocale[firstSegment]) {
		const nextPath = '/' + segments.slice(1).join('/')
		return nextPath === '/' ? '/' : nextPath
	}

	return pathname || '/'
}

function getInitialLang(): LocaleKey {
	if (typeof window === 'undefined') return DEFAULT_LANG

	const langFromPath = getLangFromPath(window.location.pathname)
	if (langFromPath) return langFromPath

	const stored = localStorage.getItem(STORAGE_KEY)
	if (stored && stored in locales) return stored as LocaleKey

	return DEFAULT_LANG
}

function removeLangFromUrl() {
	if (typeof window === 'undefined') return

	const currentPath = window.location.pathname
	const cleanPath = removeLangFromPath(currentPath)

	if (cleanPath !== currentPath) {
		window.history.replaceState({}, '', `${cleanPath}${window.location.search}${window.location.hash}`)
	}
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLangState] = useState<LocaleKey>(getInitialLang)

	const setLang = (newLang: LocaleKey) => {
		setLangState(newLang)
	}

	useEffect(() => {
		removeLangFromUrl()
	}, [])

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, lang)
		document.documentElement.lang = lang.toLowerCase()
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
