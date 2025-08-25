import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <main id="main" className="container">
      <h1>Page not found</h1>
      <p>Try going back to the <Link to="/">home page</Link>.</p>
    </main>
  )
}
