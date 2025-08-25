import React from 'react'

export default function ResourceList({ resources }){
  return (
    <section className="container card" aria-labelledby="resources-title">
      <h2 id="resources-title">Resources</h2>
      <table className="table">
        <thead>
          <tr><th scope="col">Name</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          {resources.map((r,i) => (
            <tr key={i}>
              <td><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></td>
              <td>{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="help">Always verify current guidance on the official State of Minnesota websites.</p>
    </section>
  )
}
