import React from 'react'
import Search from '../coms/FaqPage/SearchFolder/Search'
import Faqs from '../coms/FaqPage/FaqFolder/Faqs'
import { useEffect } from 'react'

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
      <Search />
      <Faqs />
    </>
  )
}

export default FaqPage
