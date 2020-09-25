import React from 'react'
import styled from 'styled-components'

const ExploreFeature = () => {
  return (
    <>
      <Div>
        <a href='https://www.google.com'>EXPLORE FEATURES</a>
      </Div>
    </>
  )
}

export default ExploreFeature

const Div = styled.div`
  padding: 84px 0;
  text-align: center;
  a{
    text-decoration: none;
    color: #1cb39b;
    border: 2px solid #77d7c8;
    border-radius: 40px;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.071rem;
    padding: 18px 32px;
  }
`