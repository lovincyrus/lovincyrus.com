import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Container({ children, title = null }) {
  const router = useRouter()

  const meta = {
    title: 'Cyrus Goh',
    description: 'Cyrus Goh is a developer and thinker based in San Francisco.',
    image: 'https://www.lovincyrus.com/og-image.png',
    type: 'website',
  }

  return (
    <>
      <Head>
        {title ? (
          <title>
            {title} — {meta.title}
          </title>
        ) : (
          <title>{meta.title}</title>
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.lovincyrus.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_cyrusgoh" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main>{children}</main>
    </>
  )
}
