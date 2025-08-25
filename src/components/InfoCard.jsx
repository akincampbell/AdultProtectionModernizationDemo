import React from 'react'

export default function InfoCard({ title, body }){
  return (
    <article className="card" aria-label={title}>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}
