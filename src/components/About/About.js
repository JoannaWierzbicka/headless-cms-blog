import React from 'react'

import { useSinglePrismicDocument } from '@prismicio/react'
import StyledDiv from '../../styled/StyledDiv'

export const About = () => {
  const [about] = useSinglePrismicDocument('about')
  return (
    <StyledDiv>
      {
        !about
          ? <p>Loading...</p> :
          <div><h3>{about.data.title[0].text}</h3>
            <p>{about.data.text[0].text}</p>

          </div>
      }
    </StyledDiv>
  )
}

export default About
