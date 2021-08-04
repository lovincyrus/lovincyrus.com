import Container from '@/components/Container'
import ExternalLink from '@/components/ExternalLink'
import { getDatabase, getPage, getBlocks } from '@/lib/notion'
import { databaseId } from '@/utils/constants'

export default function Now({ posts }) {
  const readingPost = posts.filter(
    (post) => post.properties.Status.select?.name === 'In Progress'
  )

  const completedPosts = posts
    .filter((post) => post.properties.Status.select?.name === 'Completed')
    .sort((a, b) => {
      const aRead = a.last_edited_time
      const bRead = b.last_edited_time
      return bRead > aRead ? 1 : -1
    })
    .slice(0, 2)

  const currentlyReadingPost =
    readingPost[0].properties.Name.title[0].text.content
  const firstReadPost = completedPosts[0].properties.Name.title[0].text.content
  const secondReadPost = completedPosts[1].properties.Name.title[0].text.content

  return (
    <Container title="What I'm up to">
      <div className="tbd-section container now">
        <p>
          <ExternalLink href="https://www.notion.so/adb77db9c8854a8c997af61ddaa5f3f5">
            📚
          </ExternalLink>{' '}
          I&apos;m currently reading{' '}
          <span className="reading">{currentlyReadingPost}</span>, and I&apos;ve
          recently finished reading{' '}
          <span className="reading">{firstReadPost}</span> and{' '}
          <span className="reading">{secondReadPost}</span>.
        </p>
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }
}
