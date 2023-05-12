import React from 'react'
import AutomaticCarousel from './slider'
import { AutoSliderImg } from './data'

const ashu = () => {
  return (
    <div>
      <div>
        <AutomaticCarousel cards={AutoSliderImg} />
      </div>
    </div>
  )
}

export default ashu
