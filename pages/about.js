import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import ExternalLink from '@/components/ExternalLink'
import Divider from '@/components/Divider'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function About() {
  const [copied, setCopied] = useState(false)

  const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  const handleClick = () => {
    setCopied(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }, [copied])

  return (
    <Container title="About">
      <div className="tbd-container container">
        <Image
          src="/static/img/issa-shmood.jpeg"
          alt="Issa Shmood"
          layout="responsive"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          width="475"
          height="375"
        />
        <sub className="credits">
          <ExternalLink href="https://www.instagram.com/issapetsitter">
            Credits
          </ExternalLink>
        </sub>
        <Divider />
        <div className="list">
          <ExternalLink href="https://twitter.com/_cyrusgoh">
            twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/lovincyrus">
            github
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/cyrusgoh">
            linkedin
          </ExternalLink>
          <ExternalLink href="https://t.me/lovincyrus">telegram</ExternalLink>
          <ExternalLink href="https://vsco.co/lovincyrus">vsco</ExternalLink>

          <CopyToClipboard
            text="&#104;&#101;&#108;&#108;&#111;&#064;&#099;&#121;&#114;&#117;&#115;&#103;&#111;&#104;&#046;&#099;&#111;&#109;"
            onCopy={handleClick}
          >
            <div className="copy-box">
              <a>email</a>
              <p className={copied ? 'clipboard-active' : 'clipboard'}>
                ☝️ Copied
              </p>
            </div>
          </CopyToClipboard>
        </div>
        <Divider />
      </div>
    </Container>
  )
}
