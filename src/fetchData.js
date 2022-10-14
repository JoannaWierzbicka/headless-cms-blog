import { useAllPrismicDocumentsByType } from '@prismicio/react'

export async function FetchData () {
  const [document] = useAllPrismicDocumentsByType('post')

  const data = await document

  const posts = data && data.map(post => {
    return {
      title: post.data.title[0].text,
      text: post.data.text[0].text,
      uid: post.uid
    }
  })
  console.log(posts)

  return posts
}

export default FetchData
