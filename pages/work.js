import Container from '@/components/Container'
import { work as data } from '@/data/work'

export default function Work() {
  const sorted = data.sort(function (a, b) {
    return b.year - a.year
  })

  return (
    <Container title="Work">
      <div className="tbd-section container">
        <div className="cols-2 work">
          {sorted.map((item, idx) => (
            <div key={idx}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
