import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <Header />
      <main>{children}</main>
      {router.asPath === '/' && <Footer />}
    </>
  )
}
