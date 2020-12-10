import React, {useEffect} from 'react'
import Mansories from '../coms/VerticalMansory/Mansories'

const FeaturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
      <Mansories />
    </>
  )
}

export default FeaturePage
