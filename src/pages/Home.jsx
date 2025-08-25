import React from 'react'
import Hero from '../components/Hero.jsx'
import InfoGrid from '../components/InfoGrid.jsx'
import ResourceList from '../components/ResourceList.jsx'
import { cards, resources } from '../content/info.js'

export default function Home(){
  return (
    <main id="main">
      <Hero />
      <InfoGrid items={cards} />
      <ResourceList resources={resources} />
    </main>
  )
}
