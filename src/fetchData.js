import { useAllPrismicDocumentsByType } from '@prismicio/react'

export async function FetchData () {
  const [document] = useAllPrismicDocumentsByType('post')

  const data = await document
  console.log(data)

  return data
}

export default FetchData
