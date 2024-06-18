import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from '@/config'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    defaultTranslationValues: {
      bold: (text = '') => `<strong>${text}</strong>`,
    },
    messages: {
      ...(await import(`./${locale}/home.json`)).default,
      ...(await import(`./${locale}/about.json`)).default,
      ...(await import(`./${locale}/nav.json`)).default,
    },
  }
})
