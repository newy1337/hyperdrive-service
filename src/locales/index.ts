import en from './en'
import pt from './pt'
import ru from './ru'
import uk from './uk'

export const locales = {
	EN: en,
	PT: pt,
	UK: uk,
	RU: ru
}

export type LocaleKey = keyof typeof locales
export type Translations = typeof en

export const LOCALE_KEYS = Object.keys(locales) as LocaleKey[]
