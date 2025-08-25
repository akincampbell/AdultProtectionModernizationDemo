import React from 'react'
import { cards, faqs } from '../content/info.js'
import InfoGrid from '../components/InfoGrid.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Learn(){
  return (
    <main id="main" className="container">
      <h1>Learn about Adult Protection</h1>
      <p className="help">This content is general and for demonstration only. Always use official MN resources for current guidance.</p>
      <InfoGrid items={cards} />
      <FAQ items={faqs} />
    </main>
  )
}
