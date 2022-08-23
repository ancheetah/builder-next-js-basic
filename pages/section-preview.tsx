import type { InferGetStaticPropsType } from 'next'
import { BuilderComponent, builder } from '@builder.io/react'

// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'

export async function getStaticProps() {
  const content = (await builder.get('sample-section').toPromise()) || null

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

export default function SampleSection({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    const sectionStyles = {
        'display': 'flex',
        'height': '150px',
        'backgroundColor': '#000000',
        'color': '#AC7EF4',
        'fontFamily': 'sans-serif',
        'fontWeight': 'bold',
        'justifyContent': 'center',
        'alignItems': 'center',
    }

  return (
    <>
        <div style={sectionStyles}>[YOUR CODE CONTROLS THIS AREA]</div>
        <BuilderComponent model="sample-section" content={content} />
        <div style={sectionStyles}>[YOUR CODE CONTROLS THIS AREA]</div>
    </>
  )
}
