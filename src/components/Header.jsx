import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header(){
  return (
    <header role="banner">
      <div className="container nav">
        <Link to="/" className="brand" aria-label="Home">
          <img src="/logo.svg" alt="" />
          <span>Adult Protection Modernization — MN (demo)</span>
        </Link>
        <nav aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/learn">Learn</NavLink>
          <NavLink to="/get-help">Get Help</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="spacer" aria-hidden="true"></div>
        <a className="btn ghost" href="https://mn.gov/" target="_blank" rel="noreferrer">Official MN</a>
      </div>
    </header>
  )
}
