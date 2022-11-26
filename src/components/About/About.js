import React from 'react'

import { useSinglePrismicDocument } from '@prismicio/react'
import StyledDiv from '../../styled/StyledDiv'
import Loader from '../Loader'

export const About = () => {
  const [about] = useSinglePrismicDocument('about')
  return (
    <StyledDiv>
      {
        !about
          ? <Loader/> :
          <div><h3>{about.data.title[0].text}</h3>
            <p>{about.data.text[0].text}</p>

          </div>
      }
    </StyledDiv>
  )
}

export default About
