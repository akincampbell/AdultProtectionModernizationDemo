import React from 'react'
import InfoCard from './InfoCard.jsx'

export default function InfoGrid({ items }){
  return (
    <section className="container">
      <div className="grid">
        {items.map((c, i) => <InfoCard key={i} {...c} />)}
      </div>
    </section>
  )
}
