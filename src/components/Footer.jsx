import React from 'react'

export default function Footer(){
  return (
    <footer role="contentinfo">
      <div className="container">
        <p><strong>Demo only:</strong> Not an official government website. For emergencies call 911. For real services, use official State of Minnesota resources.</p>
        <p>© {new Date().getFullYear()} Demo portfolio project.</p>
      </div>
    </footer>
  )
}
