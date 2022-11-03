import React from 'react'

import Hero from './components/hero'
import Row from './components/row'


function HomeView() {
  return (
    <>
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
    </>
  )
}

export default HomeView