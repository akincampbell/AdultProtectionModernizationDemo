import React from 'react'
import Alert from '../components/Alert.jsx'

export default function GetHelp(){
  return (
    <main id="main" className="container">
      <h1>Get Help</h1>
      <Alert type="warn" role="alert">If someone is in immediate danger, call <strong>911</strong>.</Alert>
      <section className="card">
        <h2>How to Report Concerns</h2>
        <p>Use the official State of Minnesota channels to report suspected abuse, neglect, or exploitation of a vulnerable adult. This demo does not accept reports.</p>
        <ul>
          <li>Gather facts: who is involved, what happened, when/where, and any immediate safety concerns.</li>
          <li>Share only what you know. If unsure, seek guidance through official resources.</li>
          <li>Respect privacy; this demo site does not process real reports or store sensitive data.</li>
        </ul>
        <p>
          Visit the <a href="https://mn.gov/" target="_blank" rel="noreferrer">Official Minnesota websites</a> for current APS reporting options.
        </p>
      </section>
      <section className="card">
        <h2>Immediate Needs</h2>
        <p>For urgent medical needs, contact healthcare or emergency services. For non-emergency welfare checks, contact local law enforcement or county services through official directories.</p>
      </section>
    </main>
  )
}
