import React, { useState } from 'react'
import { submitContact } from '../api.js'
import Alert from './Alert.jsx'

const initial = {
  name: '',
  email: '',
  reason: 'learn',
  details: '',
  consent: false
}

function validate(values){
  const errors = {}
  if(!values.name.trim()) errors.name = 'Required'
  if(!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Enter a valid email'
  if(!values.details.trim() || values.details.length < 10) errors.details = 'Please provide at least 10 characters'
  if(!values.consent) errors.consent = 'Please confirm you understand this is a demo only'
  return errors
}

export default function ContactForm(){
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [message, setMessage] = useState('')

  function handleChange(e){
    const { name, value, type, checked } = e.target
    setValues(v => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if(Object.keys(errs).length) return

    setStatus('sending'); setMessage('Submitting…')
    try{
      const res = await submitContact(values)
      setStatus('success')
      setMessage('Thanks! Your message was recorded locally. (Demo only.)')
      setValues(initial)
    }catch(err){
      setStatus('error')
      setMessage(err.message || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status !== 'idle' && (
        <Alert type={status === 'error' ? 'error' : status === 'success' ? 'success' : ''}>{message}</Alert>
      )}
      <div className="row">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={handleChange} required />
          {errors.name && <div className="error" role="alert">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} required />
          {errors.email && <div className="error" role="alert">{errors.email}</div>}
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="reason">Reason</label>
          <select id="reason" name="reason" value={values.reason} onChange={handleChange}>
            <option value="learn">I want to learn more</option>
            <option value="help">I need help / guidance</option>
            <option value="professional">I am a professional seeking info</option>
          </select>
        </div>
        <div>
          <label htmlFor="details">Details</label>
          <textarea id="details" name="details" rows="5" value={values.details} onChange={handleChange} placeholder="Share only non-sensitive details in this demo." />
          {errors.details && <div className="error" role="alert">{errors.details}</div>}
        </div>
      </div>

      <div style={{marginTop: 10}}>
        <label>
          <input type="checkbox" name="consent" checked={values.consent} onChange={handleChange} /> I understand this is a demo and does not submit real reports.
        </label>
        {errors.consent && <div className="error" role="alert">{errors.consent}</div>}
        <p className="help">In an emergency, call 911. For official reporting in Minnesota, use official state websites.</p>
      </div>

      <div style={{marginTop: 16}}>
        <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit'}</button>
      </div>
    </form>
  )
}
