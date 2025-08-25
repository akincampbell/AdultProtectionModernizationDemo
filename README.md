# MN Adult Protection (Demo)

A **simple, professional React app** showcasing UI/UX and accessibility for an Adult Protection Modernization concept for the **State of Minnesota** domain. Includes a small Express API to accept contact form submissions (stored locally).

> ⚠️ **Disclaimer:** This is a demo for interview/portfolio/educational use. It is **not** an official State of Minnesota site. For real emergencies, call **911**. For real Adult Protective Services information and reporting, use the **official state resources**.

---

## Quick Start

### Prerequisites
- **Node.js 18+** (verify with `node -v`)
- **npm** (bundled with Node)

### 1) Install
```bash
npm install
```

### 2) Run in development
```bash
npm run dev
```
This runs:
- Vite dev server at **http://localhost:5173/**
- Express API at **http://localhost:3001/**

### 3) Test the contact form
Open http://localhost:5173/contact and submit the form. Submissions are stored at `server/data/submissions.json`.

### 4) Build for production
```bash
npm run build
npm run preview
```
Preview runs a static server for the built frontend at **http://localhost:4173/**. (The Express API is not used in preview mode.)

---

## Project Structure

```
mn-adult-protection-app/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── logo.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── router.jsx
│   ├── styles.css
│   ├── api.js
│   ├── content/
│   │   └── info.js
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoCard.jsx
│   │   ├── InfoGrid.jsx
│   │   ├── ResourceList.jsx
│   │   ├── FAQ.jsx
│   │   ├── Alert.jsx
│   │   └── ContactForm.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Learn.jsx
│       ├── GetHelp.jsx
│       ├── Contact.jsx
│       └── NotFound.jsx
└── server/
    ├── server.js
    └── data/
        └── submissions.json
```

---

## Implementation Notes

- **Accessibility-first**: semantic landmarks, labels, keyboard focus styles, skip link, color-contrast friendly palette.
- **Routing** with `react-router-dom` for Home / Learn / Get Help / Contact.
- **Contact Form** with inline validation and an API POST to `/api/contact` that stores submissions to a JSON file.
- **No external UI libs** keep dependencies lean; styles are custom CSS.
- **Config**: API base URL defaults to `http://localhost:3001` but can be overridden with `VITE_API_BASE_URL` env var.

---

## Environment Variable (optional)

Create `.env`:
```
VITE_API_BASE_URL=http://localhost:3001
```

---

## Production Considerations (if you extend this)
- Replace the local JSON store with a database (e.g., Postgres) and proper authentication.
- Add server-side validation and rate limiting.
- Integrate real email delivery (e.g., SES) or queue.
- Add automated tests (unit + e2e).
- Containerize with Docker for consistent deployments.

---

## Error Handling: 

### Issue (when running in a Github codespace): `concurrently: Permission denied` when running `npm run dev`
### Fix: 
#### 1) Install concurrently as a dev dependency: 'npm install --save-dev concurrently'
#### 2) Clean and reinstall dependencies (optional if issues persist): rm -rf node_modules package-lock.json
#### 2a) Then run: npm install
#### 3) Re-run the dev command: npm run dev


