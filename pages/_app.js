import { useAnalytics } from '@/lib/analytics'
import '@/assets/index.scss'
import Layout from '@/components/Layout'

export default function MyApp({ Component, pageProps }) {
  useAnalytics()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
