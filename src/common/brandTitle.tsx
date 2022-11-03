import React from 'react'
import tw from 'tailwind-styled-components'

const Brand = tw.h1`
 text-2xl font-bold text-primary-400 
`

function BrandTitle() {
  return (
    <Brand>streameo</Brand>
  )
}

export default BrandTitle