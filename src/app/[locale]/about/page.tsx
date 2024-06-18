import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HomePage() {
  const translate = useTranslations('AboutPage')

  return (
    <div className="position-relative">
      <Image src="/images/header-bg.png" alt="background" fill />

      <div className="container position-relative py-5">
        <div className="text-white" style={{ paddingRight: '23%' }}>
          <h1 className="fw-bold">{translate('title')}</h1>
          <p className="fs-5">{translate('description')}</p>
        </div>
      </div>
    </div>
  )
}
