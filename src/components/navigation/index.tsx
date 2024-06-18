import { useTranslations } from 'next-intl'

import NavigationLink from './NavigationLink'
import LocaleSwitcher from '../locale-switcher'

export default function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <div className="bg-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <nav className="d-flex justify-between align-items-center gap-3 text-white">
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/about">{t('about')}</NavigationLink>
        </nav>

        <LocaleSwitcher />
      </div>
    </div>
  )
}
