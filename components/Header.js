import { useRouter } from 'next/router'
import Link from 'next/link'
import CircleIcon from '@/components/CircleIcon'

export default function Header() {
  const router = useRouter()

  return (
    <nav>
      <div className="tbd-section container">
        {router.asPath === '/' ? (
          <h1>Hello, I&apos;m Cyrus</h1>
        ) : (
          <CircleIcon />
        )}

        <div
          className="list"
          style={{ marginTop: `${router.asPath === '/' ? '6rem' : '4rem'}` }}
        >
          <Link href="/now" scroll={false}>
            What I&apos;m up to
          </Link>
          <Link href="/about" scroll={false}>
            <a>About</a>
          </Link>
          <Link href="/projects" scroll={false}>
            <a>Projects</a>
          </Link>
          <Link href="/work" scroll={false}>
            <a>Work</a>
          </Link>
          <Link href="https://blog.lovincyrus.com" scroll={false}>
            <a>Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
