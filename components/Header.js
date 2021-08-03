import { useRouter } from 'next/router'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import CircleIcon from '@/components/CircleIcon'

export default function Header() {
  const router = useRouter()

  return (
    <nav>
      <div className="tbd-section container sticky-nav">
        {router.asPath === '/' ? (
          <h1 className="title">Hello, I'm Cyrus</h1>
        ) : (
          <CircleIcon />
        )}

        <div
          className="list"
          style={{ marginTop: `${router.asPath === '/' ? '6rem' : '4rem'}` }}
        >
          <ExternalLink href="https://coolection.co">
            What I'm up to
          </ExternalLink>
          <Link href="/about" scroll={false}>
            <a>About</a>
          </Link>
          <Link href="/projects" scroll={false}>
            <a>Projects</a>
          </Link>
          <Link href="/work" scroll={false}>
            <a>Work</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
