import React from 'react'

export default function FAQ({ items }){
  return (
    <section className="container">
      <div className="card">
        <h2>Frequently Asked Questions</h2>
        <div>
          {items.map((f, i) => (
            <details key={i} className="card" style={{marginTop: 8}}>
              <summary><strong>{f.q}</strong></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
