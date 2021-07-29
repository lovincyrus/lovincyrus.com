import Image from 'next/image'
import Container from '@/components/Container'
import ExternalLink from '@/components/ExternalLink'

export default function About() {
  return (
    <Container title="About">
      <div className="container">
        <Image
          src="/static/img/issa-shmood.jpg"
          alt="Issa Shmood"
          layout="responsive"
          width="500"
          height="380"
        />
        {/* <p>
          I'm Cyrus Goh—a developer currently building user-interfaces on web at
          Tendermint / Cosmos. I was raised in Malaysia, and now I work in San
          Francisco. Prior to working at Tendermint / Cosmos, I studied
          Cognitive Science at UC Davis.
        </p>
        <p>
          During my time in college, I interned and worked on the mobile web at
          Fave Malaysia. I built the official website and dApps browser at Trust
          Wallet (acq. Binance).
        </p>
        <p>
          In my downtime, I'm usually getting through my audiobooks and podcasts
          (send me recommendations!). I try to learn in public at GitBook.
          Sometimes I explain why I do what I do in this blog. Occasionally, I
          post photographs on VSCO.
        </p>
        <p>
          I love meeting new people every week. If you'd like to chat, I'd love
          to hear from you! I can be reached at: Twitter, GitHub, LinkedIn,
          AngelList, Keybase, Telegram or
          <ExternalLink href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#099;&#121;&#114;&#117;&#115;&#103;&#111;&#104;&#046;&#099;&#111;&#109;">
            hello@cyrusgoh.com
          </ExternalLink>
        </p> */}
      </div>
    </Container>
  )
}
