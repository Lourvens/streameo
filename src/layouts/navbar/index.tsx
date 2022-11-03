import BrandTitle from '@/common/brandTitle'
import React from 'react'
import tw from 'tailwind-styled-components'
import { BiMenu } from 'react-icons/bi'

const Container = tw.nav`fixed top-0 z-50 w-full h-16 flex items-center justify-between
  px-4 py-2 bg-primary-900 bg-opacity-60 lg:hidden`
const MenuBtn = tw.button`p-1 border-2 rounded-lg border-transparent
  focus:border-blue-500
`

function Navbar() {
  return (
    <Container style={{ backdropFilter: "blur(10px)" }}>
      <BrandTitle />
      <MenuBtn
       data-hs-overlay="#docs-sidebar"
       aria-controls="docs-sidebar"
       aria-label="toggle navigation"
       type="button"
      >
        <BiMenu size={28} />
      </MenuBtn>
    </Container>
  )
}

export default Navbar