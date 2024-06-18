import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const translate = await getTranslations({ locale, namespace: 'HomePage' })

  return {
    title: translate('meta_title'),
  }
}

export default function HomePage() {
  const translate = useTranslations('HomePage')

  return (
    <div className="position-relative">
      <Image src="/images/header-bg.png" alt="background" fill />

      <div className="position-relative container">
        <div className="row">
          <div className="col">
            <div className="text-white h-100 d-flex flex-column justify-content-center">
              <h1>{translate('title')}</h1>
              <p>{translate('description')}</p>
              <p>{translate('title_dynamic', { username: 'Username' })}</p>
              <p>{translate('message_plural', { count: 1000 })}</p>
              <p>{translate('message_ordinal', { year: 223 })}</p>
              <p>
                {translate('message_enum', {
                  year: 21,
                  gender: 'other',
                })}
              </p>
              <div>
                <Markdown rehypePlugins={[rehypeRaw]}>
                  {translate.rich('message_markup') as string}
                </Markdown>
              </div>
            </div>
          </div>
          <div className="col">
            <Image
              src="/images/banner.png"
              alt="background"
              width={568}
              height={528}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
