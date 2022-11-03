import React from 'react'
import tw from 'tailwind-styled-components'

import Hero from './components/hero'
import Row from './components/row'

const Wrapper = tw.div`
  w-full p-0 lg:pl-48
`

function HomeView() {
  return (
    <Wrapper>
      <Hero />
      <Row title='top series' url='top/tv'/>
      <Row title='featured for you' url='top/movie'/>
      <Row title='new release' url='new release'/>
      <Row title='thriller - action ' url='action'/>
      <Row title='Romance - comedie' url='comedie'/>
      <Row title='drama - horror' url='horror'/>
      <Row title='adventure - science fiction' url='sci-fi'/>
      <Row title='animation' url='animation'/>
      <Row title='documantary' url='documantary'/>
    </Wrapper>
  )
}

export default HomeView