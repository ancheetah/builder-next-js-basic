import type { InferGetStaticPropsType } from 'next'
import { BuilderComponent, builder } from '@builder.io/react'

// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'

export async function getStaticProps() {
  const content = (await builder.get('symbol').toPromise()) || null

  return {
    props: {
      content,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export default function Symbol({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BuilderComponent model="symbol" content={content} />
}
