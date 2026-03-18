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
