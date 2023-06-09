import { MDXLayoutRenderer } from '~/components/MDXComponents'
import { getFileBySlug } from '~/libs/mdx'
import type { MdxFileData } from '~/types'

export async function getStaticProps() {
  const authorData = await getFileBySlug('authors', 'default')
  return { props: { authorData } }
}

export default function About({ authorData }: { authorData: MdxFileData }) {
  const { mdxSource, frontMatter } = authorData

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
