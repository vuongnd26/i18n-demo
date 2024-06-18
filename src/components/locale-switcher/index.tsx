import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwithcherSelect'
import { locales } from '@/config'

export default function LocaleSwitcher() {
  const translate = useTranslations('Navigation')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {translate('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
