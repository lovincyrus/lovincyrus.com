import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'

function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Hello, I'm Cyrus</h1>
      <div className="list">
        <ExternalLink href="https://cosmos.network">
          <a>What I'm up to</a>
        </ExternalLink>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/work">
          <a>Work</a>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
