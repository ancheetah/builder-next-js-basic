import type { AppProps } from 'next/app'

import { builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import '../components/Heading.tsx'

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
