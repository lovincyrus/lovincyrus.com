import { useAnalytics } from '@/lib/analytics'
import '@/assets/index.scss'

export default function MyApp({ Component, pageProps }) {
  useAnalytics()
  return <Component {...pageProps} />
}
