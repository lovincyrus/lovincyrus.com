import { useAnalytics } from '@/lib/analytics'
import '@/assets/globals.scss'
import '@/assets/main.scss'

export default function MyApp({ Component, pageProps }) {
  useAnalytics()
  return <Component {...pageProps} />
}
