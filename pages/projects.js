import Container from '@/components/Container'
import ExternalLink from '@/components/ExternalLink'
import { projects as data } from '@/data/projects'

export default function Projects() {
  return (
    <Container title="Projects">
      <div className="tbd-section container">
        <div className="cols-3 projects">
          {data.map((item, idx) => (
            <div key={idx}>
              <h2>
                <ExternalLink href={item.url}>{item.title}</ExternalLink>
              </h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
