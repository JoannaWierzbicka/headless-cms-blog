import React from 'react'
import { usePrismicDocumentByUID } from '@prismicio/react'

export const getDataFromPrismic = () => {
  const [document] = usePrismicDocumentByUID('post', 'post-nr-2')
  console.log(document)

  const data = document ? document.data : ''
  console.log(data)

  return (
    <div>
      {data.date}
    </div>
  )
}

export default getDataFromPrismic
