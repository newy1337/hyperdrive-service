import en from './en'
import pt from './pt'
import ru from './ru'
import ua from './ua'

export const locales = {
	EN: en,
	PT: pt,
	UA: ua,
	RU: ru
}

export type LocaleKey = keyof typeof locales
export type Translations = typeof en

export const LOCALE_KEYS = Object.keys(locales) as LocaleKey[]

export const pathToLocale: Record<string, LocaleKey> = {
	en: 'EN',
	pt: 'PT',
	ru: 'RU',
	ua: 'UA'
}

export const localeToPath: Record<LocaleKey, string> = {
	EN: 'en',
	PT: 'pt',
	RU: 'ru',
	UA: 'ua'
}
