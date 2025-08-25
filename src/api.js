const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

export async function submitContact(payload){
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if(!res.ok){
    const text = await res.text()
    throw new Error(text || 'Failed to submit')
  }
  return res.json()
}

export async function health(){
  const res = await fetch(`${API_BASE}/api/health`)
  return res.json()
}
