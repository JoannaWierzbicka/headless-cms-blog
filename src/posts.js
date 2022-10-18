import { useAllPrismicDocumentsByType } from '@prismicio/react'

export const Posts = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''

  return posts
}

export default Posts
