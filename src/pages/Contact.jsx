import React from 'react'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact(){
  return (
    <main id="main" className="container">
      <h1>Contact</h1>
      <p>Use this demo contact form to simulate outreach for information. Messages are saved to a local JSON file via the included Express API.</p>
      <ContactForm />
    </main>
  )
}
