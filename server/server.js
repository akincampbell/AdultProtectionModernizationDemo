import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001
const DATA_DIR = path.join(__dirname, 'data')
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json')

app.use(cors({ origin: [/^http:\/\/localhost:\/\d+$/], credentials: false }))
app.use(express.json({ limit: '1mb' }))

function ensureDataFile(){
  if(!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  if(!fs.existsSync(SUBMISSIONS_FILE)) fs.writeFileSync(SUBMISSIONS_FILE, '[]', 'utf8')
}
ensureDataFile()

app.get('/api/health', (req, res) => res.json({ ok: true, service: 'mn-aps-demo', time: new Date().toISOString() }))

app.post('/api/contact', (req, res) => {
  const { name, email, reason, details, consent } = req.body || {}
  if(!name || !email || !details || !consent){
    return res.status(400).send('Missing required fields.')
  }
  const submission = {
    id: Math.random().toString(36).slice(2),
    name, email, reason, details,
    createdAt: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || null
  }
  try{
    ensureDataFile()
    const raw = fs.readFileSync(SUBMISSIONS_FILE, 'utf8')
    const arr = JSON.parse(raw || '[]')
    arr.push(submission)
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(arr, null, 2), 'utf8')
  }catch(err){
    console.error('Failed to write submission', err)
    return res.status(500).send('Failed to save')
  }
  res.status(201).json({ ok: true, id: submission.id })
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
