'use client'

import { useParams } from 'next/navigation'
import { ChangeEvent, ReactNode } from 'react'
import { useRouter, usePathname } from '@/navigation'

type Props = {
  children: ReactNode
  defaultValue: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    )
  }

  return (
    <select defaultValue={defaultValue} onChange={onSelectChange}>
      {children}
    </select>
  )
}
