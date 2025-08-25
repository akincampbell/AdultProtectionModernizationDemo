import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div>
        <h1 id="hero-title">Supporting vulnerable adults with dignity and safety</h1>
        <p>Learn how Adult Protective Services (APS) works, spot warning signs, and find official Minnesota resources. This modern, accessible demo showcases how information and contact tools could be presented.</p>
        <div className="cta-group">
          <Link className="btn" to="/get-help" aria-label="Go to Get Help page">Get Help</Link>
          <Link className="btn secondary" to="/learn" aria-label="Go to Learn page">Learn More</Link>
          <Link className="btn ghost" to="/contact" aria-label="Go to Contact page">Contact</Link>
        </div>
      </div>
      <div className="card" aria-hidden="true">
        <h3>What’s inside</h3>
        <ul>
          <li>Plain-language APS overview</li>
          <li>Key indicators of concern</li>
          <li>Links to official resources</li>
          <li>Accessible, mobile-first UI</li>
          <li>Demo contact form + API</li>
        </ul>
      </div>
    </section>
  )
}
